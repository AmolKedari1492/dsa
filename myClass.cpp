#include <iostream>
using namespace std;

class Quadra {
  int w, h;
public:
  void setParams(int a, int b) {
    w = a;
    h = b;
  };
  string getType() {
    std::cout << "w" << w << endl;
    std::cout << "h" << h << endl;
    if(w == h) {
      return "SQUARE";
    } else {
      return "RECTANGLE";
    }
  };
  int getArea() {
    return w * h;
  };
};
int main() {
  Quadra q;
  int width, height;
  std::cout << "Enter width : " << endl;
  std::cin >> width;
  std::cout << "Enter height : "<< endl;
  std::cin >> height;
  std::cout << "Quadra type : " << q.getType() << endl;
  q.setParams(width, height);
  std::cout << "Area is " << q.getArea();
  return 0;
}
