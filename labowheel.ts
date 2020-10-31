namespace labowheel {
  /**
   * The yaw of the device on wheel, rotation along the wheel axis, in degrees.
   */
  //% blockId=wheel_get_rotation block="wheel rotation (°)" blockGap=8
  //% parts="accelerometer" advanced=false shim=labowheel::getYaw
  export function wheelRotation(): int32 {
    return 0;
  }
}