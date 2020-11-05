//% color="#aa0000" icon="\uf11b"
namespace labowheel {

  /**
   * The yaw of the device on wheel, rotation along the wheel axis, in degrees.
   */
  //% blockId=labowheel_wheelRotation block="wheel rotation (°)" blockGap=8
  //% parts="accelerometer" advanced=false shim=labowheel::getYaw
  export function wheelRotation(): int32 {
    return 0
  }

  /**
   * Read analog joystick value and normalize it to interval [-255..255]
   * @param jPin pin to read value from, eg: AnalogPin.P0
   * @param minVal joystick value at positions next to groud
   * @param centerVal joystick value at rest
   * @param maxVal joystick value at positions next to Vcc
   */
  //% blockId=labowheel_readJoy block="joystic value on|pin $jPin|with min at $minVal|center at $centerVal|max at $maxVal" blockGap=8
  //% jPin.fieldEditor="gridpicker" jPin.fieldOptions.columns=4
  //% jPin.fieldOptions.tooltips="false" jPin.fieldOptions.width="250"
  //% minVal.min=0 minVal.max=1023 minVal.defl=0
  //% centerVal.min=0 centerVal.max=1023 centerVal.defl=512
  //% maxVal.min=0 maxVal.max=1023 maxVal.defl=1023
  //% inlineInputMode=inline
  export function readJoy (jPin: AnalogPin, minVal: number, centerVal: number, maxVal: number):number {
    const n = pins.analogReadPin(jPin)
    if(n < centerVal - 10){
        return (centerVal - n)/(centerVal-minVal)*-255
    }else if(n > centerVal + 10){
        return (n-centerVal)/(maxVal-centerVal)*255
    }
    return 0
  }
}