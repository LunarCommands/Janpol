// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Definen a schema for an image object.
const imageSchema = z.object({
  src: z.string(),
  alt: z.string(),
});
// 3. Define a schema for each collection you'd like to validate.
const mechanizmyWyjazdu = defineCollection({
  schema: z.object({
    title: z.string().max(100, "For optimize SEO, please provide a title of 100 ch or less."),
    description: z.string(),
    images: z.array(imageSchema)
  }),
});

const akcesoria = defineCollection({
  schema: z.object({
    title: z.string().max(100, "For optimize SEO, please provide a title of 100 ch or less."),
    images: z.array(imageSchema)
  }),
});

const podnosniki = defineCollection({
  schema: z.object({
    title: z.string().max(100, "For optimize SEO, please provide a title of 100 ch or less."),
    description: z.string(),
    images: z.array(imageSchema)
  }),
});

const realizacje = defineCollection({
  schema: z.object({
    src: z.string(),
    alt: z.string(),
  }),
});

const nogi = defineCollection({
  schema: z.object({
    title: z.string().max(100, "For optimize SEO, please provide a title of 100 ch or less."),
    description: z.string(),
    images: z.array(imageSchema)
  })
})
// 4. Export a single `collections` object to register your collection(s)
export const collections = { 
    'mechanizmy-wyjazdu': mechanizmyWyjazdu,
    'akcesoria': akcesoria,
    'podnosniki': podnosniki,
    'nogi': nogi,
};