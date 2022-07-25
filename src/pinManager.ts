export class PinManager {
    private pinStatus = {};

    public isOn = (pump): boolean => {
        return this.pinStatus[pump];
    }

    public turnOn = (pump) => {
        this.pinStatus[pump] = true;
    }

    public turnOff = (pump) => {
        this.pinStatus[pump] = false;
    }
}