function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const products = [
  {
    name: 'Yeti Hondo',
    description: 'soo nice',
    status: 'AVAILABLE',
    price: 3423,
    photo: {
      create: {
        image: {
          ref: 'local:image:5dfbed262849d7961377c2c0.jpg',
        },
      },
    },
    user: null
    // createdBy: null,
    // updatedBy: null,
    // updatedAt_utc: '2020-12-19T21:35:35.739Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-12-19T21:35:35.739Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Airmax 270',
    description: 'Great shoes!',
    status: 'AVAILABLE',
    price: 5234,
    photo: {
      create: {
        image: {
          ref: 'local:image:5e2a13f0689b2835ae71d1a5.jpg',
        },
      },
    },
    user: null
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:20.833Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:20.833Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'KITH Hoodie',
    description: 'Love this hoodie',
    status: 'AVAILABLE',
    price: 23562,
    photo: {
      create: {
        image: {
          ref: 'local:image:5e2a13ff689b2835ae71d1a7.jpg',
        },
      },
    },
    user: null
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:36.012Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:36.012Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Fanorak',
    description: 'Super hip. Comes in a number of colours',
    status: 'AVAILABLE',
    price: 252342,
    photo: {
      create: {
        image: {
          ref: 'local:image:5e2a1413689b2835ae71d1a9.png',
        },
      },
    },
    user: null
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:58.336Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:58.336Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Nike Vapormax',
    description: 'Kind of squeaky on some floors',
    status: 'AVAILABLE',
    price: 83456,
    photo: {
      create: {
        image: {
          ref: 'local:image:5e2a142c689b2835ae71d1ab.jpg',
        },
      },
    },
    user: null
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:46:21.015Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:46:21.015Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Yeti Cooler',
    description: 'Who spends this much on a cooler?!',
    status: 'AVAILABLE',
    price: 75654,
    photo: {
      create: {
        image: {
          ref: 'local:image:5e2a143f689b2835ae71d1ad.jpg',
        },
      },
    },
    user: null
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:46:40.526Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:46:40.526Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Naked and Famous Denim',
    description: 'Japanese Denim, made in Canada',
    status: 'AVAILABLE',
    price: 10924,
    photo: {
      create: {
        image: {
          ref: 'local:image:5e2a145d689b2835ae71d1af.jpg',
        },
      },
    },
    user: null
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:47:11.415Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:47:11.415Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Rimowa Luggage',
    description: 'S T E A L T H',
    status: 'AVAILABLE',
    price: 47734,
    photo: {
      create: {
        image: {
          ref: 'local:image:5e2a147b689b2835ae71d1b1.png',
        },
      },
    },
    user: null
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:47:41.358Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:47:41.358Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Black Hole ',
    description: 'Outdoorsy ',
    status: 'AVAILABLE',
    price: 4534,
    photo: {
      create: {
        image: {
          ref: 'local:image:5e2a149b689b2835ae71d1b3.jpg',
        },
      },
    },
    user: null
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:48:13.812Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:48:13.812Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Nudie Belt',
    description: 'Sick design',
    status: 'AVAILABLE',
    price: 5234,
    photo: {
      create: {
        image: {
          ref: 'local:image:5e2a14b1689b2835ae71d1b5.jpg',
        },
      },
    },
    user: null
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:48:34.398Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:48:34.398Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Goose',
    description: 'Keep warm.',
    status: 'AVAILABLE',
    price: 74544,
    photo: {
      create: {
        image: {
          ref: 'local:image:5e2a14bf689b2835ae71d1b7.jpg',
        },
      },
    },
    user: null
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:48:48.633Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:48:48.633Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Ultraboost',
    description: 'blacked out',
    status: 'AVAILABLE',
    price: 6344,
    photo: {
      create: {
        image: {
          ref: 'local:image:5e2a14cc689b2835ae71d1b9.jpg',
        },
      },
    },
    user: null
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:49:01.569Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:49:01.569Z',
    // createdAt_offset: '+00:00',
  },
];
