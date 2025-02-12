import { z, defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";

const links = defineCollection({
	loader: file("src/data/links.json"),
	schema: ({ image }) =>
		z.object({
			id: z.string(),
			description: z.string(),			
			image: image().optional(),
			links:  z.array(
				z.object({				
				  name: z.string(),
				  url: z.string(),
				  target: z.string(),
				})
			  )
		}),
});

export const collections = { links };
