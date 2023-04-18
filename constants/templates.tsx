export type TemplateInput = {
    id: string;
    label: string;
    placeholder: string;
    type: "text" | "textarea" | "select";
    options?: string[];
};

export type Template = {
    id: string;
    title: string;
    description: string;
    command: string;
    inputs: TemplateInput[];
    icon: any;
    categories: string[];
};

export const TEMPLATES: Template[] = [
    {
        "id": "a6dc-0f21-c102-6c22",
        "title": "Amazon Product Description (paragraph)",
        "description": "Create compelling product descriptions for Amazon listings.",
        "command": "Create compelling product descriptions for Amazon listings.",
        "icon": `<i class="fab fa-aws text-primary"></i>`,
        "categories": ["ecommerce", "ads"],
        inputs: [
            {
                id: "product-name",
                label: "Product Name",
                placeholder: "A red t-shirt",
                type: "text",
            },
            {
                id: "key-features",
                label: "Key Features/Benefits",
                placeholder: "Stretching, pleasant",
                type: "textarea",
            },
            {
                id: "tone-of-voice",
                label: "Tone of Voice",
                placeholder: "Select a tone. For example: Witty, Friendly, Disappointed, Polite, Creative, Professional or a known person such as Michael Jordan",
                type: "text",
            },
        ]
    },
    {
        "id": "3b9e-c357-63fb-f7cb",
        "title": "Amazon Product Features (bullets)",
        "description": "Create key feature and benefit bullet points for Amazon listings under the 'about this item' section.",
        "command": "Create key feature and benefit bullet points for Amazon listings under the 'about this item' section.",
        "icon": `<i class="fab fa-aws text-primary"></i>`,
        "categories": ["ecommerce", "ads"],
        "inputs": [
            {
                "id": "product-name",
                "label": "Product Name",
                "placeholder": "EcoBoost Portable Solar Charger",
                "type": "text"
            },
            {
                "id": "product-info",
                "label": "Product Info",
                "placeholder": "EcoBoost Portable Solar Charger - Compact, Lightweight, and Waterproof - Perfect for Camping, Hiking, and Emergency Preparedness - Compatible with Smartphones, Tablets, and USB Devices",
                "type": "textarea"
            },
            {
                "id": "product-benefits",
                "label": "Key Benefits/Features",
                "placeholder": "Lightweight design. Waterproof & Durable. Fast charging. Universal compatibility. Environmentally friendly.",
                "type": "text"
            },
            {
                "id": "tone-of-voice",
                "label": "Tone of Voice",
                "placeholder": "Professional. Friendly. Funny.",
                "type": "text"
            }
        ]
    },

    {
        "id": "5df5-5b3a-d3a7-1610",
        "title": "Blog Post Conclusion Paragraph",
        "description": "Wrap up your blog posts with an engaging conclusion paragraph.",
        "command": "Wrap up your blog posts with an engaging conclusion paragraph.",
        "icon": `<i class="fas fa-fire text-primary"></i>`,
        "categories": ["blog", "seo"],
        "inputs": [
            {
                "id": "blogPostMainPoints",
                "label": "What are the main points or outline of your blog post?",
                "placeholder": "The importance of time management. Tips for better time management. Benefits of effective time management.",
                "type": "textarea"
            },
            {
                "id": "cta",
                "label": "Call to action",
                "placeholder": "Share your time management tips with us in the comments below!",
                "type": "text"
            },
            {
                "id": "tone",
                "label": "Tone of voice",
                "placeholder": "Motivational",
                "type": "text"
            }
        ]
    },
    {
        "id": "8d27-85d1-d2bb-f6d8",
        "title": "Blog Post Intro Paragraph",
        "description": "Write an engaging opening paragraph for your blog post.",
        "command": "Write an engaging opening paragraph for your blog post.",
        "icon": `<i class="fas fa-fire text-primary"></i>`,
        "categories": ["blog", "seo"],
        "inputs": [
            {
                "id": "blogPostTitle",
                "label": "Blog post title",
                "placeholder": "Creative Ways to Save Money on a Tight Budget",
                "type": "text"
            },
            {
                "id": "audience",
                "label": "Audience",
                "placeholder": "Young professionals, Students, Budget-conscious individuals",
                "type": "text"
            },
            {
                "id": "tone",
                "label": "Tone of voice",
                "placeholder": "Informative, Friendly, Encouraging",
                "type": "text"
            }
        ]
    },
    {
        "id": "eb38-d6a3-3b3c-d790",
        "title": "Blog Post Outline",
        "description": "Create lists and outlines for articles, for example for 'How to' style blog posts and articles.",
        "command": "Create lists and outlines for an article: ",
        "icon": `<i class="fas fa-fire text-primary"></i>`,
        "categories": ["blog", "seo"],
        "inputs": [
            {
                "id": "title",
                "label": "Blog post title/topic",
                "placeholder": "Top 10 Remote Work Tools for Increased Productivity",
                "type": "text"
            },
            {
                "id": "tone",
                "label": "Tone of voice",
                "placeholder": "Informative, Relaxed, Helpful",
                "type": "text"
            }
        ]
    },

    {
        "id": "f4b4-4dc9-38e4-4714",
        "title": "Blog Post Topic Ideas",
        "description": "Generate new blog post topics that will engage readers and rank well on Google.",
        "command": "Generate new blog post topics that will engage readers and rank well on Google.",
        "icon": `<i class="fas fa-fire text-primary"></i>`,
        "categories": ["blog", "seo", "google"],
        "inputs": [
            {
                "id": "brandName",
                "label": "Brand name",
                "placeholder": "Eco Warrior",
                "type": "text"
            },
            {
                "id": "productDescription",
                "label": "Product description",
                "placeholder": "Eco-friendly products for a sustainable lifestyle, including reusable bags, water bottles, and home cleaning solutions.",
                "type": "textarea"
            },
            {
                "id": "audience",
                "label": "Audience",
                "placeholder": "Eco-conscious consumers, Sustainability advocates, Homeowners",
                "type": "text"
            },
            {
                "id": "tone",
                "label": "Tone of voice",
                "placeholder": "Informative, Friendly, Encouraging",
                "type": "text"
            }
        ]
    },
    {
        "id": "a0c6-7112-e2d8-07e9",
        "title": "Business or Product Name",
        "description": "Generate a winning name for your business or product.",
        "command": "Generate a winning name for your business or product.",
        "icon": "<i class='fas fa-lightbulb text-primary' ></i>",
        "categories": ["marketing"],
        "inputs": [
            {
                "id": "form-field-description",
                "type": "textarea",
                "label": "Tell us about your business or product",
                "placeholder": "Innovative online marketplace connecting local service providers and customers.",
            },
            {
                "id": "form-field-keywords",
                "type": "text",
                "label": "Keywords to include",
                "placeholder": "ninja",
            }
        ]
    },
    {
        "id": "ab91-6218-4ed4-4374",
        "title": "Commands",
        "description": "Tell Jema.ai exactly what to write with a command.",
        "command": "Please do the following: ",
        "icon": "<i class='fas fa-terminal  text-primary'></i>",
        "categories": ["all", "google"],
        "inputs": [
            {
                "id": "form-field-command",
                "type": "textarea",
                "label": "Your command",
                "placeholder": "Write a creative story about Tobby flying to the moon in Matthew McConaughey's tone of voice",
            },
            {
                "id": "form-field-content",
                "type": "textarea",
                "label": "Background information",
                "placeholder": "Tobby was a happy dog that loved to sneak around eating people's food",
            }
        ]
    },
    {
        "id": "2f67-d52f-fc58-383d",
        "title": "Creative Story",
        "description": "Write creative stories to engage readers.",
        "command": "Write a creative story ",
        "icon": "<i class='fas fa-book-open text-primary'></i>",
        "categories": ["blog", "website"],
        "inputs": [
            {
                "id": "storyPlot",
                "type": "textarea",
                "label": "Plot",
                "placeholder": "A magical kingdom faces a drought that threatens its existence. The king sends a brave knight on a quest to find a legendary water source.",
            },
            {
                "id": "tone",
                "type": "text",
                "label": "Tone of voice",
                "placeholder": "Whimsical",
            }
        ]
    },
    {
        "id": "1a79-8d7e-cc88-1e61",
        "title": "Email Subject Lines",
        "description": "Get your emails opened with irresistible subject lines.",
        "command": "Write Email Subject Lines. use the following : ",
        "icon": "<i class='fas fa-envelope text-primary'></i>",
        "categories": ["email", "marketing"],
        "inputs": [
            {
                "id": "companyName",
                "type": "text",
                "label": "Company/Product Name",
                "placeholder": "SmartMailer",
            },
            {
                "id": "tone",
                "type": "text",
                "label": "Tone of voice",
                "placeholder": "Friendly",
            },
            {
                "id": "emailContent",
                "type": "textarea",
                "label": "What is your email about?",
                "placeholder": "Introducing our latest online course on email marketing strategies. Early bird sign-ups get a 25% discount.",
            }
        ]
    },
    {
        "id": "72e8-66f6-1009-9e54",
        "title": "Company Bio",
        "description": "Share your company's story with a compelling bio.",
        "command": "Create a compelling bio for the following company. ",
        "icon": "<i class='fas fa-building text-primary'></i>",
        "categories": ["marketing", "website"],
        "inputs": [
            {
                "id": "companyName",
                "type": "text",
                "label": "Company Name",
                "placeholder": "InnovateTech",
            },
            {
                "id": "companyInformation",
                "type": "textarea",
                "label": "Company information",
                "placeholder": "InnovateTech is a cutting-edge technology firm that specializes in developing software solutions for businesses. Founded in 2018 and based in New York City, we focus on helping companies streamline their processes and improve customer engagement.",
            },
            {
                "id": "tone",
                "type": "text",
                "label": "Tone of voice",
                "placeholder": "Professional",
            }
        ]
    },
    {
        "id": "e7b3-458e-62df-17c8",
        "title": "Content Improver",
        "description": "Enhance a piece of content by rewriting it to be more engaging, creative, and captivating.",
        "command": "Rewrite the following content to be more engaging, creative, and captivating: ",
        "icon": "<i class='fas fa-pencil-alt text-primary'></i>",
        "categories": ["blog", "seo", "email"],
        "inputs": [
            {
                "id": "blandContent",
                "type": "textarea",
                "label": "Content",
                "placeholder": "We help agencies automate their daily tasks so they can scale better and faster with less effort.",
            },
            {
                "id": "tone",
                "type": "text",
                "label": "Tone of voice",
                "placeholder": "Funny",
            }
        ]
    },
    {
        "id": "23e7-687f-0df7-1e47",
        "title": "Facebook Ad Primary Text",
        "description": "Craft compelling primary text for Facebook ads that attract users.",
        "command": "Create compelling primary text for Facebook ad.",
        "icon": "<i class='fab fa-facebook text-primary'></i>",
        "categories": ["ads", "social_media"],
        "inputs": [
            {
                "id": "companyName",
                "type": "text",
                "label": "Company/Product Name",
                "placeholder": "Pushpress",
            },
            {
                "id": "productDescription",
                "type": "textarea",
                "label": "Product description",
                "placeholder": "Gym software that helps gym owners manage their gym with less stress and make more money.",
            },
            {
                "id": "tone",
                "type": "text",
                "label": "Tone of voice",
                "placeholder": "Excited",
            }
        ]
    },
    {
        "id": "87a3-56d9-3182-2a01",
        "title": "Job Description",
        "description": "Create a clear and concise job description to attract suitable candidates.",
        "command": "Write a compelling and a clear and concise job description for the following company:",
        "icon": "<i class='fas fab fa-linkedin text-primary'></i>",
        "categories": ["linkedin", "social_media"],
        "inputs": [
            {
                "id": "jobTitle",
                "type": "text",
                "label": "Job Title",
                "placeholder": "Software Engineer",
            },
            {
                "id": "companyName",
                "type": "text",
                "label": "Company Name",
                "placeholder": "InnovateTech",
            },
            {
                "id": "companyDescription",
                "type": "textarea",
                "label": "Company Description",
                "placeholder": "InnovateTech is a cutting-edge technology firm that specializes in developing software solutions for businesses.",
            },
            {
                "id": "jobOverview",
                "type": "textarea",
                "label": "Job Overview",
                "placeholder": "We are looking for a skilled Software Engineer to join our team and help us develop high-quality software solutions.",
            },
            {
                "id": "responsibilities",
                "type": "textarea",
                "label": "Responsibilities",
                "placeholder": "Design, develop, and maintain software solutions. Collaborate with cross-functional teams to deliver high-quality products.",
            },
            {
                "id": "requirements",
                "type": "textarea",
                "label": "Requirements",
                "placeholder": "Bachelor's degree in Computer Science or related field. Proficient in JavaScript, Python, or Java.",
            },
            {
                "id": "benefits",
                "type": "textarea",
                "label": "Benefits",
                "placeholder": "Competitive salary, flexible working hours, and a comprehensive benefits package.",
            },
            {
                "id": "location",
                "type": "text",
                "label": "Location",
                "placeholder": "New York City, NY",
            },
            {
                "id": "employmentType",
                "type": "text",
                "label": "Employment Type",
                "placeholder": "Full-time",
            }
        ]
    },
    {
        "id": "a1b2-34c5-678d-90ef",
        "title": "LinkedIn Topic Ideas",
        "description": "Get inspired with LinkedIn topic ideas to share with your network.",
        "command": "Suggest LinkedIn topic ideas to share with my network.",
        "icon": "<i class='fas fab fa-linkedin text-primary'></i>",
        "categories": ["linkedin", "social_media"],
        "inputs": [
            {
                "id": "topic",
                "type": "text",
                "label": "Topic",
                "placeholder": "Marketing",
            },            {
                "id": "audience",
                "type": "text",
                "label": "Audience",
                "placeholder": "Marketers, companies, business owners",
            },
        ]
    },
{
"id": "b2d9-56c8-9a73-12f7",
"title": "Product Description",
"description": "Craft a compelling product description that highlights the key features and benefits.",
"command": "Write a product description that highlights the key features and benefits of the following product: ",
"icon": "<i class='fas fa-info-circle text-primary'></i>",
"categories": ["ecommerce", "marketing"],
"inputs": [
{
"id": "productName",
"type": "text",
"label": "Product Name",
"placeholder": "Smartphone case",
},
{
"id": "productDescription",
"type": "textarea",
"label": "Product Description",
"placeholder": "Protective case made with durable materials that enhances the look and feel of your smartphone.",
},
{
"id": "keyFeatures",
"type": "textarea",
"label": "Key Features",
"placeholder": "Shock-absorbent, slim design, anti-scratch coating.",
},
{
"id": "benefits",
"type": "textarea",
"label": "Benefits",
"placeholder": "Protects your phone from accidental drops and scratches, while adding style to your device.",
}
]
},
{
"id": "c5d6-78e9-0ab1-23c4",
"title": "Brand Name",
"description": "Brainstorm a unique and memorable name for a brand or product.",
"command": "Brainstorm a unique and memorable name for the following brand/product: ",
"icon": "<i class='fas fa-pen-fancy text-primary'></i>",
"categories": ["branding", "marketing"],
"inputs": [
{
"id": "brandDescription",
"type": "textarea",
"label": "Brand/Product Description",
"placeholder": "A new line of organic skincare products made with all-natural ingredients.",
},
{
"id": "targetAudience",
"type": "text",
"label": "Target Audience",
"placeholder": "Eco-conscious consumers, health enthusiasts, beauty bloggers.",
}
]
},
{
"id": "d4f5-23a1-67b8-90c6",
"title": "Marketing Campaign Ideas",
"description": "Develop creative and effective ideas for a marketing campaign.",
"command": "Develop creative and effective ideas for a marketing campaign for the following product/service: ",
"icon": "<i class='fas fa-bullhorn text-primary'></i>",
"categories": ["marketing", "advertising"],
"inputs": [
{
"id": "productName",
"type": "text",
"label": "Product/Service Name",
"placeholder": "Healthy meal delivery service",
},
{
"id": "targetAudience",
"type": "text",
"label": "Target Audience",
"placeholder": "Busy professionals, health-conscious individuals, fitness enthusiasts.",
},
{
"id": "campaignGoals",
"type": "textarea",
"label": "Campaign Goals",
"placeholder": "Increase brand awareness, drive website traffic, boost sales.",
},
{
"id": "channels",
"type": "textarea",
"label": "Marketing Channels",
"placeholder": "Social media ads, influencer marketing, email marketing.",
}
]
},
{
    "id": "f3d4-8a90-1b2c-3e4f",
    "title": "Product Name Generator",
    "description": "Generate unique and catchy names for your products.",
    "command": "Generate a unique and catchy name for our new product: ",
    "icon": "<i class='fas fa-tags text-primary'></i>",
    "categories": ["branding", "marketing"],
    "inputs": [
        {
            "id": "productType",
            "type": "text",
            "label": "Product Type",
            "placeholder": "Apparel",
        },
        {
            "id": "keywords",
            "type": "text",
            "label": "Keywords",
            "placeholder": "Comfortable, stylish, affordable",
        }
    ]
},
{
    "id": "b2c3-4d5e-6f7a-8b9c",
    "title": "Event Promotion",
    "description": "Promote your upcoming event and increase attendance.",
    "command": "Create a social media post to promote our upcoming event: ",
    "icon": "<i class='fas fa-calendar-alt text-primary'></i>",
    "categories": ["social_media", "events"],
    "inputs": [
        {
            "id": "eventName",
            "type": "text",
            "label": "Event Name",
            "placeholder": "Annual Charity Gala",
        },
        {
            "id": "date",
            "type": "date",
            "label": "Event Date",
            "placeholder": "2023-06-15",
        },
        {
            "id": "location",
            "type": "text",
            "label": "Location",
            "placeholder": "123 Main St, New York, NY",
        },
        {
            "id": "description",
            "type": "textarea",
            "label": "Event Description",
            "placeholder": "Join us for our annual charity gala to raise money for a great cause.",
        }
    ]
},
{
    "id": "c4d5-6e7f-8a9b-0c1d",
    "title": "Resume Critique",
    "description": "Critique a resume and provide feedback on how to improve it.",
    "command": "Can you review my resume and provide feedback on how to improve it?",
    "icon": "<i class='far fa-file-alt text-primary'></i>",
    "categories": ["career", "human_resources"],
    "inputs": [
        {
            "id": "resume",
            "type": "file",
            "label": "Resume",
            "placeholder": "Upload your resume",
        },
        {
            "id": "targetJob",
            "type": "text",
            "label": "Target Job",
            "placeholder": "Software Engineer",
        },
        {
            "id": "targetCompany",
            "type": "text",
            "label": "Target Company",
            "placeholder": "Google",
        }
    ]
},
{
"id": "f2e9-4218-04bc-6a0d",
"title": "Email Newsletter Copywriting",
"description": "Write compelling copy for your email newsletter that engages subscribers and drives conversions.",
"command": "Write compelling copy for our email newsletter.",
"icon": "<i class='fas fa-envelope-open-text text-primary'></i>",
"categories": ["email", "marketing"],
"inputs": [
{
"id": "newsletterTopic",
"type": "text",
"label": "Newsletter Topic",
"placeholder": "April Newsletter",
},
{
"id": "audience",
"type": "text",
"label": "Audience",
"placeholder": "Subscribers",
},
{
"id": "callToAction",
"type": "text",
"label": "Call-to-Action",
"placeholder": "Shop now and save 10%",
},
{
"id": "branding",
"type": "textarea",
"label": "Branding",
"placeholder": "Brand messaging and tone",
}
]
},
{
"id": "d4c6-98ab-30f1-5e7e",
"title": "Logo Design",
"description": "Create a memorable and visually appealing logo that represents your brand.",
"command": "Design a memorable and visually appealing logo for our brand.",
"icon": "<i class='fas fa-palette text-primary'></i>",
"categories": ["design", "branding"],
"inputs": [
{
"id": "companyName",
"type": "text",
"label": "Company Name",
"placeholder": "Acme Corporation",
},
{
"id": "branding",
"type": "textarea",
"label": "Branding",
"placeholder": "Brand messaging and tone",
},
{
"id": "style",
"type": "text",
"label": "Style",
"placeholder": "Modern, minimalist",
}
]
},
{
"id": "a9d8-563f-12bc-3e3a",
"title": "Keyword Research",
"description": "Conduct keyword research to identify high-value keywords and optimize your content for search engines.",
"command": "Conduct keyword research for our content.",
"icon": "<i class='fas fa-search-plus text-primary'></i>",
"categories": ["seo", "content"],
"inputs": [
{
"id": "contentTopic",
"type": "text",
"label": "Content Topic",
"placeholder": "How to improve website SEO",
},
{
"id": "targetAudience",
"type": "text",
"label": "Target Audience",
"placeholder": "Small business owners",
}
]
}
]
