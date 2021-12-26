package com.bmw.intellijdemo.models;

public class Demo {
    private String name;
    private String test;
    private int num1;

    public Demo() {}

    public Demo(String name, String test, int num1) {
        this.name = name;
        this.test = test;
        this.num1 = num1;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTest() {
        return test;
    }

    public void setTest(String test) {
        this.test = test;
    }

    public int getNum1() {
        return num1;
    }

    public void setNum1(int num1) {
        this.num1 = num1;
    }
}
