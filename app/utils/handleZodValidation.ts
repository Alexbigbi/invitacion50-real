import { z, ZodError, ZodType } from 'zod'
import handleOneLevelZodError from './handleOneLevelZodError'

type ZObjectType = ZodType<Record<string | number, unknown>>

type ZodParams<T extends ZObjectType> = {
    onSuccess(data:T['_output']): void
    onError(error: Partial<Record<keyof T['_output'], string>>): void
    data: Record<string, unknown>
    schema: T
}

export type ValidationError<T extends ZObjectType> = Partial<Record<keyof T['_output'], string>>

export const handleZodValidation = <T extends ZObjectType>(params: ZodParams<T>) => {
    const { data, onError, onSuccess, schema} = params;

    try {
        const parsedData = schema.parse(data);
        onSuccess(parsedData);
    } catch (error) {
        if (error instanceof ZodError) {
            const formattedError = handleOneLevelZodError(error);
            onError(formattedError as Record<keyof T['_output'], string>);
        } else {
            throw new Error(String(error));
        }
    }
}
