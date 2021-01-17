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
  /**
   * Read digital buttons values and pack it as integer bits
   * @param joyZ pin to read value from, eg: DigitalPin.P5
   * @param up pin to read value from, eg: DigitalPin.P10
   * @param down pin to read value from, eg: DigitalPin.P8
   * @param left pin to read value from, eg: DigitalPin.P11
   * @param right pin to read value from, eg: DigitalPin.P9
   * @param select pin to read value from, eg: DigitalPin.P7
	 * @param menu pin to read value from, eg: DigitalPin.P6
   */
  //% blockId=labowheel_readDButtons block="pack digital buttons on pins $joyZ $up $down $left $right $select $menu" blockGap=8
  //% joyZ.fieldEditor="gridpicker" joyZ.defl=DigitalPin.P5
	//% up.fieldEditor="gridpicker" up.defl=DigitalPin.P10
	//% down.fieldEditor="gridpicker" down.defl=DigitalPin.P8
	//% left.fieldEditor="gridpicker" left.defl=DigitalPin.P11
	//% right.fieldEditor="gridpicker" right.defl=DigitalPin.P9
	//% select.fieldEditor="gridpicker" select.defl=DigitalPin.P7
	//% menu.fieldEditor="gridpicker" menu.defl=DigitalPin.P6
  //% inlineInputMode=inline
  export function readDButtons (joyZ: DigitalPin,up: DigitalPin,down: DigitalPin,left: DigitalPin,right: DigitalPin,select: DigitalPin,menu: DigitalPin):number {
		let rv: number = 0
    if(pins.digitalReadPin(joyZ)==0)
			rv|=0B00000001
    if(pins.digitalReadPin(up)==0)
			rv|=0B00000010
    if(pins.digitalReadPin(down)==0)
			rv|=0B00000100
    if(pins.digitalReadPin(left)==0)
			rv|=0B00001000
    if(pins.digitalReadPin(right)==0)
			rv|=0B00010000
    if(pins.digitalReadPin(select)==0)
			rv|=0B00100000
    if(pins.digitalReadPin(menu)==0)
			rv|=0B01000000
    return rv
  }
}