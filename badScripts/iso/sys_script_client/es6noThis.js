class A {  // Based on 'incorrect' example in ESLint Rules ref for class-methods-use-this
    foo() {
        console.info("Hello World");
    }
}
 new A();
