// biome-ignore lint/complexity/noBannedTypes:
export type IEvent = {
    getEventName(): string;
};

export type IEventPayload<E extends IEvent> = Record<keyof E, any>;
