#include "pxt.h"

using namespace pxt;

namespace labowheel {
  // Get wheel rotation angle
  //%
  int getYaw(){
    Sample3D sample = uBit.accelerometer.getSample();
    double x = (double) sample.x;
    double y = (double) sample.y;
    double z = (double) sample.z;
    double yaw = atan2(x, y);
    return (int) ((360*yaw) / (2*PI));
  }
}