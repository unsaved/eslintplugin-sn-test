#!/usr/bin/env bash
PROGNAME="${0##*/}"

# This script creates hard node copies of 'masterTest.js' for each script to test.
# Can't use sym-links because Node's __filepath resolves to the target file instead
# of the link (weird).

# $Id$

set +u
shopt -s xpg_echo
unset FORCE V_SWITCH REPLACE_MODE

SYNTAX_MSG="$PROGNAME [-h] [-r] [-v]
    -f:  Force replacement of existing test scripts (if any).
         By defaults leaves existing ones as-is.
    -h:  Display this Help text
    -r:  Regenerate the test tree completely, wiping what was there previously
    -v:  Verbose"

# : at beginning for silent mode.  All other :s represent str arg for prev. opt.
# 'option' is a placeholder variable here.  Can use anything.
while getopts ':fhrv' option; do
    case "$option" in
      f) FORCE=true;;
      r) REPLACE_MODE=true;;
      v) V_SWITCH=-v;;
      h) echo "$SYNTAX_MSG"; exit 0;;
      '?') echo "Invalid switch:  -$OPTARG\n$SYNTAX_MSG" 1>&2; exit 3;;
      ':') echo "Switch must be followed by space and a string: -$OPTARG\n$SYNTAS_MSG" 1>&2
           exit 3;;
      *) echo "Internal error.  Unexpected switch -$option" 1>&2; exit 3;;
    esac
done

shift $(($OPTIND - 1))

[ $# -ne 0 ] && {
    echo "SYNTAX_MSG" 1>&2
    exit 3
}

Abort() {
    echo "Aborting $PROGNAME:  $*" 1>&2
    exit 1
}

[ -f masterTest.js ] || Abort "Master test script 'masterTest.js' is missing"
[ -n "$TMPDIR" ] || TMPDIR=/tmp
TMPFILE="$TMPDIR/${PROGNAME#.*}.$$"
trap 'rm -f "$TMPFILE"' EXIT
[ -d 0scripts ] || Abort "Directory '0scripts' is missing"
[ -d 1scripts ] || Abort "Directory '1scripts' is missing"
[ -d 2scripts ] || Abort "Directory '2scripts' is missing"
[ -d 254scripts ] || Abort "Directory '254scripts' is missing"
find [0-9]scripts [0-9][0-9][0-9]scripts -name '*.js' > "$TMPFILE" ||
Abort 'find command failed'
[ -n "$REPLACE_MODE" ] && rm -rf test/[012] test/[0-9][0-9][0-9]
while read SCRIPT_PATH; do
    RV=
    case "$SCRIPT_PATH" in
        [0-9]scripts/*|[0-9][0-9][0-9]scripts/*) ;;
        *) Abort "Unexpected SCRIPT_PATH prefix: $SCRIPT_PATH";;
    esac
    RV="${SCRIPT_PATH%%scripts*}"
    REBASED="test/$RV/${SCRIPT_PATH#*scripts/}"
    TEST_PATH="${REBASED%.js}-test.js"
    [ -e "$TEST_PATH" ] && {
        [ -f "$TEST_PATH" ] || Abort "Existing filesystem node not a file: $TEST_PATH"
        [ -n  "$FORCE" ] || {
            [ -n "$V_SWITCH" ] && echo "Retaining existing test script '$TEST_PATH'"
            continue
        }
        rm $VSWITCH -f "$TEST_PATH"
    }
    [ -d "${TEST_PATH%/*}" ] || {
        mkdir $V_SWITCH -p "${TEST_PATH%/*}" ||
        Abort "Failed to create directory '${TEST_PATH%/*}'"
    }
    ln $V_SWITCH masterTest.js "$TEST_PATH" ||
    Abort "Failed to create hard link '$TEST_PATH'"
done < "$TMPFILE"
