import { ApiResponseSchema } from './api-response-schema';

export const createAddressResponse: ApiResponseSchema = {
    success: {
        schema: {
            example: {
                endereco_id: 1,
                cep: '11111111',
                rua: 'lorem',
                bairro: 'test',
                cidade: 'São Paulo',
                numero: '123',
                complemento: '',
                uf: 'SP',
                cliente_id: 13,
            },
        },

        isArray: false,
    },
    unauthorized: {
        schema: {
            example: {
                message: 'Unauthorized',
                statusCode: 401,
            },
        },
    },
};

export const updateAddressResponse: ApiResponseSchema = {
    ok: {},
    unauthorized: {
        schema: {
            example: {
                message: 'Unauthorized',
                statusCode: 401,
            },
        },
    },
    notFound: {
        schema: {
            example: {
                message: 'address not found',
                error: 'Not Found',
                statusCode: 404,
            },
        },
    },
};

export const findAllResponse: ApiResponseSchema = {
    ok: {
        schema: {
            example: [
                {
                    endereco_id: 1,
                    cep: '11111111',
                    rua: 'lorem',
                    bairro: 'test',
                    cidade: 'São Paulo',
                    numero: '123',
                    complemento: '',
                    uf: 'SP',
                    cliente_id: 13,
                },
                {
                    endereco_id: 2,
                    cep: '11111111',
                    rua: 'lorem',
                    bairro: 'test',
                    cidade: 'São Paulo',
                    numero: '123',
                    complemento: '',
                    uf: 'SP',
                    cliente_id: 14,
                },
            ],
        },

        isArray: true,
    },
    unauthorized: {
        schema: {
            example: {
                message: 'Unauthorized',
                statusCode: 401,
            },
        },
    },
};

export const findOneResponse: ApiResponseSchema = {
    ok: {
        schema: {
            example: {
                endereco_id: 1,
                cep: '11111111',
                rua: 'lorem',
                bairro: 'test',
                cidade: 'São Paulo',
                numero: '123',
                complemento: '',
                uf: 'SP',
                cliente_id: 13,
            },
        },

        isArray: false,
    },
    unauthorized: {
        schema: {
            example: {
                message: 'Unauthorized',
                statusCode: 401,
            },
        },
    },
};

export const deleteAddressResponse: ApiResponseSchema = {
    ok: {},
    unauthorized: {
        schema: {
            example: {
                message: 'Unauthorized',
                statusCode: 401,
            },
        },
    },
    notFound: {
        schema: {
            example: {
                message: 'address not found',
                error: 'Not Found',
                statusCode: 404,
            },
        },
    },
};
