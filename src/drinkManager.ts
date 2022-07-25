import { DrinkEntry } from "./models/QueueEntry";

export class DrinkManager {
    private queue: DrinkEntry[] = [];

    /**
     * Adds a new drink to the drink manager
     * @param newDrink 
     */
    public push(newDrink: DrinkEntry) {
        this.queue.push(newDrink);
    }

    /**
     * Removes first entry from the drink manager
     */
    public pop() {
        if (this.queue.length === 0) {
            throw 'No drinks left';
        }

        this.queue.splice(0, 1);
    }

    /**
     * Returns the next drink in the queue
     */
    public next(): DrinkEntry | undefined {
        return this.queue.length > 1 && this.queue[1];
    }

    public top(): DrinkEntry {
        return this.queue[0];
    }

    public size(): number {
        return this.queue.length;
    }
}