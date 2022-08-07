import {createClient, createImageUrlBuilder} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
	projectId: "miymga33",
	dataset: "production",
	apiVersion: "2021-03-25",
	useCdn: true,
	token: "skR7GRNbNvhsf32RFTHZ0SU8hw2af1h97WnIEx97MuJWg6m7AO3G7L8N2pQHDNi2H9cQiGnhk2cBTTvzNRppO6rjtUtHSyr41qwQRIKQh4xXYuTx7ySMTFhjP31OWbaekEk9V32nAfZhdqYQJmZ9D6BKEJ9NbcG3rdtDAaj2jaqYc7EP1eM8"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);