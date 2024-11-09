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
  // i lowkey think this is an unused field
  // whatever
  pastProgram?: boolean;
  // google drive link
  albumLink?: string;
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
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730953986/AP1GczOwL6oqD2CJ3WXGcQWCme-9JH_ptHQkneW-vWqP5oNbfetgFNgEkyAhIfTzP0LJ4UV5h3mNbzT-Kk8SnisJU2XW3gUwKBzlWyZSFdZlnrMyzLVRoYYJuBsd0BfK5-QZljvFbNafb4tfLs5ZiIQWXouX_w1391-h1044-s-no-gm_yxtgvd.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730954022/AP1GczNvO4bR2zdP2E_ajyCDZyCA4VnV-GUATSbSa5zvsME9sMJrPQY3aj77zyMKtCLmxPqePr7E7Dpbwmg-lG-XOI94WbPJLQRNi1BXyzn2paPIKBRIsh9TYURp-AvvDgPC-vUR3YLDyadgdunDLYBKkE12_w1391-h1044-s-no-gm_mpzxr9.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730954051/AP1GczNVq5U0jqHvZtEXTTyeedPm0FnRTY0MUGsFNElBxCVX0aNr58jZfKhGl827RKmK_CnX5jKayDhUl0_aHCnP7n23v9THXNJXHE9ucds9sA5MQY0q7VBbct8rKZzl6z5zZScjpSu5af1Zzu3rTMeek5sL_w1855-h1044-s-no-gm_g2l5gt.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730954071/AP1GczM09m2WRuzGQ05Lxg4qOtLMGzGSma-ZE_Dze9Pn7goEGClRWXsAp0xrwOne11fAR24XP21ICCYKDTQwjfj0N30NSySijE-x4OjBUd8aU9CFB6eZ_tRvaf_phNB55Kc3zBSiMgsbXM5PSHoFyqK5poPb_w1855-h1044-s-no-gm_hqg2tf.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730954090/AP1GczO4WWvnkwKCzBMlH9rfs7B02gL1iJaTrPNEG238QLQfSsA9_YGj06xxqJf9Y79l6gJvrVsly7NtZL0sE3iEPCvgQjzS9_BP_mbI3JfukZt3dI9u7Ytb1WvTdNcmip38QF3_w5C_w9bnk1nH1I3vtpDL_w1391-h1044-s-no-gm_jhcxpt.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730954108/AP1GczNGsyVnrT6l85d5MrvkM4alfffoK1pA3CAmiwTTcbudxTotV3nvlmajLlMKYlQ3iB5-toCxrknotk3y8Yqi6VPzeYjyp6oKBaqEURE3O6zztYIyhsauPOvQPxrVIlR6apJmJPRS89lXHz33XHVjB7HD_w783-h1044-s-no-gm_ecena2.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730954133/AP1GczNZkXcyzxH-uJO45K5U8WqwZJoTQHDaI4UnXLnu1zbHZeNes2QUQfAiPlbeLRnH7x32J5rB4CoquurhKc-9T5_kje44qnA4y5qZiqe-QYHJr0rQNUB65oIpRckEtMZYRFvG3Zlg0t54_ZreDNmofnPlUg_w1386-h1044-s-no-gm_awq424.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730954151/AP1GczOTjaDIyyGR00dTwUQYhIdmRSLBukZgN94xoGLh_Y7kLaXVEbTkPUVoeo7Cpfaya02FcWVYLGWDeorr-tCDS3y_kQeZ7obnc88iK1ZrWuPDBFvoAixQ7wZGlb1MRpnBdKhwZWvFZ--qpfKKFu7yAek7_w1391-h1044-s-no-gm_et669p.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730954169/AP1GczMcgB8eYKBZNoSPlMlXLTqxtIGeKzyLdT72iiAiMPKUqY91UaoBepY_MlO_5eYDRWE_HJ8ljorLwjUyz_DdDW_Vy_nDhBy0k9ztIBvdG5TmL5qFrNZm28pET0UyeYB3ErSEOz6SW5WSyzWwl6PU0MO1_w1391-h1044-s-no-gm_ns9i4w.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730954187/AP1GczMCDN4osXbY-esrHlluQGPXpinblQJR_4bdvo4KvMRXfAS_sQRMES330tzp3pzARToe0_5cWalBj-Sm5AkkkYQhGIHlyyEToXn43jFf7Hxd3hzWMhCGxP8Ko3Ux0myoO6bh0lpEAcwHIkPp8kE1k2MO_w1391-h1044-s-no-gm_qy0ixp.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730954203/AP1GczOnh5j7bLFYeVLVfDhDwlbQ9UGmFJC-9dBko1O_b1nooWJZh2gFN8UDnBnHhg4FfJdnqVGgFEf0YcE4DQhW6sqsvpxPppbMhqYWn1Blsi8otRSx_-jUsly8U04avY5RPVyZSf8ohNTSjxM7p6neTTjW_w783-h1044-s-no-gm_wndhxp.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730954230/AP1GczMagZKEgAyrX4fVSGpzb4Pr3OI5rNB-ZsNYwYaaVFWvgWsUER-hazMdFlxcUvabVeGGh84pn6Tgk0keQHq39BZ-xm3vKGG4kAVfIIdNnB0eFWgOHtIaJcXo3Tg9oZtB_WgMYq27xvxI5vephCMb8WQq_w1391-h1044-s-no-gm_ysdswn.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730954250/AP1GczNvzzw81yYT_my1aFodxAxsjIx7PV63QuQDPGGaxVTd0Y3Yxjseq-bJSmieUXAillChjLP-rDS2nPjWamQLeO-rvgbzeL99UAO32Zbds_pF6t39v09OoK-qL4Ae80dxWpv3mHhX4r-r4VG0U1YJXsHh_w1391-h1044-s-no-gm_c21dnm.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730954266/AP1GczOy9n7FgQycJA0uoK9R5ePCrIIqnwIhL0SOltAL-B4Zak5uzd_7Hz7WL436oFi3f3XBPMZecWz1QWEuEn7CyoO7uVEoOvqrxLOQ5C-rr1_BJEzYULAd61e-PIo9WO7C-YdZBp4HC4QDM5A-G9MPlUlwVA_w1386-h1044-s-no-gm_qotref.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730954282/AP1GczOSxgxVSseTkrmncakRxojg32nuRQaDe4qoPJUNXrHF-JkhNeWT44kdbtfLXoLriSBasU3qLBUF5K7f0lgC2EVbHAGxLOhAQIxt2B1CBoYLugTByLurMGr4aIEa8LhLvvp8NE0SKwpNh-ZDj11t5guI_w1391-h1044-s-no-gm_scjvsm.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730954301/AP1GczON2hyojt3ZCmGD0vICZYj2emcVqUWHfqH3ED4tBLc1TlBxD53tOO16edcGXDY2jsp2ow6rz_9QnP8CNZiDwD7uNA--rBITK4ssGu2hEGKpJkGFCn-PYSWy4ajMo4SnQkegZuJXzQuBhMGJSWplJ-nA_w783-h1044-s-no-gm_ibjwko.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730954318/AP1GczMEH8A0cKhYtI9kbuzM0eFppNZaLwtzLv-Tz3J8fv5TwobnF9s9FJVVc1p_F66fO3ctLw88tCqnYGagZrq_xBScfTXgKx3oiqqzmjOthGs28rPnsRymgKHLSJhy8eF_2y94fkx2CdOwc8C0T0BzZqmS_w783-h1044-s-no-gm_i1fumo.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730954333/AP1GczNkyuAwfdmFat6GH_LL4phmaQZTWUP8syiWQMWq01vtSfJ_lwWcTtS-vKI61su4Y9kLXMVfw2NUa4AyNSufVWspNlk7jxhxYFeqQPOsejaYHFYZqXIHPBm6q0mfeLT--wvBr4_6Duhck_pjXdgeNbma_w783-h1044-s-no-gm_frzfyu.jpg",
    ],
    isOpen: false,
  },
  {
    id: "rc-cars-engineering",
    name: "RC Cars & Engineering Exploration",
    description: "During this 3-Day program (over five weeks) for budding engineers and RC enthusiasts, children will be introduced to the fundamentals of remote-controlled (RC) systems every Saturday, delving deep into the principles of electrical and mechanical engineering required to design and build their own RC cars. Set against the backdrop of our enriching library environment, participants will embark on a journey from understanding basic concepts to hands-on application.",
    isOpen: false,
    time: "9:30 AM - 12:30 PM",
    date: "Aug 7 - 11",
    location: "Cupertino Library (10800 Torre Ave, Cupertino, CA 95014)",
    pastProgram: true,
    images: [
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730689692/IMG_8609_cpapo1.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730953144/881909_a38371ebeffe4ac4a7c99a8af6d7d080_mv2_m1jbmk.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730953221/881909_ccd6aa89c9264269aed9b32d34577d3a_mv2_t7wvsc.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730953253/881909_73fb7ecfca5f42d39f72c5ed3ae76d3c_mv2_vtnzyb.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730953275/881909_e1caba5b00dd43af9889571303aaa6c5_mv2_xss3m4.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730953299/881909_fbfac5839cf64f2db781abafd7b735ba_mv2_koeje3.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730953320/881909_1c20419eeb9e465381f442141092f52b_mv2_kiokwq.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730953339/881909_d81616f76c9045b88683c33b2bb25da6_mv2_v3c3r4.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730953419/881909_20b59ad17ef24e728bfc2e5449611900_mv2_zsy6qy.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730953427/881909_b3e3f302dbb74ea687e8fd69b6ecf541_mv2_tpabqv.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730953443/881909_cfa8ed1a07f448d99aec61a177d13cf0_mv2_ipdysc.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730953462/881909_c3d150a9442a40f096fa00937444d3f7_mv2_sicrez.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730953480/881909_ff1a981c1f2b4bd6b4e04fe02eb5bd4e_mv2_zgrslx.jpg",
    ],
  },
  {
    id: "rc-project-building",
    name: "RC Project Building Workshop",
    description: "This project-building program introduces students to the fundamentals of remote control (RC) technology, covering how it works, its key components, and how it differs from robotics. Students will explore the engineering design process by first assembling a kit car and then applying their knowledge to design and build their own unique RC cars. Emphasizing collaboration, the program encourages students to work in groups to share ideas and creativity, testing and refining their projects together. Finally, students will learn about real-world applications of RC technology and its uses in daily life, gaining practical insights alongside hands-on experience.",
    isOpen: false,
    time: "9:30 AM - 12:30 PM",
    date: "July 31 - August 4",
    location: "Cupertino Library (10800 Torre Ave, Cupertino, CA 95014)",
    images: [
      // using cloudinary here because Google Drive links are just slow as fuck smh
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730689067/IMG_8612_kkoget.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730689067/IMG_8607_vg3mzm.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730689066/IMG_8599_ltywio.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730689066/IMG_8586_jh84ow.jpg",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730689617/image_yslmgy.png",
      "https://res.cloudinary.com/dklqnjf2k/image/upload/v1730689692/IMG_8609_cpapo1.jpg",
    ],
    albumLink: "https://drive.google.com/drive/folders/1cF8x66qj9Y_IDXeCeWy7x2lDJCy4F2qd?usp=sharing",
    pastProgram: true,
  }
];
