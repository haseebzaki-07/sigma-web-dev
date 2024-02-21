// #include <iostream>
// using namespace std;

// class person{
//     public:
//     int age;
//     string name;
// };

// int main() {
//     person obj;
//     obj.age = 10;
//     obj.name = "Haseeb";
//     cout<<obj.age<<endl;
//     cout<<obj.name<<endl;
//     return 0;
// }


#include <iostream>
using namespace std;

class person{
    public:
    void Mymethod(){
        int a = 2, b = 3,c;
        c = a+b;
        cout<<c;
    }
};

int main() {
    person obj;
    obj.Mymethod();
    return 0;
}