import { ApiResponseSchema } from './api-response-schema';

export const createCategoryResponse: ApiResponseSchema = {
    success: {
        schema: {
            example: {
                nome_categoria: 'Perfumes',
                descricao_categoria: 'Perfumes masculinos e femininos',
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

export const updateCategoryResponse: ApiResponseSchema = {
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
                message: 'category not found',
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
                    nome_categoria: 'Perfumes',
                    descricao_categoria: 'Perfumes masculinos e femininos',
                },
                {
                    nome_categoria: 'Cremes',
                    descricao_categoria: 'Cremes para cuidados com a pele',
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
                nome_categoria: 'Perfumes',
                descricao_categoria: 'Perfumes masculinos e femininos',
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

export const deleteCategoryResponse: ApiResponseSchema = {
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
                message: 'category not found',
                error: 'Not Found',
                statusCode: 404,
            },
        },
    },
};
