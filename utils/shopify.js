import { gql, GraphQLClient } from "graphql-request";

const storefrontAccessToken = process.env.STOREFRONT_ACCESS_TOKEN;
const endpoint = process.env.SHOP_URL;


const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
  },
});

// Function to fetch all Products
export async function getProducts() {
  const getAllProductsQuery = gql`
    {
      products(first: 1) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            featuredImage {
              altText
              url
            }
          }
        }
      }
    }
  `;
  try {
    return await graphQLClient.request(getAllProductsQuery);
  } catch (error) {
    throw new Error(error);
  }
}

// Function to get One Product
export const getProduct = async (id) => {
  const productQuery = gql`
    query getProduct($id: ID!) {
      product(id: $id) {
        id
        handle
        title
        description
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        featuredImage {
          url
          altText
        }
        variants(first: 10) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  `;
  const variables = {
    id,
  };
  try {
    const data = await graphQLClient.request(productQuery, variables);
    return data.product;
  } catch (error) {
    throw new Error(error);
  }
};

// Function to add item to cart
export async function addToCart(itemId, quantity) {
    const createCartMutation = gql`
        mutation createCart($cartInput: CartInput) {
            cartCreate(input: $cartInput) {
                cart {
                    id
                }
            }
        }
    `;
    const variables = {
        cartInput: {
        lines: [
            {
            quantity: parseInt(quantity),
            merchandiseId: itemId,
            },
        ],
        },
    };
    try {
        return await graphQLClient.request(createCartMutation, variables);
    } catch (error) {
        throw new Error(error);
    }
}

// Retrieving Cart
export async function retrieveCart(cartId) {
    const cartQuery = gql`
      query cartQuery($cartId: ID!) {
        cart(id: $cartId) {
          id
          createdAt
          updatedAt
  
          lines(first: 10) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                  }
                }
              }
            }
          }
          estimatedCost {
            totalAmount {
              amount
            }
          }
        }
      }
    `;
    const variables = {
        cartId,
    };
    try {
        const data = await graphQLClient.request(cartQuery, variables);
        return data.cart;
    } catch (error) {
        throw new Error(error);
    }
}

// Get Checkout URL 
export const getCheckoutUrl = async (cartId) => {
    const getCheckoutUrlQuery = gql`
      query checkoutURL($cartId: ID!) {
        cart(id: $cartId) {
          checkoutUrl
        }
      }
    `;
    const variables = {
      cartId: cartId,
    };
    try {
      return await graphQLClient.request(getCheckoutUrlQuery, variables);
    } catch (error) {
      throw new Error(error);
    }
};
