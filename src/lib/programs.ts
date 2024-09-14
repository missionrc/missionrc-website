export type Program = {
    id: string;
    name: string;
    description: string;
    location: string;
    time: string;
    date: string;
    isOpen: boolean;
    registrationLink?: string;
    images?: string[];
    pastProgram?: boolean;
}

export const programs: Program[] = [
    {
        id: 'junior-aviators-rc-camp',
        name: 'Junior Aviators RC Camp',
        description: "Middle School students will work on their own RC aircraft project over five in-person sessions, guided by our mentors. Students will learn how to use the engineering process in groups to create control surfaces and electrical circuits, ultimately gaining valuable understanding in fundamental physics, flight mechanics, and circuit design.",
        location: "TBD",
        time: "TBD",
        date: "Late July - Early August",
        isOpen: false
    },
    {
        id: 'drive-explorers',
        name: 'Drive Explorers: Remote Control Car Engineering',
        description: "This program is open to those who will be in middle school for the 2024-2025 school year. Students will learn mechanical and electrical engineering concepts. Their final project will be to build their own RC car in small groups.",
        location: "Calabazas Branch Library (1230 S Blaney Ave, San Jose, CA 95129)",
        time: "2:00 PM - 5:00 PM",
        date: "6/24, 6/28, 7/1, and 7/5",
        isOpen: true,
        registrationLink: "https://forms.gle/CmagMdbVBcxTCtVX6",
        images: [
            "https://lh3.googleusercontent.com/pw/AP1GczMs3h1drc0k_DZ9JRDMNHvR60PTBKhZuy87et1CiixtpE8ThPFkISW0mYbWdUJVHgIKnVh8meae3DNjjkssFs2LGP1WQ73khWz1UI9rSulh8NptXPJXde4jO6thraMOb5kJ9iAd7gq_DdfwMBMAyzD9ZQ=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczMWelHASbS2LzygwB2arx060wvxwSpMHVgAxXK1xSf6aEoEYRMZNKrhHJV6VtHOu8b_WIZpgy6Y9P-s9NI8a9FACjGDFy-zYZhtYjMOgmk54fiZdMPvW9KnwJLxqL429H8SOFusaLqGSAwQGLJQcnFXMw=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczM1pkBUIgbDSL9xnMTzeuYkMxGmPPY5LFoKs45gt8rOD2PdKPc3cpxY_7FEv_YiDHoBED8rAH2x-ufBNUBqb7S1MxOtalP4VV0vUdOWrLersEKmlIiH5n1tFwc_dcTOM4j6LTIlpttQsJs9kxa9MNizZQ=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczOXPZqkOK-OY_sZZ2JJEWrcOr5xMhCXyWEv8E1yfud3SXJrQRD6TvhrFSV5aZpXUHkss6tYa1dqTT2yA8PGCwUvSLWDdhG4OsBeEYQfqXxR7C3Ahu0RaifNL-Tq_7w5ZudlYLSi3qR6id3q1XHdEPDMbw=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczMq6WFVuU-oBoHITode4DPqpUhfNrVKF9KkMBSswvdZ2yQUGMuinvSuD0xdV0BTQriAaP9ed_MBUtMDue3bIKOJb9xU0mEGHIVXv4ycCtrdE_nF2fbQ3gdpq3YjKM7qSFeDcYUQNb_TrFomJnovu68LOA=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczMngLMWmA-nV_EPPhdNnA866zXYC-skHI2d3meiLNbydv7jN4LLfzn8eqdqmvNbXEU4Q8-2F-8QWzy85nPsDuJSerNWZuOP9dPERzdnYbixD5_DlJ7bB7SCdCdWQu5k-fQTadKdoMFHBXUigU20Go8K=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczNpI_45lHPbJC5bbA0mEuPaIUpzpyZYsdvkIQYSRX7C8XHot7PWg0qsw2E1RkwKDyuSYdSDnuYq-_NFvjv923RR_88vNZB2ALtjZu0T7-GNAV09qiBMTlgLRyNRdqMvcr_yGuIBCZFQmJcPQhD_DiBf=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczOUiaaTDCDGuCi47muC04I6Uqkj6cZt5lKhMtH6jO_LhlY4LNxE3kmEnJg1Y5hP_Ay8HULWxXJ8eOaIoSTNCHh4AwQJpW37Aub9Qm0lwI9QQUYdPScIsZOMJpZxJq1qJYudOVxTbVTdnOhxgK67r0z-=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczMp499MUUEgM13KVdYTEobCScMHQ0s4NS2i0vNOlJwenwMahbo2J77IXOXd5tGzvB8sIyFMqQpj_HhzkTZgOpxGjh81L_D7NTcZCyr5pUxdjnVeDHuOUVdqsew8SeA1PRwHUzfqu7bKhZaj8wZqYjAj=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczNo2bDTajZV6T6h-smV_mG9CniPVj9UnuUNV5-c9ZE4k2cG1e7auhgu7QkU_HlNVmhE_dxdHU8TBNL_O1Lh86Coi20yT04nsk0qhjW_NgA2AwukGimn7ECVU5YTV1PmaxypgO0RIGx1FAxxppu4E1kU=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczO5CXnUIAQ74Pgbn7NdJ2D4j5N_76SCWO_HqIZuxfoPVc76es9nIzqX6eZV8SMnKwICJzlJm04i2FXRGlI-qGRxN2JBNX6jtIdBlMXKVyrsmgBvVM1ev7zfoSLkDltYwiz1kOwy4Xp6nW9CED_zx_dr=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczM7-d9XgK9nRi_VfEG9Bh1B34xmsODcWtfQ2cbDCuC1lEkruBaEd1HRAK4dL85kB5LJYrwsaCwu7u6bk3rKzazWwMUiS2Glc8TMY_7h2ZfLsmfbgzUjjnwcpsiOLB3TBK-ejkIB8TKsySe-dC-DzWkseA=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczN507npu3tHlgULuNnUe7JBgbruFBEhS1vGkABZHFvjlZwA0HW6riG-LAiqoJ-Jy5wV0KcEpMtSh9_e90yeKAlyRvcnfxaY-A1kK0FsZl_a6D4eBhnAfOVKsCEkNYf_ZciyXwRJY86V65FfBr-sPTt-jA=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczO7LQ7tahHheHGQCAeVHwdfQIa7k3zUcwPplEu-vmQWWwbVJiyyZtUHXyeWFzwbq2tf5z3mQNxpCy44G5R_K5hYD7tWvuMY3wMEPRRCeIySgT2pJzTxLYLjkgsg1jX0aEBbPyh-8NbBfhIqKHQ28XwmJQ=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczNapY4oFKBLCgTrsf56uuYNOVtwiLFEYqE0dXPuwz3hyPq-wfc_u8AwgfUYIO3RsM_-WU2jjfV0tR3rcDX4C_FWsBnwcULGglUjIUUD1LdXhJLo3GxxnwzF6VFQwmUkRfv-_5GWdrgCrb5awzaNmY_Bkg=w783-h1044-s-no-gm",
        ]
    },
    {
        id: "sky-pioneers",
        name: "Sky Pioneers: RC Plane Engineering Program",
        description: "Middle School students will embark on their own RC aircraft project over 5 in-person sessions under the guidance of our mentors. Students will learn how to utilize the engineering process in groups to design control surfaces and electrical circuits, ultimately taking home valuable knowledge of fundamental physics, flight mechanics, and circuit design.",
        date: "March 24, March 31, April 7, April 14, April 21",
        time: "9:30 AM - 12:30 PM",
        location: "1600 Hopkins Dr, San Jose, CA 95122",
        images: [
            "https://lh3.googleusercontent.com/pw/AP1GczOwL6oqD2CJ3WXGcQWCme-9JH_ptHQkneW-vWqP5oNbfetgFNgEkyAhIfTzP0LJ4UV5h3mNbzT-Kk8SnisJU2XW3gUwKBzlWyZSFdZlnrMyzLVRoYYJuBsd0BfK5-QZljvFbNafb4tfLs5ZiIQWXouX=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczNvO4bR2zdP2E_ajyCDZyCA4VnV-GUATSbSa5zvsME9sMJrPQY3aj77zyMKtCLmxPqePr7E7Dpbwmg-lG-XOI94WbPJLQRNi1BXyzn2paPIKBRIsh9TYURp-AvvDgPC-vUR3YLDyadgdunDLYBKkE12=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczNVq5U0jqHvZtEXTTyeedPm0FnRTY0MUGsFNElBxCVX0aNr58jZfKhGl827RKmK_CnX5jKayDhUl0_aHCnP7n23v9THXNJXHE9ucds9sA5MQY0q7VBbct8rKZzl6z5zZScjpSu5af1Zzu3rTMeek5sL=w1855-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczM09m2WRuzGQ05Lxg4qOtLMGzGSma-ZE_Dze9Pn7goEGClRWXsAp0xrwOne11fAR24XP21ICCYKDTQwjfj0N30NSySijE-x4OjBUd8aU9CFB6eZ_tRvaf_phNB55Kc3zBSiMgsbXM5PSHoFyqK5poPb=w1855-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczO4WWvnkwKCzBMlH9rfs7B02gL1iJaTrPNEG238QLQfSsA9_YGj06xxqJf9Y79l6gJvrVsly7NtZL0sE3iEPCvgQjzS9_BP_mbI3JfukZt3dI9u7Ytb1WvTdNcmip38QF3_w5C_w9bnk1nH1I3vtpDL=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczNGsyVnrT6l85d5MrvkM4alfffoK1pA3CAmiwTTcbudxTotV3nvlmajLlMKYlQ3iB5-toCxrknotk3y8Yqi6VPzeYjyp6oKBaqEURE3O6zztYIyhsauPOvQPxrVIlR6apJmJPRS89lXHz33XHVjB7HD=w783-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczNZkXcyzxH-uJO45K5U8WqwZJoTQHDaI4UnXLnu1zbHZeNes2QUQfAiPlbeLRnH7x32J5rB4CoquurhKc-9T5_kje44qnA4y5qZiqe-QYHJr0rQNUB65oIpRckEtMZYRFvG3Zlg0t54_ZreDNmofnPlUg=w1386-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczOTjaDIyyGR00dTwUQYhIdmRSLBukZgN94xoGLh_Y7kLaXVEbTkPUVoeo7Cpfaya02FcWVYLGWDeorr-tCDS3y_kQeZ7obnc88iK1ZrWuPDBFvoAixQ7wZGlb1MRpnBdKhwZWvFZ--qpfKKFu7yAek7=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczMcgB8eYKBZNoSPlMlXLTqxtIGeKzyLdT72iiAiMPKUqY91UaoBepY_MlO_5eYDRWE_HJ8ljorLwjUyz_DdDW_Vy_nDhBy0k9ztIBvdG5TmL5qFrNZm28pET0UyeYB3ErSEOz6SW5WSyzWwl6PU0MO1=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczMCDN4osXbY-esrHlluQGPXpinblQJR_4bdvo4KvMRXfAS_sQRMES330tzp3pzARToe0_5cWalBj-Sm5AkkkYQhGIHlyyEToXn43jFf7Hxd3hzWMhCGxP8Ko3Ux0myoO6bh0lpEAcwHIkPp8kE1k2MO=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczOnh5j7bLFYeVLVfDhDwlbQ9UGmFJC-9dBko1O_b1nooWJZh2gFN8UDnBnHhg4FfJdnqVGgFEf0YcE4DQhW6sqsvpxPppbMhqYWn1Blsi8otRSx_-jUsly8U04avY5RPVyZSf8ohNTSjxM7p6neTTjW=w783-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczMagZKEgAyrX4fVSGpzb4Pr3OI5rNB-ZsNYwYaaVFWvgWsUER-hazMdFlxcUvabVeGGh84pn6Tgk0keQHq39BZ-xm3vKGG4kAVfIIdNnB0eFWgOHtIaJcXo3Tg9oZtB_WgMYq27xvxI5vephCMb8WQq=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczNvzzw81yYT_my1aFodxAxsjIx7PV63QuQDPGGaxVTd0Y3Yxjseq-bJSmieUXAillChjLP-rDS2nPjWamQLeO-rvgbzeL99UAO32Zbds_pF6t39v09OoK-qL4Ae80dxWpv3mHhX4r-r4VG0U1YJXsHh=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczOy9n7FgQycJA0uoK9R5ePCrIIqnwIhL0SOltAL-B4Zak5uzd_7Hz7WL436oFi3f3XBPMZecWz1QWEuEn7CyoO7uVEoOvqrxLOQ5C-rr1_BJEzYULAd61e-PIo9WO7C-YdZBp4HC4QDM5A-G9MPlUlwVA=w1386-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczOSxgxVSseTkrmncakRxojg32nuRQaDe4qoPJUNXrHF-JkhNeWT44kdbtfLXoLriSBasU3qLBUF5K7f0lgC2EVbHAGxLOhAQIxt2B1CBoYLugTByLurMGr4aIEa8LhLvvp8NE0SKwpNh-ZDj11t5guI=w1391-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczON2hyojt3ZCmGD0vICZYj2emcVqUWHfqH3ED4tBLc1TlBxD53tOO16edcGXDY2jsp2ow6rz_9QnP8CNZiDwD7uNA--rBITK4ssGu2hEGKpJkGFCn-PYSWy4ajMo4SnQkegZuJXzQuBhMGJSWplJ-nA=w783-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczMEH8A0cKhYtI9kbuzM0eFppNZaLwtzLv-Tz3J8fv5TwobnF9s9FJVVc1p_F66fO3ctLw88tCqnYGagZrq_xBScfTXgKx3oiqqzmjOthGs28rPnsRymgKHLSJhy8eF_2y94fkx2CdOwc8C0T0BzZqmS=w783-h1044-s-no-gm",
            "https://lh3.googleusercontent.com/pw/AP1GczNkyuAwfdmFat6GH_LL4phmaQZTWUP8syiWQMWq01vtSfJ_lwWcTtS-vKI61su4Y9kLXMVfw2NUa4AyNSufVWspNlk7jxhxYFeqQPOsejaYHFYZqXIHPBm6q0mfeLT--wvBr4_6Duhck_pjXdgeNbma=w783-h1044-s-no-gm",
        ],
        isOpen: false,
    },
];
