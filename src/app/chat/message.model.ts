export interface ChatMessage {
    sender: "user" | "bot";
    text: string;
    dateSent?: Date;
    dateReceived?: Date;
    responseOptions?: ChatResponseOption[];
}

export type MockChatMessage = { delay: number } & ChatMessage;

export interface ChatResponseOption {
    text: string;
}

export function mockMessageGenerator(callback: (msg: ChatMessage) => void) {
    let mockMessages: MockChatMessage[] = [
        {
            delay: 2000,
            sender: "bot",
            text: "Hello! How can I help you today?",
            responseOptions: [
                { text: "Advice" },
                { text: "Fun Activities" },
                { text: "Other" }
            ]
        },
        {
            delay: 6000,
            sender: "user",
            text: "Advice"
        },
        {
            delay: 8000,
            sender: "bot",
            text: "What would you like advice about?",
            responseOptions: [
                { text: "Young Children" },
                { text: "Teens" },
                { text: "Other" }
            ]
        }
    ];
    mockMessages.forEach((msg) => {
        setTimeout(() => {
            callback(msg);
        }, msg.delay);
    })
    return 
}