// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publication/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-supervision",
          title: "Supervision",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/supervision/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Talk/";
          },
        },{id: "nav-professional-service",
          title: "Professional Service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/AcademicService/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-organized-the-1st-edition-of-the-international-workshop-on-intelligent-and-scalable-systems-across-the-computing-continuum-scalesys-2025-featuring-6-accepted-papers-and-2-keynote-talks-co-located-with-the-acm-iot-2025-conference-in-tu-wien-austria-more-details-are-available-here-and-highlights-can-be-found-here",
          title: 'I organized the 1st edition of the *International Workshop on Intelligent and Scalable...',
          description: "",
          section: "News",},{id: "news-i-delivered-a-3-hour-tutorial-titled-serverless-orchestration-on-the-edge-cloud-continuum-from-small-functions-to-large-language-models-at-the-ieee-acm-international-conference-on-utility-and-cloud-computing-ucc-2025-more-details-are-available-link",
          title: 'I delivered a 3-hour tutorial titled Serverless Orchestration on the Edge–Cloud Continuum: From...',
          description: "",
          section: "News",},{id: "news-read-my-interview-entiteld-mit-drohnen-und-intelligentem-edge-computing-zur-brückeninspektion-der-zukunft-link",
          title: 'Read my interview entiteld Mit Drohnen und intelligentem Edge Computing zur Brückeninspektion der...',
          description: "",
          section: "News",},{id: "news-our-paper-on-lightweight-webassembly-based-intrusion-detection-for-zero-trust-edge-networks-has-been-accepted-ieee-access-2026-link",
          title: 'Our paper on Lightweight WebAssembly-Based Intrusion Detection for Zero Trust Edge Networks has...',
          description: "",
          section: "News",},{id: "news-our-paper-on-ellmpeg-an-edge-based-agentic-llm-video-processing-tool-has-been-accepted-acm-mmsys-2026-link",
          title: 'Our paper on ELLMPEG: An Edge-based Agentic LLM Video Processing Tool has been...',
          description: "",
          section: "News",},{id: "news-our-paper-on-performance-evaluation-of-privacy-models-for-data-streams-on-the-edge-has-been-accepted-internet-technology-letter-2026-link",
          title: 'Our paper on Performance Evaluation of Privacy Models for Data Streams on the...',
          description: "",
          section: "News",},{id: "news-happy-to-share-that-our-eu-horizon-graph-massivizer-project-and-the-graph-choreographer-tool-have-been-successfully-evaluated",
          title: 'Happy to share that our EU Horizon Graph-Massivizer project and the Graph-Choreographer tool...',
          description: "",
          section: "News",},{id: "news-we-are-organizing-the-3rd-workshop-on-engineering-techniques-for-distributed-computing-continuum-systems-edccs-co-located-with-the-46th-ieee-international-conference-on-distributed-computing-systems-icdcs-2026-in-seoul-south-korea-we-warmly-invite-submissions",
          title: 'We are organizing the 3rd Workshop on Engineering Techniques for Distributed Computing Continuum...',
          description: "",
          section: "News",},{id: "news-happy-to-announce-that-i-have-been-awarded-a-6-month-eu-enfield-research-exchange-grants-from-eu-horizon-enfield-project-hosted-at-sintef-norway-focusing-on-edge-ai-and-green-ai-for-onboard-analytics",
          title: 'Happy to announce that I have been awarded a 6-month EU ENFIELD research...',
          description: "",
          section: "News",},{id: "news-i-have-started-a-new-position-as-postdoctoral-researcher-university-assistant-at-the-distributed-systems-group-dsg-tu-wien-i-will-continue-my-teaching-activities-at-the-department-of-information-technology-itec-university-of-klagenfurt",
          title: 'I have started a new position as Postdoctoral Researcher (University Assistant) at the...',
          description: "",
          section: "News",},{id: "news-our-paper-on-scale-deep-reinforcement-learning-for-container-scheduling-in-serverless-edge-computing-has-been-accepted-31st-ieee-symposium-on-computers-and-communications-iscc-2026",
          title: 'Our paper on Scale: Deep Reinforcement Learning for Container Scheduling in Serverless Edge...',
          description: "",
          section: "News",},{id: "news-i-led-a-research-station-at-the-lange-nacht-der-forschung-austrian-long-night-of-research-at-the-university-of-klagenfurt-on-edge-or-cloud-what-is-greener-faster-and-more-private-read-more-link",
          title: 'I led a research station at the Lange Nacht der Forschung (Austrian long...',
          description: "",
          section: "News",},{id: "news-our-paper-on-clusterless-deadline-aware-serverless-workflow-orchestration-on-federated-edge-clusters-has-been-accepted-46th-ieee-international-conference-on-distributed-computing-systems-icdcs-2026",
          title: 'Our paper on ClusterLess: Deadline-Aware Serverless Workflow Orchestration on Federated Edge Clusters has...',
          description: "",
          section: "News",},{id: "news-our-paper-on-evlm-intent-driven-edge-vision-language-model-for-uav-based-power-line-inspection-has-been-accepted-ieee-international-conference-on-edge-computing-and-communications-edge-2026",
          title: 'Our paper on EVLM: Intent-Driven Edge Vision Language Model for UAV-Based Power Line...',
          description: "",
          section: "News",},{id: "news-our-paper-on-reliability-aware-neuro-symbolic-control-for-forecast-guided-5g-ran-slicing-under-degraded-observability-has-been-accepted-international-workshop-on-ai-and-mathematical-methods-for-real-world-impact-ai2m4ri-2026",
          title: 'Our paper on Reliability-Aware Neuro-Symbolic Control for Forecast-Guided 5G RAN Slicing under Degraded...',
          description: "",
          section: "News",},{id: "news-i-have-joined-the-editorial-board-of-ieee-network-magazine-as-an-associate-editor-for-the-2026-2028-term-contributing-to-one-of-the-leading-venues-in-networking-and-communications-research",
          title: 'I have joined the editorial board of IEEE Network Magazine as an Associate...',
          description: "",
          section: "News",},{id: "news-i-have-been-appointed-as-tpc-co-chair-of-the-international-symposium-on-edge-intelligence-trustworthy-and-decentralized-artificial-intelligence-iedge-2026",
          title: 'I have been appointed as TPC Co-Chair of the International Symposium on Edge...',
          description: "",
          section: "News",},{id: "news-our-paper-lmedge-qos-aware-llm-inference-orchestration-on-edge-clusters-has-been-accepted-to-the-4th-international-workshop-on-scalable-compute-continuum-wscc-2026-co-located-with-euro-par-2026",
          title: 'Our paper, LMEdge: QoS-Aware LLM Inference Orchestration on Edge Clusters, has been accepted...',
          description: "",
          section: "News",},{id: "news-i-have-been-appointed-as-a-publicity-chair-for-the-27th-ieee-international-symposium-on-cluster-cloud-and-internet-computing-ieee-ccgrid-2027",
          title: 'I have been appointed as a Publicity Chair for the 27th IEEE International...',
          description: "",
          section: "News",},{id: "news-our-article-towards-ai-assisted-sustainable-adaptive-video-streaming-systems-tutorial-and-survey-has-been-accepted-for-publication-in-acm-computing-surveys-csur",
          title: 'Our article, Towards AI-assisted Sustainable Adaptive Video Streaming Systems: Tutorial and Survey, has...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72.%66%61%72%61%68%61%6E%69@%64%73%67.%74%75%77%69%65%6E.%61%63.%61%74", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=RiFrnFQAAAAJ", "_blank");
        },
      },{
        id: 'social-my_linkedin',
        title: 'My_linkedin',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/reza-farahani/", "_blank");
        },
      },{
        id: 'social-my_researchgate',
        title: 'My_researchgate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Reza-Farahani-5", "_blank");
        },
      },{
        id: 'social-my_orcid',
        title: 'My_orcid',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-2376-5802", "_blank");
        },
      },{
        id: 'social-my_x',
        title: 'My_x',
        section: 'Socials',
        handler: () => {
          window.open("https://x.com/reza_farahani_", "_blank");
        },
      },{
        id: 'social-my_bluesky',
        title: 'My_bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/refarahani.bsky.social", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
