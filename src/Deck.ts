export class Deck {
    // define the attributes
    cards: string[] = [];

    constructor(deckCount: number) {
        this.createDeck(deckCount);
    }

    private createDeck(deckCount: number) {
        // create empty list to store deck
        let deck: string[] = [];

        // create the deck
        for (let i = 0; i < deckCount; i++) {
            for (let j = 0; j < 4; j++) {
                deck.push('2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A');
            }
        }
        this.cards = deck;
    }

    shuffleDeck() {
        // shuffle the deck of cards
        for (let i = 0; i < this.cards.length; i++) {
            for (let j = 0; j < 10; j++){
                // each iteration is shuffled 10 times
                const randomIndex = Math.floor(Math.random() * this.cards.length);
                const temp = this.cards[randomIndex];
                // swap the cards
                this.cards[randomIndex] = this.cards[i];
                this.cards[i] = temp;
            }
        }
    }

    // define overload signatures
    drawCard(): string[];
    drawCard(multiplier: number): string[];

    drawCard(multiplier?: number): string[]{
        const drawnCards: string[] = [];
        // check if multiplier is 0 or if deck is empty
        if (this.cards.length === 0 || multiplier === 0) {
            return [];
        }
        // draw a card from the deck based on multiplier
        const drawCount = multiplier ?? 1;
        for (let i = 0; i < drawCount; i++) {
            if (this.cards.length > 0) {
                drawnCards.push(<string>this.cards.pop());
            } else {
                break;
            }
        }
        return drawnCards;
    }
}