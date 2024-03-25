
class Listener {
    constructor() {
        this.listeners = [];
        this.instruction = {};
    }
    worker(what) {
        this.instruction = what;
        this.notifyListeners();
    }
    getInstruction() {
        return this.instruction;
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    removeListener(listenerToRemove) {
        this.listeners = this.listeners.filter(listener => listener !== listenerToRemove);
    }
    notifyListeners() {
        this.listeners.forEach(listener => listener());
    }
};
export default new Listener();