export const MAX_LOG_DATA_SIZE = 10000;

export const truncateLogContent = (msg?: string): string | undefined => {
    if (typeof msg === 'string') {
        return msg.slice(0, MAX_LOG_DATA_SIZE);
    }
    return undefined;
};
