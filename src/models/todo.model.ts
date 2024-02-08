export class TodoModel {
    private _id: string;
    private _text: string;
    constructor(id: string, text: string) {
        this._id = id;
        this._text = text;
    }
    // Getter
    get id(): string {
        return this._id;
    }

    // Setter
    set id(value: string) {
        this._id = value;
    }

    get text(): string {
        return this._text;
    }
    // Setter
    set text(text: string) {
        this._text = text;
    }
}