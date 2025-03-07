import { z, defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";

const links = defineCollection({
	loader: file("src/data/links.json"),
	schema: ({ image }) =>
		z.object({
			id: z.string(),
			description: z.string(),			
			image: image().optional(),
			enviroments:  z.array(
				z.object({				
					label: z.string(),
					enviroment: z.string(),
					checked: z.boolean().optional(),
				})
			).optional(),
			links:  z.array(
				z.object({				
					name: z.string(),
				  	url: z.string(),
				  	target: z.string(),
				  	image: image().optional(),
					isDinamic: z.boolean(), 
					tmplUrl: z.string().optional(),
					tags:  z.array(
						z.object({											
							enviroment: z.string(),
							tag: z.string(),
					})
					).optional()				 		 
				})
			  )
		})
});

export const collections = { links };
