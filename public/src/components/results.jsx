import React from 'react';
import MapView from './mapView.jsx';
import DestinationsList from './resultBoxes.jsx';
import ResultTabs from './resultTabs.jsx';



class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testArray
    }
  }
  
  render() {
    return (
      <div className="results">
        <DestinationsList destinations={this.props.results}/>
        <MapView destinations={this.props.results}/>
        <ResultTabs destinations={this.state.testArray}/>
      </div>
    )
 } 
}

export default Results;
//<ResultTabs destinations={this.props.results}/>
var testArray = [
    {
        "city": {
            "city": "New York, New York",
            "city_id": 1,
            "lat": 40.7128,
            "long": -74.0059,
            "visits": 17,
            "key": "1"
        },
        "tourism": {
            "html_attributions": [],
            "results": [
                {
                    "formatted_address": "1000 5th Ave, New York, NY 10028, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7794366,
                            "lng": -73.963244
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7802527302915,
                                "lng": -73.9613772197085
                            },
                            "southwest": {
                                "lat": 40.7775547697085,
                                "lng": -73.9640751802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
                    "id": "f732f202150af1f14ae8a057a1014ceea6b33fc4",
                    "name": "The Metropolitan Museum of Art",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3000,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114083495869686301956/photos\">Steve Raby</a>"
                            ],
                            "photo_reference": "CmRZAAAACcJsFqdfJDMy9o_S4O6scrx7bxHirB18F2ytv_ne_5CdbYcxDJ_-aF6-0-U9nBv2BBSDp7gDYEUvh3M_jz55B8l3_Zfg7BJ2Yjs3FYK3vUPmkux0Cs82sG3msLYfeTzJEhD3BZFPIKXtYR49gxiOG6v4GhRzxXXxO0eW4Oa31LeGdBTalQQa0w",
                            "width": 4000
                        }
                    ],
                    "place_id": "ChIJb8Jg9pZYwokR-qHGtvSkLzs",
                    "rating": 4.7,
                    "reference": "CmRRAAAApXn1jGJENjIY8xlg0eExJqp17z4G15ZPxvo0OBFpm0MFoB-2MMAd9UX2ehmrBiSp_wdAMhWWxPyARUAl8F29KB9rbiJbZjkQW5JfQldEGF-EbN17Fe1tuBjXhAQmbMaTEhAde9skYalEjI4A00XhVgdTGhSKc1HNOMpbnaecrx8Vyh1bUNGHNQ",
                    "types": [
                        "art_gallery",
                        "museum",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "350 5th Ave, New York, NY 10118, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7484405,
                            "lng": -73.98566439999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7497074302915,
                                "lng": -73.98392536970849
                            },
                            "southwest": {
                                "lat": 40.7470094697085,
                                "lng": -73.98662333029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "bc232d2422e7068b2a2ffb314f02e3733dd47796",
                    "name": "Empire State Building",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103456530252801066707/photos\">Bobby Davis</a>"
                            ],
                            "photo_reference": "CmRaAAAATO0FJwRg8oRL78unWhaAI33Xaj-OTVx-VE9DT-WgQC85O9n9eJmmKTzSfN_NXraDatE-W11uYJj_d_sZvYGf85iZHE82d8cqpOTeej6LWIEiVE3ioVO18UBXFmbqSmtjEhCzY824hpvJ9ykoGxc93A-tGhRzyd2n3UPMqUuh_itLNrjDdtvmyA",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJaXQRs6lZwokRY6EFpJnhNNE",
                    "rating": 4.6,
                    "reference": "CmRSAAAAAEHQa4FrQIqxRHiftsuo6aztlJvKP7EmR4n2dJFG18ZCBKcUKSotFS32e3HoGZebFFK-Zmv7tvjSuDUDRyCPQu3xR1IxmGW29UC9yjxsnPkqsP3LZBurp4zFyESz49NYEhDO8kjbYDUZXc4Mf1f40TsfGhQiPqRGBRAJTaJcvkVDxy_OwiymbQ",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "New York, NY, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.6892494,
                            "lng": -74.04450039999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.71823,
                                "lng": -73.99872490000001
                            },
                            "southwest": {
                                "lat": 40.6795892,
                                "lng": -74.05975889999998
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
                    "id": "5a0d7e67078e35af0c456a277df9ffba7c1e4da6",
                    "name": "Statue of Liberty National Monument",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2368,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/102768924365449147760/photos\">David Edwards</a>"
                            ],
                            "photo_reference": "CmRaAAAAs-IvLtUTYoeR-5Qd4BN7h6SYxX2Bbork9T1Jlb1bC_ExgMaEnF2RC3QzM7v3oKipUwV12JZAYoi0LLWcluqztIMjMOhyvbfMs0qk8aGEBPGTYPGxVMtQHBJTcgilYruaEhBTQFDldHHH6zJt9Qkm33LeGhTXP157PRSBF18S8XhrSAwYmwhMIA",
                            "width": 4224
                        }
                    ],
                    "place_id": "ChIJPTacEpBQwokRKwIlDXelxkA",
                    "rating": 4.5,
                    "reference": "CmRRAAAA-w6hEnAH2c9hs_u7XJp02D0i0K8YhR6Nb9EiOmMwf1eXmJOAQk3adMPhpWAhGQf2iDDjUg9JW0BL9yajVVHHG7kWOj08sChlklyfZ54DHDo2uNGRQEnQenoSOCzGljHfEhBZmXk5FoSDDTIqA7AM0_k6GhQ2dIjZmlJ3phk9oXSYlJi7KOxv7w",
                    "types": [
                        "park",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "180 Greenwich St, New York, NY 10007, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7114836,
                            "lng": -74.0127254
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7123200802915,
                                "lng": -74.0104553
                            },
                            "southwest": {
                                "lat": 40.7096221197085,
                                "lng": -74.01348209999999
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
                    "id": "375f41aa9a1bff7c3766d2f5d80f21bd56487236",
                    "name": "9/11 Memorial",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3648,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103145373467458643970/photos\">YOURI ANTENOR-HABAZAC</a>"
                            ],
                            "photo_reference": "CmRaAAAA3w1hz0ycBkL9K5ToItSw_vHm6QA4hFGhpiZlB06YuqCar8L2gyE-9Gdc9WrMMuTlSEWYqALo7nabR2G8yKy9fsFniAgLPyv9Pp3CqDoWl6vloFsJ9piRKaA0fLO_3ZVcEhAVq0sdXYGK-sqMJP_l7ZTkGhSx1wOy9TypT0BfKZ7xNqUCfqQdeQ",
                            "width": 5472
                        }
                    ],
                    "place_id": "ChIJRcvoOxpawokR7R4dQMXMMPQ",
                    "rating": 4.7,
                    "reference": "CmRSAAAAiSJ5m5XnnxfvcA3g9fIEmmcrCsG_zo2J1WQft46mJ4jVe8CW8Z8-OkRThT_TiNatpXddNRRnLKMo7UnvrsJ1uMw9hxEq1SrdzMqZh-U3fieLMVjaCSeCtsTVTxwdddelEhCtpjyKnZI9YXrt-m1sL9fiGhQTldh8I1cJ-5qxB0x43E8zIC7WrQ",
                    "types": [
                        "park",
                        "museum",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "New York, NY, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7479925,
                            "lng": -74.0047649
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7588822,
                                "lng": -73.9986873
                            },
                            "southwest": {
                                "lat": 40.73290899999999,
                                "lng": -74.01141530000002
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
                    "id": "72dc79d023feec77725d7336e7c46fee27805319",
                    "name": "The High Line",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 667,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/109002135839164232632/photos\">The High Line</a>"
                            ],
                            "photo_reference": "CmRaAAAAZ-zOh9-bdBiYmY82TMHQK4E7sdKqwv8y2fPlo3tl2W034NGZMkla_2ubXPeZS3aS-Hqc12mGc5PyO77otENLPu8eJq5Wa4TWsMfVwDIAKVLrJ-L-ajPICkrbD-JY0EyUEhBvfyKAouNZS9Cih11teJpzGhRvsWo4aQfXb3yF5aOfcRZ5Ji9JbQ",
                            "width": 1000
                        }
                    ],
                    "place_id": "ChIJ5bQPhMdZwokRkTwKhVxhP1g",
                    "rating": 4.7,
                    "reference": "CmRRAAAADf1eAqNkPhFyFKRdf2turfk6nvKFBNh850g8817Q8RAF01_23XTMAU0qcOMnjpUwcAtXdWHrsObnA4Agbe_vQzRolO0b81sOEh-QXHK80VBoaER0uotpnm5-REXkUQoMEhDIUXNa4zaob-iBMoxFl2ThGhSvOor1xXpQf2SwqlMC_7u-0EOvMQ",
                    "types": [
                        "park",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "405 Lexington Ave, New York, NY 10174, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7516208,
                            "lng": -73.97550199999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.75289618029149,
                                "lng": -73.9743004197085
                            },
                            "southwest": {
                                "lat": 40.75019821970849,
                                "lng": -73.9769983802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "3457c605bb2ffc2b82b6b2fb097df9169c4e61b9",
                    "name": "Chrysler Building",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3883,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105837059446969736756/photos\">Dmitry Burstein</a>"
                            ],
                            "photo_reference": "CmRaAAAASoBqiC3Xee1clCRKkXjSSLB9gkmt7WKCF-ecqaWmkkaVIOfCqRhRO44txsBXbhcK1vvnZEazOOggX0L_5Qa7sZRzi35x4Dr0hdDnIM2HktIjPLI3lFyxg0uSFbDky6s4EhDkh_Vkt6BBS9W7zJ8wvMMfGhSdir0WmNXOMF6htOhZ7GBvxbFdDA",
                            "width": 3879
                        }
                    ],
                    "place_id": "ChIJeWPFRwJZwokRGD60OOo74RU",
                    "rating": 4.6,
                    "reference": "CmRRAAAAjaOOu3V3R3pryEFPCDP3A80K7yMub-ga3RYsb_hLKig7aHpGmTlBBbvu3lG1roDRSj2m7Xo1pCGx79hXl80pdXzuz0SDd_MCwGfW1ajk7NiboySGd4MPdKht1ZtV6epNEhDKZ6gkZ-IZNxj6Rc3Md5K_GhRJ40COGbZRfqtkh5XmirkV2Wp7SQ",
                    "types": [
                        "premise",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Central Park West & 79th St, New York, NY 10024, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.78132409999999,
                            "lng": -73.9739882
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.78391664999999,
                                "lng": -73.97120815
                            },
                            "southwest": {
                                "lat": 40.77880165,
                                "lng": -73.97695955
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
                    "id": "d9dd2c58ebb5c5cb4d00b28db933b7e220a34b5a",
                    "name": "American Museum of Natural History",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2340,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/102790079208893657393/photos\">Jerame Cramer</a>"
                            ],
                            "photo_reference": "CmRaAAAA5tzBiA9dvH9qd18nakeYxk1WgLtlhvODB_cMNbOdYs1Z-uutk6EL2spK2GBJvl3Hedb0X_K_c1jmblcX-eFAgZ69dQ0jfp1ffd7y3oZr1CEN9Cs7sw1pzwJK62Nu0Q6VEhD73T1Rt6vkDmz_JHlqfjGuGhStompxJLWjEpPU0NUPLQGc-elDew",
                            "width": 4160
                        }
                    ],
                    "place_id": "ChIJCXoPsPRYwokRsV1MYnKBfaI",
                    "rating": 4.5,
                    "reference": "CmRSAAAAgh7foxqwuvepamKs3MlhF9TMio6ZyosK_JUTg8pJaatvLENUwOlFQUs6ZXpvhzF6dbFG6Or2K11nB-YHWZ9T2nLHDDrN23aWtI6k95Vu2f8LtXIb8OUt-fAfWQtkc0bCEhAoIwZhTvZ9tLqBpTm4oomkGhSMT40gVomyfgGl1FX5xt2r0DB6Vg",
                    "types": [
                        "museum",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "30 Rockefeller Plaza, New York, NY 10020, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.758951,
                            "lng": -73.9795189
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.76051758029149,
                                "lng": -73.97801536970849
                            },
                            "southwest": {
                                "lat": 40.7578196197085,
                                "lng": -73.9807133302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "e05462d15e6f301386934e30734e0c6d39636b95",
                    "name": "Top of The Rock",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1280,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/111582420314532905532/photos\">Sergio Tumminello</a>"
                            ],
                            "photo_reference": "CmRaAAAAH5jgCOHh3kq-fRhntSrspnSgmApuP83dhM06w88A6OYLUh8qz9I_NJRDVSVvcVC1YCW9EPx8PyeVvwqWZVsjmsL4b1TP82DoFFUcrwcB2JgislxqemS35hzY5FwrxarQEhC8YKeXdOTtv1nWaaJfuJ08GhSDTAMoM-Q03TfDxz1zLGn0zhHb3w",
                            "width": 1920
                        }
                    ],
                    "place_id": "ChIJe7vKMf9YwokRIMYfDz7iF9o",
                    "rating": 4.7,
                    "reference": "CmRSAAAAYDU8zrq_3OVGdOSHqF_Q2Lyg2pDrcKGwMGylnI3H7XznjRSjPdLohO9dRta95U9U2ukv_Q-WbBuUFi1OaHVRqX8F4OW13NR12jjYuS6RseOXSZNjJPfIEXJVV991y5U0EhDICCtx61tRBmT75Cd3gXf0GhQnBOU0WL05ZPmZL2KYNcxD1AtTOw",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "New York, NY, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7828647,
                            "lng": -73.9653551
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.81804399999999,
                                "lng": -73.9339825
                            },
                            "southwest": {
                                "lat": 40.74734159999999,
                                "lng": -73.9970305
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
                    "id": "c9bcef33f0cc85eda31f1c7444e9b1a3b82c9a9f",
                    "name": "Central Park",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2848,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114158126016582693529/photos\">Jean-Baptiste Jean-Baptiste</a>"
                            ],
                            "photo_reference": "CmRZAAAAGt7rCQWPh0sik2BWniTrGtikgOjzDfRgHYV2FF8bgx1MuFz4jFXWcFx7GSp-j25mU9Z64Xa0uSPJSq-j5f_ui18NURv6vES0yfArC0sd8Wk-OyDi5aCucFBlHpRjSnZpEhBQVWeFR8J7UA-SbNv8hPoYGhRvOFrUFlUxF51g8vLUGac0cjnSzw",
                            "width": 4288
                        }
                    ],
                    "place_id": "ChIJ4zGFAZpYwokRGUGph3Mf37k",
                    "rating": 4.7,
                    "reference": "CmRSAAAAhlGP4HDuIcB5scM4sehdnphe84MokIgXHPp7ElVrrDOiCIfCbMQ08iFTcQlxK1R35RtnjMOolTr99Sb4jvyjY_h4c85fTsmYmr2Sq2oOkRSTMTRqginc3VAujqP0-OtfEhAdvB1Jb0A0bGhlu2CHfBCxGhR6n5tIwUWc5ufTBy6xx30vixciVQ",
                    "types": [
                        "park",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "1260 6th Ave, New York, NY 10020, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.75997599999999,
                            "lng": -73.9799772
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7612802802915,
                                "lng": -73.97879046970849
                            },
                            "southwest": {
                                "lat": 40.7585823197085,
                                "lng": -73.9814884302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "89dd7f0c82efc14f18954f8abf2925515037927a",
                    "name": "Radio City Music Hall",
                    "photos": [
                        {
                            "height": 1200,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/111235470750488528791/photos\">Mike Somerset</a>"
                            ],
                            "photo_reference": "CmRaAAAA00fzt2Vru8VGGNP3QXaN6BCYBlge60FopHzhkPdKVoE2mRenLGkjmhZlMgWrvwHHvJZEq3QTU7Dl8SHz-wKWIisLgD6NzhGaev2ceSij3yB0SOStzuW0TU3coi13UKUjEhCjCPYTJcxitMYTqZh0N9CAGhRHVxgJDbpYqMXxqmDU-T4_PHHGgg",
                            "width": 1600
                        }
                    ],
                    "place_id": "ChIJPS8b1vhYwokRldqq2YHmxJI",
                    "rating": 4.3,
                    "reference": "CmRSAAAA88rBgGDduqg7QeXY2LNLgHAouoOwSsxKvH5VrxIVx7ZJcdl6xTfz9XfXKqgcUT6HA3B4Wa-KlVGe4Ckis0dXPVdsKuvoheyCk74blDqIuwW6702nNpQjmy9s7mHP-ro8EhDur455KAmV10fAOLJc-tAsGhREq2kEL0emIBkILMRRnceaP6nmOw",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "5th Ave, New York, NY 10022, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7584653,
                            "lng": -73.97599269999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.75987823029149,
                                "lng": -73.97453295
                            },
                            "southwest": {
                                "lat": 40.7571802697085,
                                "lng": -73.97777435
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
                    "id": "acf24f96362bdabb64807f6c17cba8bb1d5b738a",
                    "name": "St. Patrick's Cathedral",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1150,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/109259847616931570223/photos\">Iljoo Lee</a>"
                            ],
                            "photo_reference": "CmRaAAAAQYvSyIX979z3g6tm9nCFEOkqGOb_BIi8yOKTZCbA5YhPKog4WeHKjPDLtEYzIcKzrnaZZr1Vu9suw5kSQ_nVtApGWtGqrrvjFfflxrBJ3LIs2Cb-AqeIV2ohcUgEPkxEEhDexQdJgqJiuSqEk_ccS50yGhTbYgW8rxqmK0MhzVgdj-Iqoj6PWw",
                            "width": 863
                        }
                    ],
                    "place_id": "ChIJUW4vEPxYwokRW6o24DU0YIg",
                    "price_level": 0,
                    "rating": 4.6,
                    "reference": "CmRSAAAA_UbP_1L1soGhTZE8X3taoqYJCxzbj5cCBWBurNSN70MmDPk_OorVAXpxysWSCkhtNjUPOFOLqH3OVuUbnhindzeK7jFZhJoTs5lcOIr-FVHAV-oUzf7sTL66tnPEBywNEhDPwNazVl_M36OlTxviPvU-GhQWZkHifzrMt4QF9FqbpPS5gfsBLQ",
                    "types": [
                        "church",
                        "place_of_worship",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "285 Fulton St, New York, NY 10006, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7133444,
                            "lng": -74.0133677
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7143633302915,
                                "lng": -74.01215566970848
                            },
                            "southwest": {
                                "lat": 40.71166536970851,
                                "lng": -74.0148536302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "48cd459142d91a750ab1ac00141e799d2a7c1bfb",
                    "name": "One World Observatory",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2448,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/116088260092237923598/photos\">Dani Rojo Gama</a>"
                            ],
                            "photo_reference": "CmRaAAAA5j9qKXjpOZFYyiL-fM62YF7PvMTH2OcRBaz7741EkGRVx7BtvNb6E2SMA49Q6tPzpAgPvxqTtrBBdOIHMguRnqpCVC5-1qOyA8czRBQ-NxsKZsrDJ-qL_I98NWLzZ3pEEhAdNQFWIQmmSuKPXNIP33phGhRYVoF0GV88BspdervEQMVJvJsN_w",
                            "width": 3264
                        }
                    ],
                    "place_id": "ChIJTWE_0BtawokRVJNGH5RS448",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRSAAAA7xWkVdJhlJe3eh3lfHWq_LlHVcaPEoA0qNQJQwnwW6LWlBmtbkQ0acQ8qBz5T3wSv8DvH8-7u1oLwdcR_LStFTO4n_SnTAVg5WQ9tA9loO_iKM_6dwvgq3TktHp53QSREhDMF6ax3J1k-aHttcZjwWOmGhRkfZ_BJSZecQajYfan1rYx4FpY_Q",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                }
            ],
            "status": "OK"
        },
        "hotels": {
            "html_attributions": [],
            "next_page_token": "CoQC9gAAAKgEX8vQ0If1v0ULCHG28FY63UoehPCDNXQNywXuVvLlWOxSaxALvXEigK95ilOhcmnqy2FyyjVaMkuj_Q_Y9vxEJRePeTffYFPZwvE_mdM9UGDIulY_BiOdINKpjD67MeNEtenTx9Qc9RSfAGha0dmSkqStFwtmHiFjAiDbrmfdAT46bB51Rm8IK9-zKhmALHKVUfKV7T_YBO3y06WGdHpFIA8DMLOr4Z_1PyFxTOXbs0A2KfoKPtOKfs--6vERJjIi93rV0cHCGCoZhgLoiCDvLiL8OuAFyJK75vbeL5Ag51jqrFvAjOryUUE9fvyd6eR-FNWL2nSjg5ixcZA9rgsSELmrZaMDQpqrgHS54H29sboaFB80D2p6uSzB6YxgBscH9I9_zVNr",
            "results": [
                {
                    "formatted_address": "28 East 63rd Street, at Madison Ave, New York, NY 10065, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7657089,
                            "lng": -73.9692386
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7670578802915,
                                "lng": -73.96788961970849
                            },
                            "southwest": {
                                "lat": 40.7643599197085,
                                "lng": -73.9705875802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "c688e55a6b1383b9bb4bceecfcfdc1afe384da93",
                    "name": "The Lowell Hotel",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3456,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/109242289716376687889/photos\">The Lowell Hotel</a>"
                            ],
                            "photo_reference": "CmRaAAAAXhRAHwnyQGwgkgRQeEThuncYYEtzi-cZUsZlmhMqa1Sah9IKtE8uuaU0Io6IDLp35svBDbcUUvlHTwEcdwgFs8NOSqTfu6mNQi0sqO7kSMWUD9_u_iyB8TwrV-SrPYbHEhD0rjzCRa3TE0d6SVruGuE1GhQfAtfuUmayAps8v_aj0XFa9KyMYA",
                            "width": 5184
                        }
                    ],
                    "place_id": "ChIJb9nOTe5YwokR5og3CprlOX4",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRRAAAAzgY0_Zgso6rYe-lDDSJemfGs0yAxgyVFbAPowSCdxVcZZVykX1A1ZejQgnihQ1DvSQHtimMszkxNvIBsWAR8PQ8CQgqlH-f-50blxThnkGUEYuKShqVT6A-MhxHTfDSEEhChcOIvsi6SekaT-hJ6qSsqGhQYdT3ieRWNDrjV8fFbQdkVkneIFg",
                    "types": [
                        "lodging",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "130 W 44th St, New York, NY 10036, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.75645919999999,
                            "lng": -73.9845479
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7579083302915,
                                "lng": -73.9831238197085
                            },
                            "southwest": {
                                "lat": 40.7552103697085,
                                "lng": -73.9858217802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "3512b942b934633e89bc74d023fe44112b07d669",
                    "name": "The Chatwal, a Luxury Collection Hotel, New York City",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1144,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/102410255199938987362/photos\">The Chatwal, a Luxury Collection Hotel, New York City</a>"
                            ],
                            "photo_reference": "CmRaAAAAD-saiR8PUaCG5mc6YfAU0aA6oopg-85v3wIV3vB-ZIPgEIQLJNQDWPlBlXcSxf1oWrRJZEo8qWKC3jeYE_W3C3Rz3WvZ402lrnjoYoRlU9zs5OexnQ8Bhkk8MOr3EPEfEhC5mSqucPDdq9SVfbx147k4GhTIMx_0Yg9-aVngdFediJHqhOu_YQ",
                            "width": 1500
                        }
                    ],
                    "place_id": "ChIJ613balVYwokR2Sd7fEqauZs",
                    "rating": 4.7,
                    "reference": "CmRSAAAAraAAdBy1wXhRU8wJpZT0cxOgC-810-LeeLFTsX9CpPP60bBL95BSbmY_tQn7w9qiPZtkwE-AniGNn-0wFI1fJD1UgJqLclM8Ah1wZQap6vifSAcJmcg_-alPUF_lXVwsEhAxfOMBnAWFFgxVcHMInE_MGhSTEbjHHtqQBGrMy-HUduvq66QaxQ",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "1414 6th Ave, New York, NY 10019, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.764816,
                            "lng": -73.97654
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7662118302915,
                                "lng": -73.9752586197085
                            },
                            "southwest": {
                                "lat": 40.7635138697085,
                                "lng": -73.9779565802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "bb41cfd248100408e7b046ce91596de6390bf930",
                    "name": "1 Hotel Central Park",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1547,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/101250783625777815020/photos\">1 Hotel Central Park</a>"
                            ],
                            "photo_reference": "CmRaAAAA1TzCpFDphXdrLb4VLpfBlGLL8OlitYU_eDWI-h3jH25j0TLwR09b6BlLTA4nhqLWkMCcTXA_m1FtRcCax8mpxQMp5WTiafb92MUSTG-DzpU7_8rjO1dsRipf3REr1AKCEhC8BtmeFr-rBj3533-pY7wJGhTiOeIRkUbSz6vhjl7GueDljXpGDQ",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJHb72rfBYwokRRhrgUWHTlLs",
                    "rating": 4.6,
                    "reference": "CmRSAAAAqK-Q9p43ZLBEGUzIuEVdZnPEm3DHTDggaAxLXLRDbQ06FWpv3E-3Crzc8hxnJUBCQgL4aswsxZno2l4MAv1GVo_DbP1TUZ2NBn7u0Mm2lECcPnrhqwIjRagVmMbQFrdEEhDP9DxZ12tBzFJjrX7RawJtGhRoVAYJV2Tu07pfZuQZo4h3XCGBVA",
                    "types": [
                        "lodging",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "540 Park Ave, New York, NY 10065, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7645047,
                            "lng": -73.96916709999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.76581658029149,
                                "lng": -73.96764696970848
                            },
                            "southwest": {
                                "lat": 40.76311861970849,
                                "lng": -73.9703449302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "545296bbc9cafce15027b1bdb3bed73a969c7797",
                    "name": "Loews Regency New York",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3397,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114212735480305564741/photos\">Loews Regency New York</a>"
                            ],
                            "photo_reference": "CmRaAAAAs3lCOJkox0FGswokNH15C5FDQaOtPw3PFrID8FPPmK4ENFOxNBp8bF-Yp13mbSn-ElAv1KbsSMEqj_W5AZrvFwYcHQQDp6cCNnCqjn2s_er5L2ucswY53pX18wfm4aYpEhCkrhq2tmznxGcyRJ5h_ylZGhTT1laupg4A739Hx4AxW_Ce4ulxhQ",
                            "width": 3715
                        }
                    ],
                    "place_id": "ChIJC0Xwu-9YwokRDQBat_jlgQ4",
                    "rating": 4.4,
                    "reference": "CmRRAAAACloln96dHGDJ3pyVCwR3KMlLSlMXIxCzxfWRREJTA9hzQrCRNXlopcG8JsfVUpddro_R80i6Ox0D78d30ww0GlSVD38P5Dz6QR9iJnjB0dyu7sFBYjUTWwXoP1xoTtM3EhAs2OOH8MluttDKJ3V_XuTCGhQPDoDwUf-UV3XAdN11oWIX_wTjvg",
                    "types": [
                        "bar",
                        "night_club",
                        "spa",
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "63 W 38th St, New York, NY 10018, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7522068,
                            "lng": -73.9853708
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7535063802915,
                                "lng": -73.98406351970849
                            },
                            "southwest": {
                                "lat": 40.7508084197085,
                                "lng": -73.9867614802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "c1b316163824a94cfd4c3f8d2f21e6c04cd130a6",
                    "name": "Refinery Hotel",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2592,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/108826836482178101148/photos\">Emilio Garcia</a>"
                            ],
                            "photo_reference": "CmRaAAAAbeaBdd0I8_d1uE4j3_XfXijHUsF5Xyx4tBiYA9fMO9JNb49XPSZbnGrTn6_4GnKJpjBHmY7Oiz6znumJhXjDOW1ASF2_CZvY5p6xfBxO43KCez0NPmzaTPWzU36pLeePEhA7sBQ5sI9VQJDM9nXa1lCYGhTzfQ_m0InpwsMgnNuf00vpRib59g",
                            "width": 4608
                        }
                    ],
                    "place_id": "ChIJl6r9TqpZwokRqsh-zI3NRs0",
                    "rating": 4.4,
                    "reference": "CmRSAAAAPVMdL6pI0O5Fmm2q44yh35LCA1iCvQz_Qt6Eel28g6bmrrU1UrPBe0juwxea9bgAeRUC8cj1eJ2lByeJXvytAqSrvjzwn-BM4qQzRzK1HcY1c6ZMUfSAZ0aloNAN_ay0EhAqCdlYKGPHjV8Ps4C3KqFnGhTs1O11YFgkho3qWsUEHMHoCnrfCw",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "2 E 61st St, New York, NY 10065, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7652431,
                            "lng": -73.972003
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.76658928029151,
                                "lng": -73.97058721970849
                            },
                            "southwest": {
                                "lat": 40.76389131970851,
                                "lng": -73.9732851802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "2c4ac10fc7d6efa48fce6e07580729b86241739f",
                    "name": "The Pierre, A Taj Hotel, New York",
                    "photos": [
                        {
                            "height": 1372,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103795444667262596243/photos\">The Pierre, A Taj Hotel, New York</a>"
                            ],
                            "photo_reference": "CmRaAAAAed4DdRbJ65nLdny1KzBt82CYHotJOQGsnUxbRI3g7Oc8nQLki_USX1hMX3_F1pDdxsA4Hpp-AohCeCvBR7Z_s6Qr50ynnH_P-PdvThoOsT8h8PG1_saPWWJb5zRMRzWCEhCqkNUXRutH1yvapi0TYOSOGhTytAndkpPdal_D8LLShOYIbSvwjw",
                            "width": 1365
                        }
                    ],
                    "place_id": "ChIJBxesOvBYwokR519Koj1ulDY",
                    "rating": 4.6,
                    "reference": "CmRRAAAADgt0__1MVkRjVVbUTCYlcSgLIeRh5NLc3csLx_dcmhn8mquYKUsNKVjRdxiRoKPCNwBT04gHHJEhevXwM4FzQE71JLuM1d2XbgEhnCpW6UE9ZbwbnLWppnR5SRBN7csREhC4FT1AHqiuslDqsl5_otiwGhRicUD7wi3MsgGs9k5AwrbW3jgaFA",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "79 Crosby St, New York, NY 10012, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7230126,
                            "lng": -73.997417
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7244160802915,
                                "lng": -73.9961563197085
                            },
                            "southwest": {
                                "lat": 40.7217181197085,
                                "lng": -73.99885428029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "ea50675441b2417f2c6eb94893e19fe5d6083e77",
                    "name": "Crosby Street Hotel",
                    "photos": [
                        {
                            "height": 3024,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107359684834766993542/photos\">Thomas Julin</a>"
                            ],
                            "photo_reference": "CmRaAAAAj8SXySU6JJcFBVtYSuXIy4Jj-cDbPnPBh46bvrou4QIQHPvFMZy0GMXu8CZUVp2l_g-hioSXXFdVb5XfmwEBK1H1uojLBtZW1BFwhwrZ7apmizTZ9sHH2bglCX5YiWWmEhCspT8RR4WsJ3b_J8frk2yiGhTI5bcCVCZ-4Zq7ynMdlzVekGHlxg",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJpYIgKY9ZwokRMt2wXGRZ1fg",
                    "rating": 4.6,
                    "reference": "CmRSAAAAD9ymq0b04d4BPoHeG4AZe1uUX2OAKYdlagyQJaLC50lzzAfhr6dOOUeK4-M0GQT4641nCYnvFEUyLVqYfwHdqNjptGwYOjdgLjVQdYZLrr0Rxpel-aR662uase8NSbF1EhCzTRvuX8E7Sd-6oNO9CR1uGhQYOh2eSVPlUXv9uUn_Jr7g9LvELQ",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "28 W 53rd St, New York, NY 10019, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7608918,
                            "lng": -73.9774011
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7623123302915,
                                "lng": -73.97599961970849
                            },
                            "southwest": {
                                "lat": 40.7596143697085,
                                "lng": -73.97869758029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "93ddd9711135ba466a4b1f3a9553a3d9103dcb5f",
                    "name": "Baccarat Hotel & Residences New York",
                    "photos": [
                        {
                            "height": 1327,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/102738290005557096512/photos\">Baccarat Hotel &amp; Residences New York</a>"
                            ],
                            "photo_reference": "CmRaAAAA3YZ3GFq-XTQB_s5HP6NJAAQlzPrKv7TG1byJ4Wrl4hIm6BZ56ywNwXaEt6WHnmifYzp5RaRzhELz8ZrfOSmCW7hG1tNNOrJa7_CKkellN7orFrpCAOty2aqC9l2_sbWbEhB4uN5XB9yDOqXct1fqsYYmGhT-G1zbl-w92SYfgmBWaLTOOMMs0g",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJi0E5YvlYwokRp4w4kH4Av-A",
                    "rating": 4.6,
                    "reference": "CmRSAAAA98bDYp2y4Z82Ri0jJ_erRQlFEV0JtBh1w1HpJZcstyQLZMzJzEsWZMcwLKspp-4aJUxJdYKdRcve9wntsw0C7fXOl8vd7YunDD6TLQgDVMoetAhTRM4WPBrdUhuCUYx-EhCnk52JmBBup9I0-VGMHHlCGhTrH8UkzN7vAd-YFIt9A526ZOgm9A",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "153 W 57th St, New York, NY 10019, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7653771,
                            "lng": -73.97907219999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7666283302915,
                                "lng": -73.97777731970848
                            },
                            "southwest": {
                                "lat": 40.7639303697085,
                                "lng": -73.9804752802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "96226aa2bdc8961eec42c1ef5df5661446e9eea1",
                    "name": "Park Hyatt New York",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3080,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/108334015335617733618/photos\">Jimmy Sylakowski</a>"
                            ],
                            "photo_reference": "CmRaAAAAcB9vVBW08nppguDiswSpQHQysCJ95-fQhv4NIdyRK07hOWQTB-qe1O-DBjcUVeASdr6CCO1OUJ-2TWgx-nzhex2mqo3bKIaPAHI3QT0JjQeIlxbJvv0kPncTteXcMiM0EhAOWkbBXaQ-TQ6TPHKp6IK3GhSiTQNgMV1sWREIodQNCjpabmzJ4Q",
                            "width": 5472
                        }
                    ],
                    "place_id": "ChIJpQr2a_dYwokRoYDzhaXxroc",
                    "rating": 4.7,
                    "reference": "CmRSAAAAGBrT2QsYxAq0ODuVrHl2GgkUqzzND4iebupnckAIYvgdCECIvXbqjoH8GAW9Rd82VLr4FkJZWPBPchEoRNzrBR1XlMYC928d4Bedw8l2nTToRjx6F_hyb5WgJ4d3z_iJEhBZrWxz5NylVvdUh-5xPJPcGhQc4YgY5NXDZ1s2BajQlk5Djxm5Xg",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "455 Madison Ave, New York, NY 10022, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.75801999999999,
                            "lng": -73.9749775
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7591687302915,
                                "lng": -73.97365336970849
                            },
                            "southwest": {
                                "lat": 40.7564707697085,
                                "lng": -73.9763513302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "6f58d9b4a4f4148ec3ae34f5fcbf609c53de78d7",
                    "name": "Lotte New York Palace",
                    "photos": [
                        {
                            "height": 3024,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/117650888548196368054/photos\">Vijay Sondhi</a>"
                            ],
                            "photo_reference": "CmRaAAAAvJ3G586ZDFs8_Mt81eMsvIras1WMRWVD_UuNLLNFEQRs_KidguSbtvC02kZbW29WN-MYq7FCdwmjXXtmxw384dbGdURur7AHho740fkt9SqFihsp9DfjSwGi2hdwfiqbEhB2MDWOEu4sH10dP4vxTND8GhQcSLUmNQY4SCBIN0bHcqxNFX5Gcw",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJu6kY43RawokRnmczCmSH-_s",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRSAAAALqPH818Ds03ARELzxr4JEfUy-HLoRYU0bGf-gF0VpZpwEYaTmRRK_h1Oe7_rp40xFxxEzszwbOaD2wP2kiYTDOR-KHfZZ_MFT_KUSZXOX36L75Q4AnD2qDxAUB5RkzydEhCrnheIRJIhsGADoDSa9aslGhQNaEefH60gK3-fGOH5f9p-pJ0KFg",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "2 E 55th St, New York, NY 10022, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7614222,
                            "lng": -73.9747694
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7627912302915,
                                "lng": -73.97326366970849
                            },
                            "southwest": {
                                "lat": 40.7600932697085,
                                "lng": -73.97596163029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "4043ee03ff77910e3ed2c1370ae6ef45452451d2",
                    "name": "The St. Regis New York",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1500,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/100682632239373146271/photos\">The St. Regis New York</a>"
                            ],
                            "photo_reference": "CmRaAAAA7xy1ru4yK5GN-CEl7bpuS-yCozLVEOUgRBrYSrKmMidqrcv6Yq3rpKA4QbCXYc4gl5WfQwRTYX7Os47J0h_grETetEuPS-T4y6iZmUZioZ80Gx4s0Wdcf6pLzj6ARpYgEhAidcZj96REOKH-bPO4DocdGhRkma_vqF004II678EFPk2E83U36Q",
                            "width": 1027
                        }
                    ],
                    "place_id": "ChIJT_kaUvpYwokRJ-Sl4G4kZ_Q",
                    "rating": 4.6,
                    "reference": "CmRSAAAAUvnUOq3FtBs_Ys6Zg0Ms8Hvesxr0ppvL0O5sh6W4NJ9yRhNggv9oc8TBGAPqX5ytbGHHw0Te_DVtktr63TsGinnOgznSFyb9RhPTwNSq4LUW46FlwZPTlvI-MQRzFzHjEhDhy5CFNxAzNRwDycZwBjrHGhQdFqOYN2zoeRIHNshZZGPBXqIM9Q",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "299 Madison Ave, New York, NY 10017, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7521911,
                            "lng": -73.97949470000002
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7534640802915,
                                "lng": -73.97828001970849
                            },
                            "southwest": {
                                "lat": 40.7507661197085,
                                "lng": -73.9809779802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "1f856665787bb91f06790cb5ecfca0bc94ad9ab5",
                    "name": "Library Hotel",
                    "photos": [
                        {
                            "height": 700,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105494787689478068331/photos\">Library Hotel</a>"
                            ],
                            "photo_reference": "CmRaAAAA4j4k4ec-q7A8DgrN6ZXX8MfiGWfT7UPPv1GPCzgleFKZMj96e8kYpaK8MOxTe_07fiYgmxIvqNAzgIjWLbuUD4dBn5F1Jm-7M8nXQv96YSbe4XG5Kn9P18VqIapHkUjAEhA1Q3QWdEk018OXQL7Apsa0GhTZpa_1PJmoUGQPQpBsxiQ7rpfC6A",
                            "width": 542
                        }
                    ],
                    "place_id": "ChIJebujAAFZwokRKeKF6sJ0lNQ",
                    "rating": 4.5,
                    "reference": "CmRSAAAAn18MDqGAyWa6kI-pvrUYsfrH01cqBVK_iB04-RF4rS-V88jrfwk8Kg9Jy4ACEu2IeMzxwMK4vshzHjcHqMkpriBzL5x55DtE9Xk8V5AEqOZXm9bCj6PBScxxEkjbh8STEhDs25dhHyRbNpJxTnwlCybIGhQwrSRcQuB-OoMCXT-yTsNF1M7ESA",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "80 Columbus Cir, New York, NY 10023, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7688844,
                            "lng": -73.98304399999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.77044403029149,
                                "lng": -73.98159596970851
                            },
                            "southwest": {
                                "lat": 40.7677460697085,
                                "lng": -73.98429393029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "c561b4b600e0038648deeb1ebc1e2d2a343986bc",
                    "name": "Mandarin Oriental, New York",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 467,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107750642314223413387/photos\">Mandarin Oriental, New York</a>"
                            ],
                            "photo_reference": "CmRaAAAAN3fKBRkLmZeauaMU48bvc-BC6omQt6sl4cVQ4CBi32Rw3vvN1Xum0nJn6FbEvHy3mr-1Lh86TKGW4xejx3KmsfA1jalbRZHXtT5kJpQ7u2CMsKAgpss5m7Xu09DKPlCnEhA421F2koN_OYLOg2hW-9OxGhT1qf3lKeco5MnGDVPRDBeox0e7nQ",
                            "width": 700
                        }
                    ],
                    "place_id": "ChIJL83lHfZYwokRnd7wA8PLD1E",
                    "price_level": 4,
                    "rating": 4.4,
                    "reference": "CmRRAAAAlHhPvxT7s2nQJEWi5k-xrNVD3tjm0i5YxF9NhfVq64vaf3teE4eyfvW-Q5iOfeTf96Qo_bd607xiRZklM_I2Q4zyLZdwZLjlo7f4-JgOPmnh--Sh8Za5GkwzKOVq1brREhBpwJWXaA9eXLQ50gL4Y5iRGhSkiyH-kZadTmhog3mII_Ran_HeSA",
                    "types": [
                        "spa",
                        "lodging",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "1170 Broadway, New York, NY 10001, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7449631,
                            "lng": -73.98854930000002
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7463378802915,
                                "lng": -73.98733511970849
                            },
                            "southwest": {
                                "lat": 40.7436399197085,
                                "lng": -73.99003308029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "c6c24f6061f4f2267fe7b70a5406bfaf7771248c",
                    "name": "The Nomad Hotel",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 866,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/106766407137652164568/photos\">The Nomad Hotel</a>"
                            ],
                            "photo_reference": "CmRaAAAAnre1OIUz_osNGquRt6zjnVQzUJvM_d2W_sxAzA8k4Fbw7aBeBI_aavwYfmjXkLW07CP9JjfvszQMSkmhZhEk0E_TxsfzKqB_fN4HNyeUNd-oFPUeu0-XMS_CP6mCdZAhEhDvMc9S16cpi7EBOdZnSN1FGhQlwECc08VXn0xdlV1_1wv4xe88mg",
                            "width": 867
                        }
                    ],
                    "place_id": "ChIJ-eorCqZZwokRU-91WeuBj6w",
                    "rating": 4.6,
                    "reference": "CmRSAAAAm7pY1ew0--GZ3vuFls1LGuej5JFa4Rs7FJNnv9nK-3VmMqpEXfVzNc54oHcMAjpwVh18LmsjUoDY1OOMmvpkqA4CIVwuF8vHXQVkpb1jAsav0Le-20XTIK9quWYESUsBEhBxRrxb1rjnDGZqFb-LJAVAGhRGjKnkwwSsB38YoYGc_QOacL8Amw",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "27 Barclay St, New York, NY 10007, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7124701,
                            "lng": -74.00908559999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.71383068029149,
                                "lng": -74.0077273197085
                            },
                            "southwest": {
                                "lat": 40.7111327197085,
                                "lng": -74.0104252802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "56ac081281eb9d58541dbfb75b45173d35b0590f",
                    "name": "Four Seasons Hotel New York Downtown",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 5312,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105675882692320109205/photos\">Maria Cona</a>"
                            ],
                            "photo_reference": "CmRaAAAAE2_zakfW7uthZTni0o53-LlVqYZgE-b2OLjxzSwlbkPY-aoafOpE-pGEzfTX39gt7CA40jxwCtK7Q8KLBZWh7d2nezDyxHOMHxwRq327AypbihdhCmBlUfbuuZ2nLRoiEhDZ-52sLduHbNPI7JFfrVK6GhR1wtaG6cFx51GNoFGmmDPt9idTFQ",
                            "width": 2988
                        }
                    ],
                    "place_id": "ChIJiz9V4xhawokRorqq7eXaNxM",
                    "rating": 4.6,
                    "reference": "CmRRAAAAnyPnarPVv0EgTM-UGd_2w46ncPe1w9CMj3Yd7a08-2PvX7shTp3LHYszSRf2G8b_Mud865HXkxHKe4xHV0nzCgjd9reEM3ntOL_LU5Tm29bCwAJXEyW3BNziWoDjFFmWEhBvfw9pIZyfW1abmMH1q_UcGhQOemD3IZc5r469jZri0t9bCytdYQ",
                    "types": [
                        "spa",
                        "lodging",
                        "health",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "123 Nassau St, New York, NY 10038, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.71123350000001,
                            "lng": -74.006745
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.71253403029149,
                                "lng": -74.00533491970849
                            },
                            "southwest": {
                                "lat": 40.70983606970849,
                                "lng": -74.0080328802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "36f91933da11e021d389793d2a9f1abfdf2434ca",
                    "name": "The Beekman, a Thompson Hotel",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3779,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/100637454022597038865/photos\">The Beekman, a Thompson Hotel</a>"
                            ],
                            "photo_reference": "CmRaAAAAZT6HL4Hvuph08OADgi1Z5uc3tO7JOF0zj6_mGHm2CsvG87toDq3740LWE32EYNj4KxVMYllw5B-MUktP0juL9KWNQGTHM5O_jHcTWF_qQiK2A7S8Q1kmtbLcjqZoK50vEhC0SE_XrdKkpgZMgdQlUdapGhQ-ahbPF_4IyhQrDXzzpAC0km7sNw",
                            "width": 3024
                        }
                    ],
                    "place_id": "ChIJq6r-exhawokRKgBzzPkn57U",
                    "rating": 4.6,
                    "reference": "CmRSAAAANf43vKdRfxjTbE8xThWtp_imOY5PkNfhOFZE6yZHJR-WgGlVm3Ghjne3ejw_4FwWlLMT6hh_JeqZIdLYcpbOVWjQBRDSWoqrDHiiRL22Hr1eL8i99YAVzJkZJqG6-3i8EhBQ_dWcpDrR3p46t7fW4W9cGhTOeHVay_0973aOJd0ubOsDHupQ-g",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "414 W 46th St, New York, NY 10036, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.761291,
                            "lng": -73.991736
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.76267783029149,
                                "lng": -73.99035576970849
                            },
                            "southwest": {
                                "lat": 40.75997986970849,
                                "lng": -73.9930537302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "453a14393e69abc039312d4ba71d86165f660ffe",
                    "name": "414 Hotel",
                    "photos": [
                        {
                            "height": 2048,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114986206626718888907/photos\">414 Hotel</a>"
                            ],
                            "photo_reference": "CmRaAAAAteavbJxBJQJhqZOwwCNM1m9XVkhWQkC2Q6Q__8Gq0zXNEGuaIbq9Ub6YUq478KPlmgGExTWwYavJg0spgDfv2kBrAQmZVc9TZLmG8UIf8bSsuuCPCNIawQq8YwIQqdRFEhBqPyCNDUtxmJxOyQxD1spdGhRarRMKhtyp_g_XoZo6ptko0GTBBQ",
                            "width": 1441
                        }
                    ],
                    "place_id": "ChIJhwBD1VNYwokR7eKcshuz914",
                    "rating": 4.7,
                    "reference": "CmRRAAAArX3Eyz4Kh08VjfIXTLk3Pa1oZv-qgonrEebQjF2vi0tkYkhX1rA5F-xg6hr7Sn_kmqLlQ3jI5xqMe4DYdKJJEoobtShH832_an0ieJKT23NqQZ76ParYswO4FUHtoOKbEhDNWz7NSjhd6fpSZi0xf7e_GhQyMM2X8RKXP7lCygJ_JCE5UZEXPw",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "218 W 50th St, New York, NY 10019, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7615112,
                            "lng": -73.98495249999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7629785302915,
                                "lng": -73.9835366697085
                            },
                            "southwest": {
                                "lat": 40.7602805697085,
                                "lng": -73.9862346302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "6a56d64e141b69d2d6727d6bb41e92e52ca16eeb",
                    "name": "citizenM New York Times Square hotel",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1365,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114246030817058217396/photos\">citizenM New York Times Square hotel</a>"
                            ],
                            "photo_reference": "CmRaAAAAome5JlSttxkO04TjC1oZsgflE6j-JWBKEf9zkRdVPy_q_Uo9lAFkkcxVh8_23nBUksYhc5l1aNr9MzL1JYf5jHkfM2EjtMhu31Ke_YK6VUQ30wIHeqMsiUWOBrILjs85EhCqWcw2JOG5Rk9Ub53BSjffGhSU-sy1r-8GRYROOu2yzUpkFaE0nQ",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJD7NlQVZYwokRUIDluhjtu94",
                    "rating": 4.7,
                    "reference": "CmRSAAAAQGQ6biXrMJKnNTcZrBSAoOmjjo80zc3uPXSzCgHcoT6Es0qv0H54eHgma2dWGnctYhFPMlGs4Cm9iOttev-4dxa51jjwp9qm34qgr-FpvhBjbBA5x8Njjak8WhfRIvXwEhDDqdCI8JsV1G9D0AlNu_lfGhSkDo83zbfNVvWYZgZ7QMgX2nFl5Q",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "25 E 77th St, New York, NY 10075, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7752738,
                            "lng": -73.96339429999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7765727302915,
                                "lng": -73.96208236970848
                            },
                            "southwest": {
                                "lat": 40.77387476970851,
                                "lng": -73.96478033029149
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "b763e7f0f6ebbb322baf797ca8bd88c4fd04c674",
                    "name": "The Mark",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 864,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/104489417862747578827/photos\">The Mark</a>"
                            ],
                            "photo_reference": "CmRaAAAAQiR-I9t037XulZq1wFhaCVBJOpdIcymmr8kVz6fe7BwjtHcXNzxTCwRkEH9xMOSXTjcCutDtw9k-xsN3SSyvSY81Vk1UB8ddG_Ubcyqql72lCBJXofterNT64Dra9RVSEhChAsP7-go3CMqp7XusO36cGhQRhIcLqOrC_N5i99FgAmXSmzYtKg",
                            "width": 865
                        }
                    ],
                    "place_id": "ChIJXYOiRJRYwokRm1i3c9R6WDA",
                    "rating": 4.5,
                    "reference": "CmRRAAAAjwnOmvV1wJTJdO0ByCyEFdfm9MmQVyhAKdJ_X9gH7FaDH-z6m4ZSuTxubAxIQhhw8xDPGXBVdhIePS62N_qT0uLwkBthxqSPi5bRmcmXR3Bu-XziJn_3quyYwPIXAbxxEhAtW-Wti7sMyEmC33gq823JGhSvkUKIVHC4qevDclK3lRg51aEfzg",
                    "types": [
                        "lodging",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "152 W 51st St, New York, NY 10019, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7614289,
                            "lng": -73.982458
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7628723802915,
                                "lng": -73.98116736970849
                            },
                            "southwest": {
                                "lat": 40.7601744197085,
                                "lng": -73.98386533029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "ecde55dbed8632de25e6ccaa839f2818c1a4063f",
                    "name": "The Michelangelo",
                    "photos": [
                        {
                            "height": 508,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/116054554057797543543/photos\">The Michelangelo</a>"
                            ],
                            "photo_reference": "CmRaAAAAi8XERHMy4waXszkXyGMXey0M9MhlMMHKdo2ZDKOFF2SYzqncInKoeUElEMDGoUAMnic6W4JkdPvCO7LFcZVo1v4zDwlvA7FJoZ_J6n9nuoO8vmoaQ0RDr2aGTFquykFGEhAsD6L21yvTB_nqjmqxQEO3GhR_0PPPdRboKi1Xe8GTwKmlifVQUw",
                            "width": 507
                        }
                    ],
                    "place_id": "ChIJb2q-m_hYwokRFLZdzzJP3mo",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRRAAAAVJ7lOv469ZS95mX_UC2BtgfHOvUIEQ4TcKAbE_yQhzEgP3B31uR5mzyhEDaSDAMsWXty5QAqtNNqrRMg4VZe2JCla0Fv-5EdMiws4W9vcrL8r3u5fikasjeECM6i3f1REhBCcVd9qMQhUUyaO6albm-vGhTpPhMNnFVdKfYAScUUCYkksghMQw",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                }
            ],
            "status": "OK"
        },
        "restaurants": {
            "html_attributions": [],
            "next_page_token": "CoQC-wAAAIY85MQlZIUpuXKuo_3omQMR8Nqf0ME7bqNc7G8FK84t_aMBQELOWylmLlbGXjRHOg37TAhZ5UmTbeSOWFfXG_xNRgu60vlkwAbWK1Osj3pWxTvd9kHvXYp8nezL0I0lpbhy7s7Cf9JRRyRDmfDcoE-qZK2kT1QFAYXhA3gBauCI6dd-I6mGXMVhKDOJTO2BjgiqeHtZ5lAall31-8DAkYQNnuvsPgsVNbyBMvjqNzkmoNnO8iaViwg3ULSTcc0bbpzK98y4Aw5mMhowyz3HXz4WyytYylqAG-9W95DCxeAsOBvmRppMbuZi44t-P7gWTcqJm1sPLlGyDs5Rhc4-uCwSEBKQhGgSgODwFhhvfLKgaZsaFJ4dwEgppUFA3JkComfAN2KI5b_B",
            "results": [
                {
                    "formatted_address": "1064 Madison Ave, New York, NY 10028, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.777365,
                            "lng": -73.9616659
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7786649302915,
                                "lng": -73.9601981197085
                            },
                            "southwest": {
                                "lat": 40.7759669697085,
                                "lng": -73.9628960802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "0d64df0c84acb57aa64c715ca9db61c921f885a9",
                    "name": "E.A.T.",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107476303447076480406/photos\">Renée Avallone</a>"
                            ],
                            "photo_reference": "CmRZAAAAFpy8g8vCbLL8dbTRyPBxigxYK_UC3I3OWqgQrrSwXvLPzdibSmMG84E8mYmWtm-CSG8Idc63uu9p4GPjf7yULhIcejgx5JvkPCaJ753es_oQ3B5EDJH0w78MWjPoOjAGEhBdmDCe5FCDq0GPdlvqg12FGhSusa7Rb_qLYjyvuU9JObKUASu5fQ",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJ8aQDcJZYwokRyPVIfqjkazY",
                    "price_level": 2,
                    "rating": 3.2,
                    "reference": "CmRRAAAAnevpPr28mhTbG4fCQa0QQUkHt6yWKpifbb1hjm6KUwoq98LR8dMz21I-6RjqlrdZiVQGtFu0Gyq6fzukXNIVtIxg2aLIa1SbFy314hLUxqI6UTWtJx3Rli2jklqybl8hEhBhKqKualZlpJ8TP0IvMfsiGhTdXxBgsUTn20pzdEFFpZ9S9yG5gg",
                    "types": [
                        "cafe",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "42 E 20th St, New York, NY 10003, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7384555,
                            "lng": -73.98850639999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.73987218029151,
                                "lng": -73.98709791970848
                            },
                            "southwest": {
                                "lat": 40.73717421970851,
                                "lng": -73.9897958802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "1f003ef829cecac6974e677cd495b3aa9d54594e",
                    "name": "Gramercy Tavern",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 850,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114166979717103053811/photos\">Gramercy Tavern</a>"
                            ],
                            "photo_reference": "CmRaAAAAPIKYaFBLHtq_WSC9smllrPefuu5iOPvn6i7XcRrbvHZEq3fq37SUe7YACMbcL1YZ193LIKZATL7TIsyMFdIfLHR7tfqrlmSVqv-6fd9vzv8v8z3RXCBsEt1JuM_RIB-lEhD1Ch0d6p5oK6XilVBIwWHlGhSCn78LWIKGiiNb73PLw9UlmgOIfQ",
                            "width": 851
                        }
                    ],
                    "place_id": "ChIJvSQIgqFZwokRFYQbJdzceSs",
                    "price_level": 4,
                    "rating": 4.6,
                    "reference": "CmRRAAAA4KgJXOg5FPU8nb_OqGp7gmWaTb2W4oABsA0VjmgNN4eCoFNs25XsPHRAf4WxQ6PXdYdoX2x7UoBoi4pkf7hEqXxIbgrCSCLINBctyHnmsTPCC6kkwJiwju7-GyFaHCGyEhAFyZtj43wcqdYboWofXOkgGhRDdIOHZQ3nMCWQ_W7O9OsB-uzzwA",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "155 W 51st St, New York, NY 10019, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7615691,
                            "lng": -73.98180479999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7627827802915,
                                "lng": -73.98044491970849
                            },
                            "southwest": {
                                "lat": 40.7600848197085,
                                "lng": -73.9831428802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "ad0a76f04ef4567ae3420ffa1881057b1f8180a7",
                    "name": "Le Bernardin",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 640,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103565644244028407440/photos\">World&#39;s Leading Restaurants</a>"
                            ],
                            "photo_reference": "CmRaAAAAKGOCPzEu6Y5IvEFExMlWTNYKYat1-gUENAfc1hkNeoLwf0VtmZTRFIqoXaSlnWmWF0Tv3f6tGLbTS3nR-h7IXm2Mw5uaR--h3k_acHtclZzTGEuuwNncOQHtThZjHIvhEhAB5svKRccO37OoYVXhjcOxGhR7kNNMYBpxsCii1u2ECWEXAy28gg",
                            "width": 960
                        }
                    ],
                    "place_id": "ChIJVSKXkPhYwokRVgXdrRfFxh0",
                    "price_level": 4,
                    "rating": 4.6,
                    "reference": "CmRRAAAANH3jIrtTWs5V-ioGCeXfmAtnCjjAqbnmhlNI3fIZD5JnTZehdUr_k-LnFlrz8gJCZ7NG-pbF228XcXrAo0jCeEoFf8kDZ3JsxF7V4voxR1HORP8qdfRsS5eiEYAJQEziEhCBXghNqLSY2XUXSZnSVkGdGhRGnlUk3H2fNPfC5o8WcdxlGvxcJA",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "60 E 65th St, New York, NY 10065, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.76677379999999,
                            "lng": -73.96760220000002
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.76816568029149,
                                "lng": -73.96620736970851
                            },
                            "southwest": {
                                "lat": 40.7654677197085,
                                "lng": -73.96890533029152
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "0fcae36cae92d503d097a515746e4700e021995a",
                    "name": "Daniel",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1520,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/111192969447456401878/photos\">Daniel</a>"
                            ],
                            "photo_reference": "CmRaAAAAc25U2F-QHN2x5TD5dMAFDswcrEpOPawTDA0CVLvhHADBTei2PEZUSlvkJRI8zXcTjdOIAWWpJfTIlUx2cPcmZGd3Z4xAQtNLFeoptrrldB0dCbiCK6WrxcvRzGjBLRUUEhBhKbK4O22z1njMa2CqAWhuGhR9x7cIc0Qt9quE6ybbYFQM4ySsCw",
                            "width": 1520
                        }
                    ],
                    "place_id": "ChIJ09ZGju5YwokRXOcNC23JRwk",
                    "price_level": 4,
                    "rating": 4.6,
                    "reference": "CmRRAAAAXFNkrU-YuuX-ZparJ7X78fDXsGo2iytVI5iCvJIge7ZPS0qOzo8AQ71NL-WUjW5KkxRBroJ28thR7_Stvl0J17YhAcLxl0OEoWDZkRR7Rbd9OKYcOrdroRhfb4Z4PYrhEhCEGhq7YJBH11b85GMp7_HDGhSmzcejwgJoUBGsHeZuta5ZEkAh_w",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "4th Floor, Time Warner Center, 10 Columbus Cir, New York, NY 10023, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.76822689999999,
                            "lng": -73.9828591
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7695244302915,
                                "lng": -73.98126351970849
                            },
                            "southwest": {
                                "lat": 40.7668264697085,
                                "lng": -73.98396148029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "37c516575be01a32ba25362a2ca116578eca3ef0",
                    "name": "Per Se",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3726,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/113256681836649808083/photos\">Keira Chu</a>"
                            ],
                            "photo_reference": "CmRaAAAAghv_odjFDfGdC61W50DObT6qrT4okSSYqX4bHdwGmtRupHf3oXynNGdNAhRvhOqoTnIyKgf4ALQN8Ol2PWdglflWpByWbbG_yLtfDI8HhYiOD3P9WbSfIKjoB-JI_x82EhBioAnfdfd9nFxdS7BhpVLKGhQ3lRRy6lxvyQUtg_w6-PQCvOK24g",
                            "width": 8520
                        }
                    ],
                    "place_id": "ChIJp3PsL_ZYwokRZYqs_40RJF4",
                    "price_level": 4,
                    "rating": 4.6,
                    "reference": "CmRRAAAAvRHUmI39DILmr5BmMgqrgqMDdp9R-pjfPN3JMlep_PKFcz0dY60l9WlJLeRFhguHnOPuvUlVCVdHdWJyQbYERBM8qlfflge50rC-xpcfj02FXL_7w8pfxZ_4V-DL_CZ7EhBHKZoLkQXdPBkKirBgmXJhGhQI4ImiwPGimJ3yGmSyUhh21P3uGw",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "12 E 12th St, New York, NY 10003, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.734207,
                            "lng": -73.99369899999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7355884802915,
                                "lng": -73.99232571970849
                            },
                            "southwest": {
                                "lat": 40.7328905197085,
                                "lng": -73.99502368029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "343b062c1a8af2bd222c4aedad863f3f91391b0a",
                    "name": "Gotham Bar and Grill",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3024,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105563121448815745365/photos\">Kevin Guzewich</a>"
                            ],
                            "photo_reference": "CmRaAAAAClJCkjdbb677ilV8-5GKTwv4ONvzL_PKAgTSXouMxni_RMROb4LCZwEQqaDRHEnb1pfWyzi7RFZkYnndpvAK7fPX9OXAyPWKPjT9A377FJpmvuciDK9fIoSoFwEd7SNtEhDmSJmmB3RrruSwE3rmD7QFGhRM0nyQU2sbKWnexqFU6wLuG5D6rQ",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJZ72FzplZwokRmcA7CQzDMj0",
                    "price_level": 4,
                    "rating": 4.5,
                    "reference": "CmRRAAAAx9pyQyoaKOy-hqZ9qfpDlfw2t5Y-UvX9WoEG17DXEekEN39S7iC7wiCMlWHFKwxe4FoYNpUyPdMn1eU3Yx1hhNeEbk1VO6fVk8UyOB8alyPDMViwU1dN4fWlLxLpM3xSEhDq8j8JN5tnEqzFdjY14FqFGhTFTut_GDUwg2LDRns35-FEKbGSHw",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Metropolitan Life North Building, 11 Madison Ave, New York, NY 10010, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.741726,
                            "lng": -73.987173
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7429459302915,
                                "lng": -73.98593171970849
                            },
                            "southwest": {
                                "lat": 40.7402479697085,
                                "lng": -73.9886296802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "f758e0d7f68c659682afdb4b1c0749e7d3623839",
                    "name": "Eleven Madison Park",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1200,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/102127816559576392189/photos\">Tammy Liu</a>"
                            ],
                            "photo_reference": "CmRaAAAAhIwh9JJiBdd1oEg6br7zubqVaKYmtzWyEOmaNrexTkAv49FaUwav9BSGE2CaBCE8sbMH_KMrEW1hFepmig89ryHe9ARwlwplPWMBlRpdCxdWjx6u6OvqwMVx7PbVOPzMEhAFFXkQPX_eNpIwxbdea7PcGhQSJR1GzuPyROZU85Msxl2ExnSTKg",
                            "width": 1800
                        }
                    ],
                    "place_id": "ChIJEWbXz6ZZwokRLKmKrtPfVFY",
                    "price_level": 4,
                    "rating": 4.6,
                    "reference": "CmRRAAAAwU8HP7wc71uiJLojolF0dMR8rIap0JmAR0F3eFAmQQNKmmrB0-CmkPgbKnzEEXQtlIzmyxIqNn0liW7MH9nr-EpUgOrZDlAVl23mS5N7WGq3wJhoHaxBr5x8-42rip6tEhAF4dbSQGyslrdYQQSQxcHoGhT3K37xz9EXxfQZwrRD3v7tDgee4g",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "41 W 42nd St, New York, NY 10036, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.754538,
                            "lng": -73.98250279999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.75574133029149,
                                "lng": -73.98125016970847
                            },
                            "southwest": {
                                "lat": 40.7530433697085,
                                "lng": -73.9839481302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "bd46c7f5f2917d7af1352e17cdd3cbb7028eb25d",
                    "name": "Gabriel Kreuther",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1365,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107389134674463250002/photos\">Gabriel Kreuther</a>"
                            ],
                            "photo_reference": "CmRaAAAA4RL8oz3Muy8gzt28LxFJPrN-kfA1urWiJ0B4utckPMNKjLIgS6vrPuMsBfm7NRTOr6SzknfY9hAHNMmU3tUBni1vYLKdDArCtjVDWrlSwlCsHy1qOOFtPcXF_0nvs38aEhBAhE5p4WLN8_60kbO9I1DfGhQusHKofUlerirr3AouHHeWckNZsQ",
                            "width": 1369
                        }
                    ],
                    "place_id": "ChIJw_TGEwBZwokR-zLts543O-4",
                    "price_level": 3,
                    "rating": 4.6,
                    "reference": "CmRSAAAAr26bDqDhu0JhC7XJk2RVQApmfmlw_4QHL8zxf6iWbEOAKk6JJciczZqmy_VvB99ofjg_FvzXp7cxljWMZzsjVJK7gGAmrRlzeutBjwtyEG150xmLy5exq_kKCZrGDQ0kEhA9dR2ZMWVqTEKyWg0YlywLGhTuF9Z0guV0H8tMTWKU8BSlWeRRRA",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "9 W 53rd St, New York, NY 10019, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.761081,
                            "lng": -73.976753
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.76242998029149,
                                "lng": -73.97540401970849
                            },
                            "southwest": {
                                "lat": 40.75973201970849,
                                "lng": -73.97810198029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "804d4d52a0fb7770d8acfe511699538ec5f0958d",
                    "name": "The Modern",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1365,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/100489217038255503401/photos\">The Modern</a>"
                            ],
                            "photo_reference": "CmRaAAAAv6VldtsX12YxPZFvXtCZd1pSrCcr500tEUaDOt5eKMR66eFr9la-o4jQQXUC8z_N8YIBWCEl_o02Xh2RbJqm8LkXJi7docIiCcLa4tnaLRAP0tLJzaXtUWXQIh_Na7PNEhBbCt2iaws0hChY7TVyjUg2GhSNkGoC4aU73e7oEyH_5kw-6S1zHg",
                            "width": 1367
                        }
                    ],
                    "place_id": "ChIJMW-gxPtYwokRzDlnsRgq9rA",
                    "price_level": 4,
                    "rating": 4.5,
                    "reference": "CmRSAAAA4BEWUQFEqYzZsyPIdBLI7Q63g7AGel-MTUz4xAxO8ch0lB8YVYI8nn-jvR7FqWu3ECZYr4fAjfEamE_AvCrP65k04VH74meKbfTCkNAf_G-7TnivPam2C-NRKCyxwJ8CEhAt8uSZG31fXGYoMuzOTENHGhRnPCQZeJBTOpkcOxbeng7u5NClLA",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "47 E Houston St, New York, NY 10012, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.72464129999999,
                            "lng": -73.994739
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.72606958029149,
                                "lng": -73.9933627697085
                            },
                            "southwest": {
                                "lat": 40.72337161970849,
                                "lng": -73.9960607302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "257b24156e15fbabfa39641fe56fa6462605e3cc",
                    "name": "Estela",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 4032,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107231714396617814703/photos\">Ling Li</a>"
                            ],
                            "photo_reference": "CmRaAAAA9D7vf6iCiLL1hjVrfhko7VSBxKb2VbqPRN9Cfcg0xzIEM9YaX_opO_18y1jhu5H2XmbOYpy972o0FVw94V7DPRX_lJqaZdkV4kQ4ur9JzB3YjCk36WHQNnRnFFNWH0q6EhCNxygnPg45d3_YkC-hINMGGhQ8PZ0K7mmQ8q3katbfnAG3VxurxA",
                            "width": 3024
                        }
                    ],
                    "place_id": "ChIJf3f-f4VZwokRcBCEciTOGRQ",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRRAAAAz5BgMlfCw0EeEeOXGD3FJ5wODigXJgSL3SjRvMFWbxW_LKs5dZf2a7dHrJJyADPGVbeeMFbx6Jnj6ROMGFuZI5eHBJthKeENMYs3Jum6P8T7qCBBs-wq-JlhQOZ6mgCoEhDAQIDWZOc6d4-xAN2SKRZcGhSur8CkPThKQw79GFRYrUmp3GsCTQ",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "178 Broadway, Brooklyn, NY 11211, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.709819,
                            "lng": -73.962467
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7112116802915,
                                "lng": -73.9611154697085
                            },
                            "southwest": {
                                "lat": 40.7085137197085,
                                "lng": -73.96381343029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "cc507a5029419584b2061f374000114cd291d84b",
                    "name": "Peter Luger Steak House",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1268,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/112110162861336990395/photos\">Ahmed Allam</a>"
                            ],
                            "photo_reference": "CmRaAAAACl56wcc906ffcaxkcMwkzOzFeKgC-mg0cOKsZgkbkFqo3jtUiNsulJGhWq99PIK74SDq20TP0eqA2mZYzj4Kh7V73LQHSrh6X-_QHCLizx5FPmOWDmPppuwp16LBukZWEhAWZEPwVsaebd4daOtMZ-izGhRuwNZ0tkhsBOgWWaORKMYpIqRK9A",
                            "width": 1242
                        }
                    ],
                    "place_id": "ChIJR_bK295bwokR8gM6QgEdmkY",
                    "price_level": 4,
                    "rating": 4.3,
                    "reference": "CmRRAAAAswEG7wjzjdNpQZdtS2EK6qc7pM60I3reiVpRhR8MTp_Yef6UAI_8L5VuudwPrMvNl-Crpq7ikBCwG6_yImW_BBHUBGcyqvOWp1_Gij0Z_5CFa0u25Nu4Fl1VL9L8FMW5EhA5N4eXqKEZIMkz335kC_i6GhRjrqmKiPWsJ2XwrAi7OKrNcgNfPA",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "240 E 58th St, New York, NY 10022, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7600624,
                            "lng": -73.96556629999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.76150593029149,
                                "lng": -73.9641475697085
                            },
                            "southwest": {
                                "lat": 40.7588079697085,
                                "lng": -73.96684553029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "ec27c4405756c88482516d57ce03739068355b4a",
                    "name": "Club A Steakhouse",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3456,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/102400989400172138580/photos\">Emily Bakaj</a>"
                            ],
                            "photo_reference": "CmRaAAAArSUmhYZElR2cqNh6Ubcj6Km_ey0boOrSsGCKXJZBFsjA8WiCA9Ts0BYzSl1ojN1R1k6H-5Jwq06dFOTonKLcbBatBSiEMaGWsiz1Sxh3--mNqxGK7AieT7ChaJnexwIVEhDWCtN2RwTBjWOifsnv0T8tGhRbsbhLQXGKrdwlfdIULkRUu9tFtA",
                            "width": 4608
                        }
                    ],
                    "place_id": "ChIJhWkA1eVYwokRPKlaxy81SAY",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRRAAAAhOMWjRg8R3K-SHwirrN6Ln4C6CNWl6ICkGWsPP40hxsoIbyCtN6VyU2CCcGV88pIPs77EixD8DstKYXCK43J7QztfgFJC1DIb3WXNy-0R5xlwINSoIUOghM6yWW8kVfDEhDbdHfYjegT4fwCjRoF8BcvGhQX9MW3pVK07cZEsk16Yailc1Omig",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "1241 Amsterdam Ave, New York, NY 10027, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.81004710000001,
                            "lng": -73.9584781
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.81143228029151,
                                "lng": -73.95721536970849
                            },
                            "southwest": {
                                "lat": 40.80873431970851,
                                "lng": -73.9599133302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "b605d46f3011e337f2e75e269bb6b4f8d0853468",
                    "name": "Flat Top",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/108230965180565314385/photos\">Qahtan AL-Jammali</a>"
                            ],
                            "photo_reference": "CmRaAAAAgxC_FNJmaZhkTWYxpYuO2Q3xVAyKPTOWj1aPYQLfK1aE-Raj5ORFaQ_2KwMFG8ahG-LZtuD8PzDXRwtC8A1F1B4d1isMqc8srGplMPoRov3stCTMesuDlGR1wAoHzDkxEhDnJYa_0zFrR6785hIeC8ywGhSdnc8AYS3Z8pwy1U8sjUNZPrkcKA",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJBWhERBX2wokRAkCnvxPY9lw",
                    "price_level": 2,
                    "rating": 4.3,
                    "reference": "CmRRAAAAo4Tz7EEVrnJgwPN7G27dEjWivz-cFvpDgBGDw8nOc2xCg8-8b9NPIvBhFyzLCaOwe7UEsEcJiPiUPXPcUbBfgSwlRRyPly-sdhqkyVba1e5XjBxs8SBXuhkxlHDAqfAeEhBIOIRIGJz460PUrdpNPlfkGhQTnSbbiB_cTetloYQo3r3oqrPmvA",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "127 Orchard St, New York, NY 10002, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7196729,
                            "lng": -73.98968090000001
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7210212802915,
                                "lng": -73.98836696970848
                            },
                            "southwest": {
                                "lat": 40.7183233197085,
                                "lng": -73.9910649302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "688e7118802e5d647427780258d276023ccde055",
                    "name": "Russ & Daughters Cafe",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 360,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/116657897098896826230/photos\">Russ &amp; Daughters Cafe</a>"
                            ],
                            "photo_reference": "CmRaAAAAwIcOD3g2-OCcln3a4h3tLwx8nxiZdKGLO-9tCQwXNOcb6c-pkOlpZTkg70VOviFb1NVJycNydH4RgBMKWBZMupfyyr-vtlLHEjIAq8PjGxEQZXsRp4RqfxoVxcYCNVAhEhC4-mlObpInfB641taStbpOGhQB72UIpK_D9rknObWi2xqDdymoQQ",
                            "width": 357
                        }
                    ],
                    "place_id": "ChIJ53yq2oZZwokRqIHSP4qZT3o",
                    "price_level": 2,
                    "rating": 4.6,
                    "reference": "CmRRAAAAGLA7i_zcGW0WamKdghwkD4J2MF4BoTnO-f2OLMRjEEF2yxq2Vxer-08x8_4j31Ac1qFGoTNpSwyYuc8IBhacVOEOPnxuX3hk3pTDYA2asScYR56cjdmpXHLJzpZQh1u7EhC8NT2ySetXvc_WRZXxG9w9GhTB0YRoL7ZBhYduWlByYKVdeKS3-Q",
                    "types": [
                        "bakery",
                        "restaurant",
                        "food",
                        "store",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "142 Orchard St, New York, NY 10002, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7200208,
                            "lng": -73.9891633
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7213831802915,
                                "lng": -73.9878601697085
                            },
                            "southwest": {
                                "lat": 40.7186852197085,
                                "lng": -73.9905581302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "c067408df4b60282a8b470813e7581b7cfdaceba",
                    "name": "Wildair Food and Wine",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3824,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/110683553841105199970/photos\">Oskar von Hauske</a>"
                            ],
                            "photo_reference": "CmRaAAAAwMHnGJxyLwlu63uEor-Lg2E-wGs4xmQlxlbFdqWGJB6Mwy2J99WMdf6fP74YPkjO4FogyfyGur5bzq5FhQEipP_4qSmCC1YzgdKstMFLc_PRGdHiF-51JdqkjfjF63GPEhD6k7HqV9_N14J4AZIVVJZhGhRTGKpG82AdCEh1QLOogjGmp8wt_w",
                            "width": 2867
                        }
                    ],
                    "place_id": "ChIJfZsx0ClawokRCNMYMdZ_smg",
                    "price_level": 2,
                    "rating": 4.4,
                    "reference": "CmRRAAAAA9ZfUG4f6xofxjRyrZPsv4Bsp635ViWxJSzempWtHuDh5bTdS7lD1g2A9r-tt3YfHZXT-okgjraG4gNsFtgLdFQ1BS27YPs-p-irTrHYPMlzbndWTaVRG3XyY5MeRR_AEhACRVYhcju7lUd3aXYpAvo0GhRrEaTTyxGWmFaoVfQOltvbAFZYEQ",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "35 E 21st St, New York, NY 10010, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7396162,
                            "lng": -73.9883565
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7408515802915,
                                "lng": -73.9870568197085
                            },
                            "southwest": {
                                "lat": 40.7381536197085,
                                "lng": -73.9897547802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "400cd12f069856ace98966a9b6cb1f300b7c66c0",
                    "name": "Cosme",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1296,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105641580144879585384/photos\">Cosme</a>"
                            ],
                            "photo_reference": "CmRaAAAAOHXKcBFxMgMYDvWdCz2CgaK6AiEFQOy12UbNGfE4RTgBUZ0TTZzG3DKIxJRM_vaK-XslPhxyEkiM_FCcAAIZqqbQF5z3pRqMaOpRqw6RKntLwSNPavEn0v9YrGTVkMs-EhBuhOhZtwU-iEgPwXjMamBVGhQOKWgVC7pdWzDQtBW_c0w4RGaifQ",
                            "width": 1296
                        }
                    ],
                    "place_id": "ChIJT-gYZKFZwokR7O8LLYuYMjU",
                    "price_level": 2,
                    "rating": 4.4,
                    "reference": "CmRRAAAATCNJAzaSG7tOXJJkMHcJSTf9MN6RN8WQoyDfmv8yXMgBqtNabIE1-H7GgGs3DBdpUkyoa-0CCMUZwFXIahus00lKfUPMz98xuGEH9-T0lsSDzan7S23LIIYCxtHSBDgGEhDtUMuY4Fa-WJfIbkTSCPblGhRmtT2Y4Yag_cgQiOeSu-GN01_oFw",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "10003, 119 1st Avenue, New York, NY 10003, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.727263,
                            "lng": -73.985845
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7285625802915,
                                "lng": -73.9843767697085
                            },
                            "southwest": {
                                "lat": 40.7258646197085,
                                "lng": -73.98707473029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "084a0fcc749a6625e7b0a5aee103f3ab1d84136c",
                    "name": "Oiji",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1318,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/111173771909374722776/photos\">Oiji</a>"
                            ],
                            "photo_reference": "CmRZAAAAR3G46FJ-QBzpJWKrMK0QrqqzuC_Tbola-Jcrt6HSXEYf4AZ6s8-2zinPCWwPndpjkkTaTArzbLfsjjncIzIyKjh9-WKJLMNVYVw5xTrdGWtk549rSwTy5qPqTx9UMqxMEhBtyyfkLAToTLKdr4Iuk3N2GhRS7o2CJFoX0SzvQJ4V2VKFLVeQog",
                            "width": 1313
                        }
                    ],
                    "place_id": "ChIJ9_VJHp1ZwokRRhe-9rLmBb8",
                    "price_level": 3,
                    "rating": 4.4,
                    "reference": "CmRSAAAAeFK4CCUvR5GwLAFy7pg4b4EPX6zklUqMcgRde_rXxjkVRtiWoRCy3YOFWqP-kqT8xSYvhYFs1iAvlgTTcyR97dwHLlNeIskv0tGHfiaQdarT1_Nn5kSlZiqo9tct5mq6EhCRQBqRsyZCUF1k0uSpNY2rGhTSpd61AANBo-KLPP6avlY0PIVlFw",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "131 Sullivan St, New York, NY 10012, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7264898,
                            "lng": -74.0021771
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7278729302915,
                                "lng": -74.0008660697085
                            },
                            "southwest": {
                                "lat": 40.7251749697085,
                                "lng": -74.0035640302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "f91d4f3c33f0cb773066614d78be838f6ed5eeb9",
                    "name": "The Dutch",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1366,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114365317263368146080/photos\">The Dutch</a>"
                            ],
                            "photo_reference": "CmRaAAAAT_giYIXChwn67p8vXFPfOo4VNryT_2wpnfrzoIrwGm3TjPwcRX7zW5nrSFuP1l9IG3Fq5rrI6aPDr3UOQWonrqVthwGxSYjY6KXsOxRPhurFS6lo98XNbbRODWV4mKd2EhBo2-gyN08yCDIhIADvfPLbGhQB9hNk2pQZPwoZd6GDxq-JeqZ-fw",
                            "width": 1384
                        }
                    ],
                    "place_id": "ChIJ3RB9uI1ZwokRxCJXW-HpYZI",
                    "price_level": 3,
                    "rating": 4.1,
                    "reference": "CmRSAAAArwYUKhvyTOTZuX2b77MSZJJ-89qiLpsZWXYK3hWxqVgdNfzJc9LX7_Nkemg9Dei3g0FvE8yRkL5SXtCzkZSZarI8YI8ld1TtjX1O5POOGo5XfhwAyiznY9944kg3xUtjEhAiuvMAG3wG3yPpY_wcUH-0GhREPCrZlOCko1St15Za2E9cUfWeIA",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "355 Metropolitan Ave, Brooklyn, NY 11211, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7142631,
                            "lng": -73.9560616
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7155400302915,
                                "lng": -73.9547475697085
                            },
                            "southwest": {
                                "lat": 40.7128420697085,
                                "lng": -73.95744553029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "6d5cb18b6dd00dc9e4d9f6ae0f6c46da26baac0c",
                    "name": "St. Anselm",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1365,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/104111246635874032234/photos\">ZAGAT</a>"
                            ],
                            "photo_reference": "CmRaAAAA_RSEtv7u4V7Wqhwf5yYoNKALecD6NUOkllAuVqPFKkvZ_OIQyvjAtpY1VtkxcYhh9yMG48wW3_3mM6A0NrDN7JCaycb3HV2ceZAAcYhoF_mpQuWHyQ4VYk1pE1r-lFj4EhAbPWuGbWbG_UXJKDhgY5-cGhQavUDLJamB18qhXgJf6IkUA07LQQ",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJc3Sn6BNewokR_RkenZvQhlM",
                    "price_level": 2,
                    "rating": 4.5,
                    "reference": "CmRRAAAA3R3TWBPlQ95822E_B0_3Rgrfm_3yK6I_CFjBgedGMI-E0rS-ErQgTx7s5tLRcWXobd5qCA8bnmpFpcPuQBkhQ61YnDX9p5DF1wXxnDmtdYiI-9ojSTHi4xBTTea3RC7IEhDZo4fqutITBOttxgCwx-g5GhSAbk2gy8DzbhAdiWq9YHGpMCLlkQ",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "69 7th Ave S, New York, NY 10014, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.73218879999999,
                            "lng": -74.0033937
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.73357833029149,
                                "lng": -74.0021448197085
                            },
                            "southwest": {
                                "lat": 40.73088036970849,
                                "lng": -74.00484278029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "7e3f519a691dea53fde5703d169ee2fa6abeda4a",
                    "name": "Bleecker Street Pizza",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3024,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107861206092985225681/photos\">Chris Gonz</a>"
                            ],
                            "photo_reference": "CmRaAAAAURFvJAWdqnPHCB0lwIOi9cn4VOwrZ-HrUI5ANuI1QZp7j3Y6Nnv-LxgZpZKEvVGLNRI69sDfrj7B9XgUS1RVIPnW2xU39lrTPhgAWYfv5OqEhVu7kLt2uRIRtYT4oNRhEhCyoZAwO-UEdXhss-uV-yAkGhQL4UZjNSCiVTvAXJX8c1i4CNu13w",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJrXXKn5NZwokR78g0ipCnY60",
                    "price_level": 1,
                    "rating": 4.2,
                    "reference": "CmRSAAAAbaGWkI7oq_vRjACNgIOiadWbu4OnNpAAaSHZbxa3272RHjiMjYVq4Mq5XOGEwcB8V8NhIMgyF9Xwys49IpshBH21EMEGAFg2T-T9lZzx7Q2ffTsWrHvxINVD7jUEiYgnEhCjpQd1F9cO9ACtu_h4liyIGhR-rf0NTW504nXB3SBJ6zJ9dBb41Q",
                    "types": [
                        "meal_delivery",
                        "meal_takeaway",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "city": {
            "city": "Brooklyn, New York",
            "city_id": 1,
            "lat": 40.7128,
            "long": -74.0059,
            "visits": 17,
            "key": "1"
        },
        "tourism": {
            "html_attributions": [],
            "results": [
                {
                    "formatted_address": "1000 5th Ave, New York, NY 10028, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7794366,
                            "lng": -73.963244
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7802527302915,
                                "lng": -73.9613772197085
                            },
                            "southwest": {
                                "lat": 40.7775547697085,
                                "lng": -73.9640751802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
                    "id": "f732f202150af1f14ae8a057a1014ceea6b33fc4",
                    "name": "The Metropolitan Museum of Art",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3000,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114083495869686301956/photos\">Steve Raby</a>"
                            ],
                            "photo_reference": "CmRZAAAACcJsFqdfJDMy9o_S4O6scrx7bxHirB18F2ytv_ne_5CdbYcxDJ_-aF6-0-U9nBv2BBSDp7gDYEUvh3M_jz55B8l3_Zfg7BJ2Yjs3FYK3vUPmkux0Cs82sG3msLYfeTzJEhD3BZFPIKXtYR49gxiOG6v4GhRzxXXxO0eW4Oa31LeGdBTalQQa0w",
                            "width": 4000
                        }
                    ],
                    "place_id": "ChIJb8Jg9pZYwokR-qHGtvSkLzs",
                    "rating": 4.7,
                    "reference": "CmRRAAAApXn1jGJENjIY8xlg0eExJqp17z4G15ZPxvo0OBFpm0MFoB-2MMAd9UX2ehmrBiSp_wdAMhWWxPyARUAl8F29KB9rbiJbZjkQW5JfQldEGF-EbN17Fe1tuBjXhAQmbMaTEhAde9skYalEjI4A00XhVgdTGhSKc1HNOMpbnaecrx8Vyh1bUNGHNQ",
                    "types": [
                        "art_gallery",
                        "museum",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "350 5th Ave, New York, NY 10118, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7484405,
                            "lng": -73.98566439999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7497074302915,
                                "lng": -73.98392536970849
                            },
                            "southwest": {
                                "lat": 40.7470094697085,
                                "lng": -73.98662333029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "bc232d2422e7068b2a2ffb314f02e3733dd47796",
                    "name": "Rob's House",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103456530252801066707/photos\">Bobby Davis</a>"
                            ],
                            "photo_reference": "CmRaAAAATO0FJwRg8oRL78unWhaAI33Xaj-OTVx-VE9DT-WgQC85O9n9eJmmKTzSfN_NXraDatE-W11uYJj_d_sZvYGf85iZHE82d8cqpOTeej6LWIEiVE3ioVO18UBXFmbqSmtjEhCzY824hpvJ9ykoGxc93A-tGhRzyd2n3UPMqUuh_itLNrjDdtvmyA",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJaXQRs6lZwokRY6EFpJnhNNE",
                    "rating": 4.6,
                    "reference": "CmRSAAAAAEHQa4FrQIqxRHiftsuo6aztlJvKP7EmR4n2dJFG18ZCBKcUKSotFS32e3HoGZebFFK-Zmv7tvjSuDUDRyCPQu3xR1IxmGW29UC9yjxsnPkqsP3LZBurp4zFyESz49NYEhDO8kjbYDUZXc4Mf1f40TsfGhQiPqRGBRAJTaJcvkVDxy_OwiymbQ",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "New York, NY, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.6892494,
                            "lng": -74.04450039999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.71823,
                                "lng": -73.99872490000001
                            },
                            "southwest": {
                                "lat": 40.6795892,
                                "lng": -74.05975889999998
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
                    "id": "5a0d7e67078e35af0c456a277df9ffba7c1e4da6",
                    "name": "Statue of Liberty National Monument",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2368,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/102768924365449147760/photos\">David Edwards</a>"
                            ],
                            "photo_reference": "CmRaAAAAs-IvLtUTYoeR-5Qd4BN7h6SYxX2Bbork9T1Jlb1bC_ExgMaEnF2RC3QzM7v3oKipUwV12JZAYoi0LLWcluqztIMjMOhyvbfMs0qk8aGEBPGTYPGxVMtQHBJTcgilYruaEhBTQFDldHHH6zJt9Qkm33LeGhTXP157PRSBF18S8XhrSAwYmwhMIA",
                            "width": 4224
                        }
                    ],
                    "place_id": "ChIJPTacEpBQwokRKwIlDXelxkA",
                    "rating": 4.5,
                    "reference": "CmRRAAAA-w6hEnAH2c9hs_u7XJp02D0i0K8YhR6Nb9EiOmMwf1eXmJOAQk3adMPhpWAhGQf2iDDjUg9JW0BL9yajVVHHG7kWOj08sChlklyfZ54DHDo2uNGRQEnQenoSOCzGljHfEhBZmXk5FoSDDTIqA7AM0_k6GhQ2dIjZmlJ3phk9oXSYlJi7KOxv7w",
                    "types": [
                        "park",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "180 Greenwich St, New York, NY 10007, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7114836,
                            "lng": -74.0127254
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7123200802915,
                                "lng": -74.0104553
                            },
                            "southwest": {
                                "lat": 40.7096221197085,
                                "lng": -74.01348209999999
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
                    "id": "375f41aa9a1bff7c3766d2f5d80f21bd56487236",
                    "name": "9/11 Memorial",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3648,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103145373467458643970/photos\">YOURI ANTENOR-HABAZAC</a>"
                            ],
                            "photo_reference": "CmRaAAAA3w1hz0ycBkL9K5ToItSw_vHm6QA4hFGhpiZlB06YuqCar8L2gyE-9Gdc9WrMMuTlSEWYqALo7nabR2G8yKy9fsFniAgLPyv9Pp3CqDoWl6vloFsJ9piRKaA0fLO_3ZVcEhAVq0sdXYGK-sqMJP_l7ZTkGhSx1wOy9TypT0BfKZ7xNqUCfqQdeQ",
                            "width": 5472
                        }
                    ],
                    "place_id": "ChIJRcvoOxpawokR7R4dQMXMMPQ",
                    "rating": 4.7,
                    "reference": "CmRSAAAAiSJ5m5XnnxfvcA3g9fIEmmcrCsG_zo2J1WQft46mJ4jVe8CW8Z8-OkRThT_TiNatpXddNRRnLKMo7UnvrsJ1uMw9hxEq1SrdzMqZh-U3fieLMVjaCSeCtsTVTxwdddelEhCtpjyKnZI9YXrt-m1sL9fiGhQTldh8I1cJ-5qxB0x43E8zIC7WrQ",
                    "types": [
                        "park",
                        "museum",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "New York, NY, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7479925,
                            "lng": -74.0047649
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7588822,
                                "lng": -73.9986873
                            },
                            "southwest": {
                                "lat": 40.73290899999999,
                                "lng": -74.01141530000002
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
                    "id": "72dc79d023feec77725d7336e7c46fee27805319",
                    "name": "The High Line",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 667,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/109002135839164232632/photos\">The High Line</a>"
                            ],
                            "photo_reference": "CmRaAAAAZ-zOh9-bdBiYmY82TMHQK4E7sdKqwv8y2fPlo3tl2W034NGZMkla_2ubXPeZS3aS-Hqc12mGc5PyO77otENLPu8eJq5Wa4TWsMfVwDIAKVLrJ-L-ajPICkrbD-JY0EyUEhBvfyKAouNZS9Cih11teJpzGhRvsWo4aQfXb3yF5aOfcRZ5Ji9JbQ",
                            "width": 1000
                        }
                    ],
                    "place_id": "ChIJ5bQPhMdZwokRkTwKhVxhP1g",
                    "rating": 4.7,
                    "reference": "CmRRAAAADf1eAqNkPhFyFKRdf2turfk6nvKFBNh850g8817Q8RAF01_23XTMAU0qcOMnjpUwcAtXdWHrsObnA4Agbe_vQzRolO0b81sOEh-QXHK80VBoaER0uotpnm5-REXkUQoMEhDIUXNa4zaob-iBMoxFl2ThGhSvOor1xXpQf2SwqlMC_7u-0EOvMQ",
                    "types": [
                        "park",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "405 Lexington Ave, New York, NY 10174, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7516208,
                            "lng": -73.97550199999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.75289618029149,
                                "lng": -73.9743004197085
                            },
                            "southwest": {
                                "lat": 40.75019821970849,
                                "lng": -73.9769983802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "3457c605bb2ffc2b82b6b2fb097df9169c4e61b9",
                    "name": "Chrysler Building",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3883,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105837059446969736756/photos\">Dmitry Burstein</a>"
                            ],
                            "photo_reference": "CmRaAAAASoBqiC3Xee1clCRKkXjSSLB9gkmt7WKCF-ecqaWmkkaVIOfCqRhRO44txsBXbhcK1vvnZEazOOggX0L_5Qa7sZRzi35x4Dr0hdDnIM2HktIjPLI3lFyxg0uSFbDky6s4EhDkh_Vkt6BBS9W7zJ8wvMMfGhSdir0WmNXOMF6htOhZ7GBvxbFdDA",
                            "width": 3879
                        }
                    ],
                    "place_id": "ChIJeWPFRwJZwokRGD60OOo74RU",
                    "rating": 4.6,
                    "reference": "CmRRAAAAjaOOu3V3R3pryEFPCDP3A80K7yMub-ga3RYsb_hLKig7aHpGmTlBBbvu3lG1roDRSj2m7Xo1pCGx79hXl80pdXzuz0SDd_MCwGfW1ajk7NiboySGd4MPdKht1ZtV6epNEhDKZ6gkZ-IZNxj6Rc3Md5K_GhRJ40COGbZRfqtkh5XmirkV2Wp7SQ",
                    "types": [
                        "premise",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Central Park West & 79th St, New York, NY 10024, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.78132409999999,
                            "lng": -73.9739882
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.78391664999999,
                                "lng": -73.97120815
                            },
                            "southwest": {
                                "lat": 40.77880165,
                                "lng": -73.97695955
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
                    "id": "d9dd2c58ebb5c5cb4d00b28db933b7e220a34b5a",
                    "name": "American Museum of Natural History",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2340,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/102790079208893657393/photos\">Jerame Cramer</a>"
                            ],
                            "photo_reference": "CmRaAAAA5tzBiA9dvH9qd18nakeYxk1WgLtlhvODB_cMNbOdYs1Z-uutk6EL2spK2GBJvl3Hedb0X_K_c1jmblcX-eFAgZ69dQ0jfp1ffd7y3oZr1CEN9Cs7sw1pzwJK62Nu0Q6VEhD73T1Rt6vkDmz_JHlqfjGuGhStompxJLWjEpPU0NUPLQGc-elDew",
                            "width": 4160
                        }
                    ],
                    "place_id": "ChIJCXoPsPRYwokRsV1MYnKBfaI",
                    "rating": 4.5,
                    "reference": "CmRSAAAAgh7foxqwuvepamKs3MlhF9TMio6ZyosK_JUTg8pJaatvLENUwOlFQUs6ZXpvhzF6dbFG6Or2K11nB-YHWZ9T2nLHDDrN23aWtI6k95Vu2f8LtXIb8OUt-fAfWQtkc0bCEhAoIwZhTvZ9tLqBpTm4oomkGhSMT40gVomyfgGl1FX5xt2r0DB6Vg",
                    "types": [
                        "museum",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "30 Rockefeller Plaza, New York, NY 10020, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.758951,
                            "lng": -73.9795189
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.76051758029149,
                                "lng": -73.97801536970849
                            },
                            "southwest": {
                                "lat": 40.7578196197085,
                                "lng": -73.9807133302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "e05462d15e6f301386934e30734e0c6d39636b95",
                    "name": "Top of The Rock",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1280,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/111582420314532905532/photos\">Sergio Tumminello</a>"
                            ],
                            "photo_reference": "CmRaAAAAH5jgCOHh3kq-fRhntSrspnSgmApuP83dhM06w88A6OYLUh8qz9I_NJRDVSVvcVC1YCW9EPx8PyeVvwqWZVsjmsL4b1TP82DoFFUcrwcB2JgislxqemS35hzY5FwrxarQEhC8YKeXdOTtv1nWaaJfuJ08GhSDTAMoM-Q03TfDxz1zLGn0zhHb3w",
                            "width": 1920
                        }
                    ],
                    "place_id": "ChIJe7vKMf9YwokRIMYfDz7iF9o",
                    "rating": 4.7,
                    "reference": "CmRSAAAAYDU8zrq_3OVGdOSHqF_Q2Lyg2pDrcKGwMGylnI3H7XznjRSjPdLohO9dRta95U9U2ukv_Q-WbBuUFi1OaHVRqX8F4OW13NR12jjYuS6RseOXSZNjJPfIEXJVV991y5U0EhDICCtx61tRBmT75Cd3gXf0GhQnBOU0WL05ZPmZL2KYNcxD1AtTOw",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "New York, NY, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7828647,
                            "lng": -73.9653551
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.81804399999999,
                                "lng": -73.9339825
                            },
                            "southwest": {
                                "lat": 40.74734159999999,
                                "lng": -73.9970305
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
                    "id": "c9bcef33f0cc85eda31f1c7444e9b1a3b82c9a9f",
                    "name": "Central Park",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2848,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114158126016582693529/photos\">Jean-Baptiste Jean-Baptiste</a>"
                            ],
                            "photo_reference": "CmRZAAAAGt7rCQWPh0sik2BWniTrGtikgOjzDfRgHYV2FF8bgx1MuFz4jFXWcFx7GSp-j25mU9Z64Xa0uSPJSq-j5f_ui18NURv6vES0yfArC0sd8Wk-OyDi5aCucFBlHpRjSnZpEhBQVWeFR8J7UA-SbNv8hPoYGhRvOFrUFlUxF51g8vLUGac0cjnSzw",
                            "width": 4288
                        }
                    ],
                    "place_id": "ChIJ4zGFAZpYwokRGUGph3Mf37k",
                    "rating": 4.7,
                    "reference": "CmRSAAAAhlGP4HDuIcB5scM4sehdnphe84MokIgXHPp7ElVrrDOiCIfCbMQ08iFTcQlxK1R35RtnjMOolTr99Sb4jvyjY_h4c85fTsmYmr2Sq2oOkRSTMTRqginc3VAujqP0-OtfEhAdvB1Jb0A0bGhlu2CHfBCxGhR6n5tIwUWc5ufTBy6xx30vixciVQ",
                    "types": [
                        "park",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "1260 6th Ave, New York, NY 10020, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.75997599999999,
                            "lng": -73.9799772
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7612802802915,
                                "lng": -73.97879046970849
                            },
                            "southwest": {
                                "lat": 40.7585823197085,
                                "lng": -73.9814884302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "89dd7f0c82efc14f18954f8abf2925515037927a",
                    "name": "Radio City Music Hall",
                    "photos": [
                        {
                            "height": 1200,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/111235470750488528791/photos\">Mike Somerset</a>"
                            ],
                            "photo_reference": "CmRaAAAA00fzt2Vru8VGGNP3QXaN6BCYBlge60FopHzhkPdKVoE2mRenLGkjmhZlMgWrvwHHvJZEq3QTU7Dl8SHz-wKWIisLgD6NzhGaev2ceSij3yB0SOStzuW0TU3coi13UKUjEhCjCPYTJcxitMYTqZh0N9CAGhRHVxgJDbpYqMXxqmDU-T4_PHHGgg",
                            "width": 1600
                        }
                    ],
                    "place_id": "ChIJPS8b1vhYwokRldqq2YHmxJI",
                    "rating": 4.3,
                    "reference": "CmRSAAAA88rBgGDduqg7QeXY2LNLgHAouoOwSsxKvH5VrxIVx7ZJcdl6xTfz9XfXKqgcUT6HA3B4Wa-KlVGe4Ckis0dXPVdsKuvoheyCk74blDqIuwW6702nNpQjmy9s7mHP-ro8EhDur455KAmV10fAOLJc-tAsGhREq2kEL0emIBkILMRRnceaP6nmOw",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "5th Ave, New York, NY 10022, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7584653,
                            "lng": -73.97599269999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.75987823029149,
                                "lng": -73.97453295
                            },
                            "southwest": {
                                "lat": 40.7571802697085,
                                "lng": -73.97777435
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
                    "id": "acf24f96362bdabb64807f6c17cba8bb1d5b738a",
                    "name": "St. Patrick's Cathedral",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1150,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/109259847616931570223/photos\">Iljoo Lee</a>"
                            ],
                            "photo_reference": "CmRaAAAAQYvSyIX979z3g6tm9nCFEOkqGOb_BIi8yOKTZCbA5YhPKog4WeHKjPDLtEYzIcKzrnaZZr1Vu9suw5kSQ_nVtApGWtGqrrvjFfflxrBJ3LIs2Cb-AqeIV2ohcUgEPkxEEhDexQdJgqJiuSqEk_ccS50yGhTbYgW8rxqmK0MhzVgdj-Iqoj6PWw",
                            "width": 863
                        }
                    ],
                    "place_id": "ChIJUW4vEPxYwokRW6o24DU0YIg",
                    "price_level": 0,
                    "rating": 4.6,
                    "reference": "CmRSAAAA_UbP_1L1soGhTZE8X3taoqYJCxzbj5cCBWBurNSN70MmDPk_OorVAXpxysWSCkhtNjUPOFOLqH3OVuUbnhindzeK7jFZhJoTs5lcOIr-FVHAV-oUzf7sTL66tnPEBywNEhDPwNazVl_M36OlTxviPvU-GhQWZkHifzrMt4QF9FqbpPS5gfsBLQ",
                    "types": [
                        "church",
                        "place_of_worship",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "285 Fulton St, New York, NY 10006, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7133444,
                            "lng": -74.0133677
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7143633302915,
                                "lng": -74.01215566970848
                            },
                            "southwest": {
                                "lat": 40.71166536970851,
                                "lng": -74.0148536302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "48cd459142d91a750ab1ac00141e799d2a7c1bfb",
                    "name": "One World Observatory",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2448,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/116088260092237923598/photos\">Dani Rojo Gama</a>"
                            ],
                            "photo_reference": "CmRaAAAA5j9qKXjpOZFYyiL-fM62YF7PvMTH2OcRBaz7741EkGRVx7BtvNb6E2SMA49Q6tPzpAgPvxqTtrBBdOIHMguRnqpCVC5-1qOyA8czRBQ-NxsKZsrDJ-qL_I98NWLzZ3pEEhAdNQFWIQmmSuKPXNIP33phGhRYVoF0GV88BspdervEQMVJvJsN_w",
                            "width": 3264
                        }
                    ],
                    "place_id": "ChIJTWE_0BtawokRVJNGH5RS448",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRSAAAA7xWkVdJhlJe3eh3lfHWq_LlHVcaPEoA0qNQJQwnwW6LWlBmtbkQ0acQ8qBz5T3wSv8DvH8-7u1oLwdcR_LStFTO4n_SnTAVg5WQ9tA9loO_iKM_6dwvgq3TktHp53QSREhDMF6ax3J1k-aHttcZjwWOmGhRkfZ_BJSZecQajYfan1rYx4FpY_Q",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                }
            ],
            "status": "OK"
        },
        "hotels": {
            "html_attributions": [],
            "next_page_token": "CoQC9gAAAKgEX8vQ0If1v0ULCHG28FY63UoehPCDNXQNywXuVvLlWOxSaxALvXEigK95ilOhcmnqy2FyyjVaMkuj_Q_Y9vxEJRePeTffYFPZwvE_mdM9UGDIulY_BiOdINKpjD67MeNEtenTx9Qc9RSfAGha0dmSkqStFwtmHiFjAiDbrmfdAT46bB51Rm8IK9-zKhmALHKVUfKV7T_YBO3y06WGdHpFIA8DMLOr4Z_1PyFxTOXbs0A2KfoKPtOKfs--6vERJjIi93rV0cHCGCoZhgLoiCDvLiL8OuAFyJK75vbeL5Ag51jqrFvAjOryUUE9fvyd6eR-FNWL2nSjg5ixcZA9rgsSELmrZaMDQpqrgHS54H29sboaFB80D2p6uSzB6YxgBscH9I9_zVNr",
            "results": [
                {
                    "formatted_address": "28 East 63rd Street, at Madison Ave, New York, NY 10065, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7657089,
                            "lng": -73.9692386
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7670578802915,
                                "lng": -73.96788961970849
                            },
                            "southwest": {
                                "lat": 40.7643599197085,
                                "lng": -73.9705875802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "c688e55a6b1383b9bb4bceecfcfdc1afe384da93",
                    "name": "The Lowell Hotel",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3456,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/109242289716376687889/photos\">The Lowell Hotel</a>"
                            ],
                            "photo_reference": "CmRaAAAAXhRAHwnyQGwgkgRQeEThuncYYEtzi-cZUsZlmhMqa1Sah9IKtE8uuaU0Io6IDLp35svBDbcUUvlHTwEcdwgFs8NOSqTfu6mNQi0sqO7kSMWUD9_u_iyB8TwrV-SrPYbHEhD0rjzCRa3TE0d6SVruGuE1GhQfAtfuUmayAps8v_aj0XFa9KyMYA",
                            "width": 5184
                        }
                    ],
                    "place_id": "ChIJb9nOTe5YwokR5og3CprlOX4",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRRAAAAzgY0_Zgso6rYe-lDDSJemfGs0yAxgyVFbAPowSCdxVcZZVykX1A1ZejQgnihQ1DvSQHtimMszkxNvIBsWAR8PQ8CQgqlH-f-50blxThnkGUEYuKShqVT6A-MhxHTfDSEEhChcOIvsi6SekaT-hJ6qSsqGhQYdT3ieRWNDrjV8fFbQdkVkneIFg",
                    "types": [
                        "lodging",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "130 W 44th St, New York, NY 10036, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.75645919999999,
                            "lng": -73.9845479
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7579083302915,
                                "lng": -73.9831238197085
                            },
                            "southwest": {
                                "lat": 40.7552103697085,
                                "lng": -73.9858217802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "3512b942b934633e89bc74d023fe44112b07d669",
                    "name": "The Henry, a Luxury Collection Hotel, New York City",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1144,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/102410255199938987362/photos\">The Chatwal, a Luxury Collection Hotel, New York City</a>"
                            ],
                            "photo_reference": "CmRaAAAAD-saiR8PUaCG5mc6YfAU0aA6oopg-85v3wIV3vB-ZIPgEIQLJNQDWPlBlXcSxf1oWrRJZEo8qWKC3jeYE_W3C3Rz3WvZ402lrnjoYoRlU9zs5OexnQ8Bhkk8MOr3EPEfEhC5mSqucPDdq9SVfbx147k4GhTIMx_0Yg9-aVngdFediJHqhOu_YQ",
                            "width": 1500
                        }
                    ],
                    "place_id": "ChIJ613balVYwokR2Sd7fEqauZs",
                    "rating": 4.7,
                    "reference": "CmRSAAAAraAAdBy1wXhRU8wJpZT0cxOgC-810-LeeLFTsX9CpPP60bBL95BSbmY_tQn7w9qiPZtkwE-AniGNn-0wFI1fJD1UgJqLclM8Ah1wZQap6vifSAcJmcg_-alPUF_lXVwsEhAxfOMBnAWFFgxVcHMInE_MGhSTEbjHHtqQBGrMy-HUduvq66QaxQ",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "1414 6th Ave, New York, NY 10019, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.764816,
                            "lng": -73.97654
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7662118302915,
                                "lng": -73.9752586197085
                            },
                            "southwest": {
                                "lat": 40.7635138697085,
                                "lng": -73.9779565802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "bb41cfd248100408e7b046ce91596de6390bf930",
                    "name": "1 Hotel Central Park",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1547,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/101250783625777815020/photos\">1 Hotel Central Park</a>"
                            ],
                            "photo_reference": "CmRaAAAA1TzCpFDphXdrLb4VLpfBlGLL8OlitYU_eDWI-h3jH25j0TLwR09b6BlLTA4nhqLWkMCcTXA_m1FtRcCax8mpxQMp5WTiafb92MUSTG-DzpU7_8rjO1dsRipf3REr1AKCEhC8BtmeFr-rBj3533-pY7wJGhTiOeIRkUbSz6vhjl7GueDljXpGDQ",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJHb72rfBYwokRRhrgUWHTlLs",
                    "rating": 4.6,
                    "reference": "CmRSAAAAqK-Q9p43ZLBEGUzIuEVdZnPEm3DHTDggaAxLXLRDbQ06FWpv3E-3Crzc8hxnJUBCQgL4aswsxZno2l4MAv1GVo_DbP1TUZ2NBn7u0Mm2lECcPnrhqwIjRagVmMbQFrdEEhDP9DxZ12tBzFJjrX7RawJtGhRoVAYJV2Tu07pfZuQZo4h3XCGBVA",
                    "types": [
                        "lodging",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "540 Park Ave, New York, NY 10065, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7645047,
                            "lng": -73.96916709999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.76581658029149,
                                "lng": -73.96764696970848
                            },
                            "southwest": {
                                "lat": 40.76311861970849,
                                "lng": -73.9703449302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "545296bbc9cafce15027b1bdb3bed73a969c7797",
                    "name": "Loews Regency New York",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3397,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114212735480305564741/photos\">Loews Regency New York</a>"
                            ],
                            "photo_reference": "CmRaAAAAs3lCOJkox0FGswokNH15C5FDQaOtPw3PFrID8FPPmK4ENFOxNBp8bF-Yp13mbSn-ElAv1KbsSMEqj_W5AZrvFwYcHQQDp6cCNnCqjn2s_er5L2ucswY53pX18wfm4aYpEhCkrhq2tmznxGcyRJ5h_ylZGhTT1laupg4A739Hx4AxW_Ce4ulxhQ",
                            "width": 3715
                        }
                    ],
                    "place_id": "ChIJC0Xwu-9YwokRDQBat_jlgQ4",
                    "rating": 4.4,
                    "reference": "CmRRAAAACloln96dHGDJ3pyVCwR3KMlLSlMXIxCzxfWRREJTA9hzQrCRNXlopcG8JsfVUpddro_R80i6Ox0D78d30ww0GlSVD38P5Dz6QR9iJnjB0dyu7sFBYjUTWwXoP1xoTtM3EhAs2OOH8MluttDKJ3V_XuTCGhQPDoDwUf-UV3XAdN11oWIX_wTjvg",
                    "types": [
                        "bar",
                        "night_club",
                        "spa",
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "63 W 38th St, New York, NY 10018, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7522068,
                            "lng": -73.9853708
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7535063802915,
                                "lng": -73.98406351970849
                            },
                            "southwest": {
                                "lat": 40.7508084197085,
                                "lng": -73.9867614802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "c1b316163824a94cfd4c3f8d2f21e6c04cd130a6",
                    "name": "Refinery Hotel",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2592,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/108826836482178101148/photos\">Emilio Garcia</a>"
                            ],
                            "photo_reference": "CmRaAAAAbeaBdd0I8_d1uE4j3_XfXijHUsF5Xyx4tBiYA9fMO9JNb49XPSZbnGrTn6_4GnKJpjBHmY7Oiz6znumJhXjDOW1ASF2_CZvY5p6xfBxO43KCez0NPmzaTPWzU36pLeePEhA7sBQ5sI9VQJDM9nXa1lCYGhTzfQ_m0InpwsMgnNuf00vpRib59g",
                            "width": 4608
                        }
                    ],
                    "place_id": "ChIJl6r9TqpZwokRqsh-zI3NRs0",
                    "rating": 4.4,
                    "reference": "CmRSAAAAPVMdL6pI0O5Fmm2q44yh35LCA1iCvQz_Qt6Eel28g6bmrrU1UrPBe0juwxea9bgAeRUC8cj1eJ2lByeJXvytAqSrvjzwn-BM4qQzRzK1HcY1c6ZMUfSAZ0aloNAN_ay0EhAqCdlYKGPHjV8Ps4C3KqFnGhTs1O11YFgkho3qWsUEHMHoCnrfCw",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "2 E 61st St, New York, NY 10065, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7652431,
                            "lng": -73.972003
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.76658928029151,
                                "lng": -73.97058721970849
                            },
                            "southwest": {
                                "lat": 40.76389131970851,
                                "lng": -73.9732851802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "2c4ac10fc7d6efa48fce6e07580729b86241739f",
                    "name": "The Pierre, A Taj Hotel, New York",
                    "photos": [
                        {
                            "height": 1372,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103795444667262596243/photos\">The Pierre, A Taj Hotel, New York</a>"
                            ],
                            "photo_reference": "CmRaAAAAed4DdRbJ65nLdny1KzBt82CYHotJOQGsnUxbRI3g7Oc8nQLki_USX1hMX3_F1pDdxsA4Hpp-AohCeCvBR7Z_s6Qr50ynnH_P-PdvThoOsT8h8PG1_saPWWJb5zRMRzWCEhCqkNUXRutH1yvapi0TYOSOGhTytAndkpPdal_D8LLShOYIbSvwjw",
                            "width": 1365
                        }
                    ],
                    "place_id": "ChIJBxesOvBYwokR519Koj1ulDY",
                    "rating": 4.6,
                    "reference": "CmRRAAAADgt0__1MVkRjVVbUTCYlcSgLIeRh5NLc3csLx_dcmhn8mquYKUsNKVjRdxiRoKPCNwBT04gHHJEhevXwM4FzQE71JLuM1d2XbgEhnCpW6UE9ZbwbnLWppnR5SRBN7csREhC4FT1AHqiuslDqsl5_otiwGhRicUD7wi3MsgGs9k5AwrbW3jgaFA",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "79 Crosby St, New York, NY 10012, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7230126,
                            "lng": -73.997417
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7244160802915,
                                "lng": -73.9961563197085
                            },
                            "southwest": {
                                "lat": 40.7217181197085,
                                "lng": -73.99885428029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "ea50675441b2417f2c6eb94893e19fe5d6083e77",
                    "name": "Crosby Street Hotel",
                    "photos": [
                        {
                            "height": 3024,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107359684834766993542/photos\">Thomas Julin</a>"
                            ],
                            "photo_reference": "CmRaAAAAj8SXySU6JJcFBVtYSuXIy4Jj-cDbPnPBh46bvrou4QIQHPvFMZy0GMXu8CZUVp2l_g-hioSXXFdVb5XfmwEBK1H1uojLBtZW1BFwhwrZ7apmizTZ9sHH2bglCX5YiWWmEhCspT8RR4WsJ3b_J8frk2yiGhTI5bcCVCZ-4Zq7ynMdlzVekGHlxg",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJpYIgKY9ZwokRMt2wXGRZ1fg",
                    "rating": 4.6,
                    "reference": "CmRSAAAAD9ymq0b04d4BPoHeG4AZe1uUX2OAKYdlagyQJaLC50lzzAfhr6dOOUeK4-M0GQT4641nCYnvFEUyLVqYfwHdqNjptGwYOjdgLjVQdYZLrr0Rxpel-aR662uase8NSbF1EhCzTRvuX8E7Sd-6oNO9CR1uGhQYOh2eSVPlUXv9uUn_Jr7g9LvELQ",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "28 W 53rd St, New York, NY 10019, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7608918,
                            "lng": -73.9774011
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7623123302915,
                                "lng": -73.97599961970849
                            },
                            "southwest": {
                                "lat": 40.7596143697085,
                                "lng": -73.97869758029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "93ddd9711135ba466a4b1f3a9553a3d9103dcb5f",
                    "name": "Baccarat Hotel & Residences New York",
                    "photos": [
                        {
                            "height": 1327,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/102738290005557096512/photos\">Baccarat Hotel &amp; Residences New York</a>"
                            ],
                            "photo_reference": "CmRaAAAA3YZ3GFq-XTQB_s5HP6NJAAQlzPrKv7TG1byJ4Wrl4hIm6BZ56ywNwXaEt6WHnmifYzp5RaRzhELz8ZrfOSmCW7hG1tNNOrJa7_CKkellN7orFrpCAOty2aqC9l2_sbWbEhB4uN5XB9yDOqXct1fqsYYmGhT-G1zbl-w92SYfgmBWaLTOOMMs0g",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJi0E5YvlYwokRp4w4kH4Av-A",
                    "rating": 4.6,
                    "reference": "CmRSAAAA98bDYp2y4Z82Ri0jJ_erRQlFEV0JtBh1w1HpJZcstyQLZMzJzEsWZMcwLKspp-4aJUxJdYKdRcve9wntsw0C7fXOl8vd7YunDD6TLQgDVMoetAhTRM4WPBrdUhuCUYx-EhCnk52JmBBup9I0-VGMHHlCGhTrH8UkzN7vAd-YFIt9A526ZOgm9A",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "153 W 57th St, New York, NY 10019, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7653771,
                            "lng": -73.97907219999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7666283302915,
                                "lng": -73.97777731970848
                            },
                            "southwest": {
                                "lat": 40.7639303697085,
                                "lng": -73.9804752802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "96226aa2bdc8961eec42c1ef5df5661446e9eea1",
                    "name": "Park Hyatt New York",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3080,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/108334015335617733618/photos\">Jimmy Sylakowski</a>"
                            ],
                            "photo_reference": "CmRaAAAAcB9vVBW08nppguDiswSpQHQysCJ95-fQhv4NIdyRK07hOWQTB-qe1O-DBjcUVeASdr6CCO1OUJ-2TWgx-nzhex2mqo3bKIaPAHI3QT0JjQeIlxbJvv0kPncTteXcMiM0EhAOWkbBXaQ-TQ6TPHKp6IK3GhSiTQNgMV1sWREIodQNCjpabmzJ4Q",
                            "width": 5472
                        }
                    ],
                    "place_id": "ChIJpQr2a_dYwokRoYDzhaXxroc",
                    "rating": 4.7,
                    "reference": "CmRSAAAAGBrT2QsYxAq0ODuVrHl2GgkUqzzND4iebupnckAIYvgdCECIvXbqjoH8GAW9Rd82VLr4FkJZWPBPchEoRNzrBR1XlMYC928d4Bedw8l2nTToRjx6F_hyb5WgJ4d3z_iJEhBZrWxz5NylVvdUh-5xPJPcGhQc4YgY5NXDZ1s2BajQlk5Djxm5Xg",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "455 Madison Ave, New York, NY 10022, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.75801999999999,
                            "lng": -73.9749775
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7591687302915,
                                "lng": -73.97365336970849
                            },
                            "southwest": {
                                "lat": 40.7564707697085,
                                "lng": -73.9763513302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "6f58d9b4a4f4148ec3ae34f5fcbf609c53de78d7",
                    "name": "Lotte New York Palace",
                    "photos": [
                        {
                            "height": 3024,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/117650888548196368054/photos\">Vijay Sondhi</a>"
                            ],
                            "photo_reference": "CmRaAAAAvJ3G586ZDFs8_Mt81eMsvIras1WMRWVD_UuNLLNFEQRs_KidguSbtvC02kZbW29WN-MYq7FCdwmjXXtmxw384dbGdURur7AHho740fkt9SqFihsp9DfjSwGi2hdwfiqbEhB2MDWOEu4sH10dP4vxTND8GhQcSLUmNQY4SCBIN0bHcqxNFX5Gcw",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJu6kY43RawokRnmczCmSH-_s",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRSAAAALqPH818Ds03ARELzxr4JEfUy-HLoRYU0bGf-gF0VpZpwEYaTmRRK_h1Oe7_rp40xFxxEzszwbOaD2wP2kiYTDOR-KHfZZ_MFT_KUSZXOX36L75Q4AnD2qDxAUB5RkzydEhCrnheIRJIhsGADoDSa9aslGhQNaEefH60gK3-fGOH5f9p-pJ0KFg",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "2 E 55th St, New York, NY 10022, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7614222,
                            "lng": -73.9747694
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7627912302915,
                                "lng": -73.97326366970849
                            },
                            "southwest": {
                                "lat": 40.7600932697085,
                                "lng": -73.97596163029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "4043ee03ff77910e3ed2c1370ae6ef45452451d2",
                    "name": "The St. Regis New York",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1500,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/100682632239373146271/photos\">The St. Regis New York</a>"
                            ],
                            "photo_reference": "CmRaAAAA7xy1ru4yK5GN-CEl7bpuS-yCozLVEOUgRBrYSrKmMidqrcv6Yq3rpKA4QbCXYc4gl5WfQwRTYX7Os47J0h_grETetEuPS-T4y6iZmUZioZ80Gx4s0Wdcf6pLzj6ARpYgEhAidcZj96REOKH-bPO4DocdGhRkma_vqF004II678EFPk2E83U36Q",
                            "width": 1027
                        }
                    ],
                    "place_id": "ChIJT_kaUvpYwokRJ-Sl4G4kZ_Q",
                    "rating": 4.6,
                    "reference": "CmRSAAAAUvnUOq3FtBs_Ys6Zg0Ms8Hvesxr0ppvL0O5sh6W4NJ9yRhNggv9oc8TBGAPqX5ytbGHHw0Te_DVtktr63TsGinnOgznSFyb9RhPTwNSq4LUW46FlwZPTlvI-MQRzFzHjEhDhy5CFNxAzNRwDycZwBjrHGhQdFqOYN2zoeRIHNshZZGPBXqIM9Q",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "299 Madison Ave, New York, NY 10017, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7521911,
                            "lng": -73.97949470000002
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7534640802915,
                                "lng": -73.97828001970849
                            },
                            "southwest": {
                                "lat": 40.7507661197085,
                                "lng": -73.9809779802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "1f856665787bb91f06790cb5ecfca0bc94ad9ab5",
                    "name": "Library Hotel",
                    "photos": [
                        {
                            "height": 700,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105494787689478068331/photos\">Library Hotel</a>"
                            ],
                            "photo_reference": "CmRaAAAA4j4k4ec-q7A8DgrN6ZXX8MfiGWfT7UPPv1GPCzgleFKZMj96e8kYpaK8MOxTe_07fiYgmxIvqNAzgIjWLbuUD4dBn5F1Jm-7M8nXQv96YSbe4XG5Kn9P18VqIapHkUjAEhA1Q3QWdEk018OXQL7Apsa0GhTZpa_1PJmoUGQPQpBsxiQ7rpfC6A",
                            "width": 542
                        }
                    ],
                    "place_id": "ChIJebujAAFZwokRKeKF6sJ0lNQ",
                    "rating": 4.5,
                    "reference": "CmRSAAAAn18MDqGAyWa6kI-pvrUYsfrH01cqBVK_iB04-RF4rS-V88jrfwk8Kg9Jy4ACEu2IeMzxwMK4vshzHjcHqMkpriBzL5x55DtE9Xk8V5AEqOZXm9bCj6PBScxxEkjbh8STEhDs25dhHyRbNpJxTnwlCybIGhQwrSRcQuB-OoMCXT-yTsNF1M7ESA",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "80 Columbus Cir, New York, NY 10023, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7688844,
                            "lng": -73.98304399999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.77044403029149,
                                "lng": -73.98159596970851
                            },
                            "southwest": {
                                "lat": 40.7677460697085,
                                "lng": -73.98429393029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "c561b4b600e0038648deeb1ebc1e2d2a343986bc",
                    "name": "Mandarin Oriental, New York",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 467,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107750642314223413387/photos\">Mandarin Oriental, New York</a>"
                            ],
                            "photo_reference": "CmRaAAAAN3fKBRkLmZeauaMU48bvc-BC6omQt6sl4cVQ4CBi32Rw3vvN1Xum0nJn6FbEvHy3mr-1Lh86TKGW4xejx3KmsfA1jalbRZHXtT5kJpQ7u2CMsKAgpss5m7Xu09DKPlCnEhA421F2koN_OYLOg2hW-9OxGhT1qf3lKeco5MnGDVPRDBeox0e7nQ",
                            "width": 700
                        }
                    ],
                    "place_id": "ChIJL83lHfZYwokRnd7wA8PLD1E",
                    "price_level": 4,
                    "rating": 4.4,
                    "reference": "CmRRAAAAlHhPvxT7s2nQJEWi5k-xrNVD3tjm0i5YxF9NhfVq64vaf3teE4eyfvW-Q5iOfeTf96Qo_bd607xiRZklM_I2Q4zyLZdwZLjlo7f4-JgOPmnh--Sh8Za5GkwzKOVq1brREhBpwJWXaA9eXLQ50gL4Y5iRGhSkiyH-kZadTmhog3mII_Ran_HeSA",
                    "types": [
                        "spa",
                        "lodging",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "1170 Broadway, New York, NY 10001, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7449631,
                            "lng": -73.98854930000002
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7463378802915,
                                "lng": -73.98733511970849
                            },
                            "southwest": {
                                "lat": 40.7436399197085,
                                "lng": -73.99003308029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "c6c24f6061f4f2267fe7b70a5406bfaf7771248c",
                    "name": "The Nomad Hotel",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 866,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/106766407137652164568/photos\">The Nomad Hotel</a>"
                            ],
                            "photo_reference": "CmRaAAAAnre1OIUz_osNGquRt6zjnVQzUJvM_d2W_sxAzA8k4Fbw7aBeBI_aavwYfmjXkLW07CP9JjfvszQMSkmhZhEk0E_TxsfzKqB_fN4HNyeUNd-oFPUeu0-XMS_CP6mCdZAhEhDvMc9S16cpi7EBOdZnSN1FGhQlwECc08VXn0xdlV1_1wv4xe88mg",
                            "width": 867
                        }
                    ],
                    "place_id": "ChIJ-eorCqZZwokRU-91WeuBj6w",
                    "rating": 4.6,
                    "reference": "CmRSAAAAm7pY1ew0--GZ3vuFls1LGuej5JFa4Rs7FJNnv9nK-3VmMqpEXfVzNc54oHcMAjpwVh18LmsjUoDY1OOMmvpkqA4CIVwuF8vHXQVkpb1jAsav0Le-20XTIK9quWYESUsBEhBxRrxb1rjnDGZqFb-LJAVAGhRGjKnkwwSsB38YoYGc_QOacL8Amw",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "27 Barclay St, New York, NY 10007, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7124701,
                            "lng": -74.00908559999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.71383068029149,
                                "lng": -74.0077273197085
                            },
                            "southwest": {
                                "lat": 40.7111327197085,
                                "lng": -74.0104252802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "56ac081281eb9d58541dbfb75b45173d35b0590f",
                    "name": "Four Seasons Hotel New York Downtown",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 5312,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105675882692320109205/photos\">Maria Cona</a>"
                            ],
                            "photo_reference": "CmRaAAAAE2_zakfW7uthZTni0o53-LlVqYZgE-b2OLjxzSwlbkPY-aoafOpE-pGEzfTX39gt7CA40jxwCtK7Q8KLBZWh7d2nezDyxHOMHxwRq327AypbihdhCmBlUfbuuZ2nLRoiEhDZ-52sLduHbNPI7JFfrVK6GhR1wtaG6cFx51GNoFGmmDPt9idTFQ",
                            "width": 2988
                        }
                    ],
                    "place_id": "ChIJiz9V4xhawokRorqq7eXaNxM",
                    "rating": 4.6,
                    "reference": "CmRRAAAAnyPnarPVv0EgTM-UGd_2w46ncPe1w9CMj3Yd7a08-2PvX7shTp3LHYszSRf2G8b_Mud865HXkxHKe4xHV0nzCgjd9reEM3ntOL_LU5Tm29bCwAJXEyW3BNziWoDjFFmWEhBvfw9pIZyfW1abmMH1q_UcGhQOemD3IZc5r469jZri0t9bCytdYQ",
                    "types": [
                        "spa",
                        "lodging",
                        "health",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "123 Nassau St, New York, NY 10038, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.71123350000001,
                            "lng": -74.006745
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.71253403029149,
                                "lng": -74.00533491970849
                            },
                            "southwest": {
                                "lat": 40.70983606970849,
                                "lng": -74.0080328802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "36f91933da11e021d389793d2a9f1abfdf2434ca",
                    "name": "The Beekman, a Thompson Hotel",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3779,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/100637454022597038865/photos\">The Beekman, a Thompson Hotel</a>"
                            ],
                            "photo_reference": "CmRaAAAAZT6HL4Hvuph08OADgi1Z5uc3tO7JOF0zj6_mGHm2CsvG87toDq3740LWE32EYNj4KxVMYllw5B-MUktP0juL9KWNQGTHM5O_jHcTWF_qQiK2A7S8Q1kmtbLcjqZoK50vEhC0SE_XrdKkpgZMgdQlUdapGhQ-ahbPF_4IyhQrDXzzpAC0km7sNw",
                            "width": 3024
                        }
                    ],
                    "place_id": "ChIJq6r-exhawokRKgBzzPkn57U",
                    "rating": 4.6,
                    "reference": "CmRSAAAANf43vKdRfxjTbE8xThWtp_imOY5PkNfhOFZE6yZHJR-WgGlVm3Ghjne3ejw_4FwWlLMT6hh_JeqZIdLYcpbOVWjQBRDSWoqrDHiiRL22Hr1eL8i99YAVzJkZJqG6-3i8EhBQ_dWcpDrR3p46t7fW4W9cGhTOeHVay_0973aOJd0ubOsDHupQ-g",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "414 W 46th St, New York, NY 10036, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.761291,
                            "lng": -73.991736
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.76267783029149,
                                "lng": -73.99035576970849
                            },
                            "southwest": {
                                "lat": 40.75997986970849,
                                "lng": -73.9930537302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "453a14393e69abc039312d4ba71d86165f660ffe",
                    "name": "414 Hotel",
                    "photos": [
                        {
                            "height": 2048,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114986206626718888907/photos\">414 Hotel</a>"
                            ],
                            "photo_reference": "CmRaAAAAteavbJxBJQJhqZOwwCNM1m9XVkhWQkC2Q6Q__8Gq0zXNEGuaIbq9Ub6YUq478KPlmgGExTWwYavJg0spgDfv2kBrAQmZVc9TZLmG8UIf8bSsuuCPCNIawQq8YwIQqdRFEhBqPyCNDUtxmJxOyQxD1spdGhRarRMKhtyp_g_XoZo6ptko0GTBBQ",
                            "width": 1441
                        }
                    ],
                    "place_id": "ChIJhwBD1VNYwokR7eKcshuz914",
                    "rating": 4.7,
                    "reference": "CmRRAAAArX3Eyz4Kh08VjfIXTLk3Pa1oZv-qgonrEebQjF2vi0tkYkhX1rA5F-xg6hr7Sn_kmqLlQ3jI5xqMe4DYdKJJEoobtShH832_an0ieJKT23NqQZ76ParYswO4FUHtoOKbEhDNWz7NSjhd6fpSZi0xf7e_GhQyMM2X8RKXP7lCygJ_JCE5UZEXPw",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "218 W 50th St, New York, NY 10019, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7615112,
                            "lng": -73.98495249999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7629785302915,
                                "lng": -73.9835366697085
                            },
                            "southwest": {
                                "lat": 40.7602805697085,
                                "lng": -73.9862346302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "6a56d64e141b69d2d6727d6bb41e92e52ca16eeb",
                    "name": "citizenM New York Times Square hotel",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1365,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114246030817058217396/photos\">citizenM New York Times Square hotel</a>"
                            ],
                            "photo_reference": "CmRaAAAAome5JlSttxkO04TjC1oZsgflE6j-JWBKEf9zkRdVPy_q_Uo9lAFkkcxVh8_23nBUksYhc5l1aNr9MzL1JYf5jHkfM2EjtMhu31Ke_YK6VUQ30wIHeqMsiUWOBrILjs85EhCqWcw2JOG5Rk9Ub53BSjffGhSU-sy1r-8GRYROOu2yzUpkFaE0nQ",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJD7NlQVZYwokRUIDluhjtu94",
                    "rating": 4.7,
                    "reference": "CmRSAAAAQGQ6biXrMJKnNTcZrBSAoOmjjo80zc3uPXSzCgHcoT6Es0qv0H54eHgma2dWGnctYhFPMlGs4Cm9iOttev-4dxa51jjwp9qm34qgr-FpvhBjbBA5x8Njjak8WhfRIvXwEhDDqdCI8JsV1G9D0AlNu_lfGhSkDo83zbfNVvWYZgZ7QMgX2nFl5Q",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "25 E 77th St, New York, NY 10075, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7752738,
                            "lng": -73.96339429999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7765727302915,
                                "lng": -73.96208236970848
                            },
                            "southwest": {
                                "lat": 40.77387476970851,
                                "lng": -73.96478033029149
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "b763e7f0f6ebbb322baf797ca8bd88c4fd04c674",
                    "name": "The Mark",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 864,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/104489417862747578827/photos\">The Mark</a>"
                            ],
                            "photo_reference": "CmRaAAAAQiR-I9t037XulZq1wFhaCVBJOpdIcymmr8kVz6fe7BwjtHcXNzxTCwRkEH9xMOSXTjcCutDtw9k-xsN3SSyvSY81Vk1UB8ddG_Ubcyqql72lCBJXofterNT64Dra9RVSEhChAsP7-go3CMqp7XusO36cGhQRhIcLqOrC_N5i99FgAmXSmzYtKg",
                            "width": 865
                        }
                    ],
                    "place_id": "ChIJXYOiRJRYwokRm1i3c9R6WDA",
                    "rating": 4.5,
                    "reference": "CmRRAAAAjwnOmvV1wJTJdO0ByCyEFdfm9MmQVyhAKdJ_X9gH7FaDH-z6m4ZSuTxubAxIQhhw8xDPGXBVdhIePS62N_qT0uLwkBthxqSPi5bRmcmXR3Bu-XziJn_3quyYwPIXAbxxEhAtW-Wti7sMyEmC33gq823JGhSvkUKIVHC4qevDclK3lRg51aEfzg",
                    "types": [
                        "lodging",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "152 W 51st St, New York, NY 10019, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7614289,
                            "lng": -73.982458
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7628723802915,
                                "lng": -73.98116736970849
                            },
                            "southwest": {
                                "lat": 40.7601744197085,
                                "lng": -73.98386533029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "ecde55dbed8632de25e6ccaa839f2818c1a4063f",
                    "name": "The Michelangelo",
                    "photos": [
                        {
                            "height": 508,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/116054554057797543543/photos\">The Michelangelo</a>"
                            ],
                            "photo_reference": "CmRaAAAAi8XERHMy4waXszkXyGMXey0M9MhlMMHKdo2ZDKOFF2SYzqncInKoeUElEMDGoUAMnic6W4JkdPvCO7LFcZVo1v4zDwlvA7FJoZ_J6n9nuoO8vmoaQ0RDr2aGTFquykFGEhAsD6L21yvTB_nqjmqxQEO3GhR_0PPPdRboKi1Xe8GTwKmlifVQUw",
                            "width": 507
                        }
                    ],
                    "place_id": "ChIJb2q-m_hYwokRFLZdzzJP3mo",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRRAAAAVJ7lOv469ZS95mX_UC2BtgfHOvUIEQ4TcKAbE_yQhzEgP3B31uR5mzyhEDaSDAMsWXty5QAqtNNqrRMg4VZe2JCla0Fv-5EdMiws4W9vcrL8r3u5fikasjeECM6i3f1REhBCcVd9qMQhUUyaO6albm-vGhTpPhMNnFVdKfYAScUUCYkksghMQw",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                }
            ],
            "status": "OK"
        },
        "restaurants": {
            "html_attributions": [],
            "next_page_token": "CoQC-wAAAIY85MQlZIUpuXKuo_3omQMR8Nqf0ME7bqNc7G8FK84t_aMBQELOWylmLlbGXjRHOg37TAhZ5UmTbeSOWFfXG_xNRgu60vlkwAbWK1Osj3pWxTvd9kHvXYp8nezL0I0lpbhy7s7Cf9JRRyRDmfDcoE-qZK2kT1QFAYXhA3gBauCI6dd-I6mGXMVhKDOJTO2BjgiqeHtZ5lAall31-8DAkYQNnuvsPgsVNbyBMvjqNzkmoNnO8iaViwg3ULSTcc0bbpzK98y4Aw5mMhowyz3HXz4WyytYylqAG-9W95DCxeAsOBvmRppMbuZi44t-P7gWTcqJm1sPLlGyDs5Rhc4-uCwSEBKQhGgSgODwFhhvfLKgaZsaFJ4dwEgppUFA3JkComfAN2KI5b_B",
            "results": [
                {
                    "formatted_address": "1064 Madison Ave, New York, NY 10028, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.777365,
                            "lng": -73.9616659
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7786649302915,
                                "lng": -73.9601981197085
                            },
                            "southwest": {
                                "lat": 40.7759669697085,
                                "lng": -73.9628960802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "0d64df0c84acb57aa64c715ca9db61c921f885a9",
                    "name": "E.A.T.",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107476303447076480406/photos\">Renée Avallone</a>"
                            ],
                            "photo_reference": "CmRZAAAAFpy8g8vCbLL8dbTRyPBxigxYK_UC3I3OWqgQrrSwXvLPzdibSmMG84E8mYmWtm-CSG8Idc63uu9p4GPjf7yULhIcejgx5JvkPCaJ753es_oQ3B5EDJH0w78MWjPoOjAGEhBdmDCe5FCDq0GPdlvqg12FGhSusa7Rb_qLYjyvuU9JObKUASu5fQ",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJ8aQDcJZYwokRyPVIfqjkazY",
                    "price_level": 2,
                    "rating": 3.2,
                    "reference": "CmRRAAAAnevpPr28mhTbG4fCQa0QQUkHt6yWKpifbb1hjm6KUwoq98LR8dMz21I-6RjqlrdZiVQGtFu0Gyq6fzukXNIVtIxg2aLIa1SbFy314hLUxqI6UTWtJx3Rli2jklqybl8hEhBhKqKualZlpJ8TP0IvMfsiGhTdXxBgsUTn20pzdEFFpZ9S9yG5gg",
                    "types": [
                        "cafe",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "42 E 20th St, New York, NY 10003, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7384555,
                            "lng": -73.98850639999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.73987218029151,
                                "lng": -73.98709791970848
                            },
                            "southwest": {
                                "lat": 40.73717421970851,
                                "lng": -73.9897958802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "1f003ef829cecac6974e677cd495b3aa9d54594e",
                    "name": "Andrew Tavern",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 850,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114166979717103053811/photos\">Gramercy Tavern</a>"
                            ],
                            "photo_reference": "CmRaAAAAPIKYaFBLHtq_WSC9smllrPefuu5iOPvn6i7XcRrbvHZEq3fq37SUe7YACMbcL1YZ193LIKZATL7TIsyMFdIfLHR7tfqrlmSVqv-6fd9vzv8v8z3RXCBsEt1JuM_RIB-lEhD1Ch0d6p5oK6XilVBIwWHlGhSCn78LWIKGiiNb73PLw9UlmgOIfQ",
                            "width": 851
                        }
                    ],
                    "place_id": "ChIJvSQIgqFZwokRFYQbJdzceSs",
                    "price_level": 4,
                    "rating": 4.6,
                    "reference": "CmRRAAAA4KgJXOg5FPU8nb_OqGp7gmWaTb2W4oABsA0VjmgNN4eCoFNs25XsPHRAf4WxQ6PXdYdoX2x7UoBoi4pkf7hEqXxIbgrCSCLINBctyHnmsTPCC6kkwJiwju7-GyFaHCGyEhAFyZtj43wcqdYboWofXOkgGhRDdIOHZQ3nMCWQ_W7O9OsB-uzzwA",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "155 W 51st St, New York, NY 10019, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7615691,
                            "lng": -73.98180479999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7627827802915,
                                "lng": -73.98044491970849
                            },
                            "southwest": {
                                "lat": 40.7600848197085,
                                "lng": -73.9831428802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "ad0a76f04ef4567ae3420ffa1881057b1f8180a7",
                    "name": "Le Bernardin",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 640,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103565644244028407440/photos\">World&#39;s Leading Restaurants</a>"
                            ],
                            "photo_reference": "CmRaAAAAKGOCPzEu6Y5IvEFExMlWTNYKYat1-gUENAfc1hkNeoLwf0VtmZTRFIqoXaSlnWmWF0Tv3f6tGLbTS3nR-h7IXm2Mw5uaR--h3k_acHtclZzTGEuuwNncOQHtThZjHIvhEhAB5svKRccO37OoYVXhjcOxGhR7kNNMYBpxsCii1u2ECWEXAy28gg",
                            "width": 960
                        }
                    ],
                    "place_id": "ChIJVSKXkPhYwokRVgXdrRfFxh0",
                    "price_level": 4,
                    "rating": 4.6,
                    "reference": "CmRRAAAANH3jIrtTWs5V-ioGCeXfmAtnCjjAqbnmhlNI3fIZD5JnTZehdUr_k-LnFlrz8gJCZ7NG-pbF228XcXrAo0jCeEoFf8kDZ3JsxF7V4voxR1HORP8qdfRsS5eiEYAJQEziEhCBXghNqLSY2XUXSZnSVkGdGhRGnlUk3H2fNPfC5o8WcdxlGvxcJA",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "60 E 65th St, New York, NY 10065, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.76677379999999,
                            "lng": -73.96760220000002
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.76816568029149,
                                "lng": -73.96620736970851
                            },
                            "southwest": {
                                "lat": 40.7654677197085,
                                "lng": -73.96890533029152
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "0fcae36cae92d503d097a515746e4700e021995a",
                    "name": "Daniel",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1520,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/111192969447456401878/photos\">Daniel</a>"
                            ],
                            "photo_reference": "CmRaAAAAc25U2F-QHN2x5TD5dMAFDswcrEpOPawTDA0CVLvhHADBTei2PEZUSlvkJRI8zXcTjdOIAWWpJfTIlUx2cPcmZGd3Z4xAQtNLFeoptrrldB0dCbiCK6WrxcvRzGjBLRUUEhBhKbK4O22z1njMa2CqAWhuGhR9x7cIc0Qt9quE6ybbYFQM4ySsCw",
                            "width": 1520
                        }
                    ],
                    "place_id": "ChIJ09ZGju5YwokRXOcNC23JRwk",
                    "price_level": 4,
                    "rating": 4.6,
                    "reference": "CmRRAAAAXFNkrU-YuuX-ZparJ7X78fDXsGo2iytVI5iCvJIge7ZPS0qOzo8AQ71NL-WUjW5KkxRBroJ28thR7_Stvl0J17YhAcLxl0OEoWDZkRR7Rbd9OKYcOrdroRhfb4Z4PYrhEhCEGhq7YJBH11b85GMp7_HDGhSmzcejwgJoUBGsHeZuta5ZEkAh_w",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "4th Floor, Time Warner Center, 10 Columbus Cir, New York, NY 10023, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.76822689999999,
                            "lng": -73.9828591
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7695244302915,
                                "lng": -73.98126351970849
                            },
                            "southwest": {
                                "lat": 40.7668264697085,
                                "lng": -73.98396148029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "37c516575be01a32ba25362a2ca116578eca3ef0",
                    "name": "Per Se",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3726,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/113256681836649808083/photos\">Keira Chu</a>"
                            ],
                            "photo_reference": "CmRaAAAAghv_odjFDfGdC61W50DObT6qrT4okSSYqX4bHdwGmtRupHf3oXynNGdNAhRvhOqoTnIyKgf4ALQN8Ol2PWdglflWpByWbbG_yLtfDI8HhYiOD3P9WbSfIKjoB-JI_x82EhBioAnfdfd9nFxdS7BhpVLKGhQ3lRRy6lxvyQUtg_w6-PQCvOK24g",
                            "width": 8520
                        }
                    ],
                    "place_id": "ChIJp3PsL_ZYwokRZYqs_40RJF4",
                    "price_level": 4,
                    "rating": 4.6,
                    "reference": "CmRRAAAAvRHUmI39DILmr5BmMgqrgqMDdp9R-pjfPN3JMlep_PKFcz0dY60l9WlJLeRFhguHnOPuvUlVCVdHdWJyQbYERBM8qlfflge50rC-xpcfj02FXL_7w8pfxZ_4V-DL_CZ7EhBHKZoLkQXdPBkKirBgmXJhGhQI4ImiwPGimJ3yGmSyUhh21P3uGw",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "12 E 12th St, New York, NY 10003, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.734207,
                            "lng": -73.99369899999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7355884802915,
                                "lng": -73.99232571970849
                            },
                            "southwest": {
                                "lat": 40.7328905197085,
                                "lng": -73.99502368029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "343b062c1a8af2bd222c4aedad863f3f91391b0a",
                    "name": "Gotham Bar and Grill",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3024,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105563121448815745365/photos\">Kevin Guzewich</a>"
                            ],
                            "photo_reference": "CmRaAAAAClJCkjdbb677ilV8-5GKTwv4ONvzL_PKAgTSXouMxni_RMROb4LCZwEQqaDRHEnb1pfWyzi7RFZkYnndpvAK7fPX9OXAyPWKPjT9A377FJpmvuciDK9fIoSoFwEd7SNtEhDmSJmmB3RrruSwE3rmD7QFGhRM0nyQU2sbKWnexqFU6wLuG5D6rQ",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJZ72FzplZwokRmcA7CQzDMj0",
                    "price_level": 4,
                    "rating": 4.5,
                    "reference": "CmRRAAAAx9pyQyoaKOy-hqZ9qfpDlfw2t5Y-UvX9WoEG17DXEekEN39S7iC7wiCMlWHFKwxe4FoYNpUyPdMn1eU3Yx1hhNeEbk1VO6fVk8UyOB8alyPDMViwU1dN4fWlLxLpM3xSEhDq8j8JN5tnEqzFdjY14FqFGhTFTut_GDUwg2LDRns35-FEKbGSHw",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Metropolitan Life North Building, 11 Madison Ave, New York, NY 10010, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.741726,
                            "lng": -73.987173
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7429459302915,
                                "lng": -73.98593171970849
                            },
                            "southwest": {
                                "lat": 40.7402479697085,
                                "lng": -73.9886296802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "f758e0d7f68c659682afdb4b1c0749e7d3623839",
                    "name": "Eleven Madison Park",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1200,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/102127816559576392189/photos\">Tammy Liu</a>"
                            ],
                            "photo_reference": "CmRaAAAAhIwh9JJiBdd1oEg6br7zubqVaKYmtzWyEOmaNrexTkAv49FaUwav9BSGE2CaBCE8sbMH_KMrEW1hFepmig89ryHe9ARwlwplPWMBlRpdCxdWjx6u6OvqwMVx7PbVOPzMEhAFFXkQPX_eNpIwxbdea7PcGhQSJR1GzuPyROZU85Msxl2ExnSTKg",
                            "width": 1800
                        }
                    ],
                    "place_id": "ChIJEWbXz6ZZwokRLKmKrtPfVFY",
                    "price_level": 4,
                    "rating": 4.6,
                    "reference": "CmRRAAAAwU8HP7wc71uiJLojolF0dMR8rIap0JmAR0F3eFAmQQNKmmrB0-CmkPgbKnzEEXQtlIzmyxIqNn0liW7MH9nr-EpUgOrZDlAVl23mS5N7WGq3wJhoHaxBr5x8-42rip6tEhAF4dbSQGyslrdYQQSQxcHoGhT3K37xz9EXxfQZwrRD3v7tDgee4g",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "41 W 42nd St, New York, NY 10036, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.754538,
                            "lng": -73.98250279999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.75574133029149,
                                "lng": -73.98125016970847
                            },
                            "southwest": {
                                "lat": 40.7530433697085,
                                "lng": -73.9839481302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "bd46c7f5f2917d7af1352e17cdd3cbb7028eb25d",
                    "name": "Gabriel Kreuther",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1365,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107389134674463250002/photos\">Gabriel Kreuther</a>"
                            ],
                            "photo_reference": "CmRaAAAA4RL8oz3Muy8gzt28LxFJPrN-kfA1urWiJ0B4utckPMNKjLIgS6vrPuMsBfm7NRTOr6SzknfY9hAHNMmU3tUBni1vYLKdDArCtjVDWrlSwlCsHy1qOOFtPcXF_0nvs38aEhBAhE5p4WLN8_60kbO9I1DfGhQusHKofUlerirr3AouHHeWckNZsQ",
                            "width": 1369
                        }
                    ],
                    "place_id": "ChIJw_TGEwBZwokR-zLts543O-4",
                    "price_level": 3,
                    "rating": 4.6,
                    "reference": "CmRSAAAAr26bDqDhu0JhC7XJk2RVQApmfmlw_4QHL8zxf6iWbEOAKk6JJciczZqmy_VvB99ofjg_FvzXp7cxljWMZzsjVJK7gGAmrRlzeutBjwtyEG150xmLy5exq_kKCZrGDQ0kEhA9dR2ZMWVqTEKyWg0YlywLGhTuF9Z0guV0H8tMTWKU8BSlWeRRRA",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "9 W 53rd St, New York, NY 10019, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.761081,
                            "lng": -73.976753
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.76242998029149,
                                "lng": -73.97540401970849
                            },
                            "southwest": {
                                "lat": 40.75973201970849,
                                "lng": -73.97810198029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "804d4d52a0fb7770d8acfe511699538ec5f0958d",
                    "name": "The Modern",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1365,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/100489217038255503401/photos\">The Modern</a>"
                            ],
                            "photo_reference": "CmRaAAAAv6VldtsX12YxPZFvXtCZd1pSrCcr500tEUaDOt5eKMR66eFr9la-o4jQQXUC8z_N8YIBWCEl_o02Xh2RbJqm8LkXJi7docIiCcLa4tnaLRAP0tLJzaXtUWXQIh_Na7PNEhBbCt2iaws0hChY7TVyjUg2GhSNkGoC4aU73e7oEyH_5kw-6S1zHg",
                            "width": 1367
                        }
                    ],
                    "place_id": "ChIJMW-gxPtYwokRzDlnsRgq9rA",
                    "price_level": 4,
                    "rating": 4.5,
                    "reference": "CmRSAAAA4BEWUQFEqYzZsyPIdBLI7Q63g7AGel-MTUz4xAxO8ch0lB8YVYI8nn-jvR7FqWu3ECZYr4fAjfEamE_AvCrP65k04VH74meKbfTCkNAf_G-7TnivPam2C-NRKCyxwJ8CEhAt8uSZG31fXGYoMuzOTENHGhRnPCQZeJBTOpkcOxbeng7u5NClLA",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "47 E Houston St, New York, NY 10012, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.72464129999999,
                            "lng": -73.994739
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.72606958029149,
                                "lng": -73.9933627697085
                            },
                            "southwest": {
                                "lat": 40.72337161970849,
                                "lng": -73.9960607302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "257b24156e15fbabfa39641fe56fa6462605e3cc",
                    "name": "Estela",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 4032,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107231714396617814703/photos\">Ling Li</a>"
                            ],
                            "photo_reference": "CmRaAAAA9D7vf6iCiLL1hjVrfhko7VSBxKb2VbqPRN9Cfcg0xzIEM9YaX_opO_18y1jhu5H2XmbOYpy972o0FVw94V7DPRX_lJqaZdkV4kQ4ur9JzB3YjCk36WHQNnRnFFNWH0q6EhCNxygnPg45d3_YkC-hINMGGhQ8PZ0K7mmQ8q3katbfnAG3VxurxA",
                            "width": 3024
                        }
                    ],
                    "place_id": "ChIJf3f-f4VZwokRcBCEciTOGRQ",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRRAAAAz5BgMlfCw0EeEeOXGD3FJ5wODigXJgSL3SjRvMFWbxW_LKs5dZf2a7dHrJJyADPGVbeeMFbx6Jnj6ROMGFuZI5eHBJthKeENMYs3Jum6P8T7qCBBs-wq-JlhQOZ6mgCoEhDAQIDWZOc6d4-xAN2SKRZcGhSur8CkPThKQw79GFRYrUmp3GsCTQ",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "178 Broadway, Brooklyn, NY 11211, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.709819,
                            "lng": -73.962467
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7112116802915,
                                "lng": -73.9611154697085
                            },
                            "southwest": {
                                "lat": 40.7085137197085,
                                "lng": -73.96381343029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "cc507a5029419584b2061f374000114cd291d84b",
                    "name": "Peter Luger Steak House",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1268,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/112110162861336990395/photos\">Ahmed Allam</a>"
                            ],
                            "photo_reference": "CmRaAAAACl56wcc906ffcaxkcMwkzOzFeKgC-mg0cOKsZgkbkFqo3jtUiNsulJGhWq99PIK74SDq20TP0eqA2mZYzj4Kh7V73LQHSrh6X-_QHCLizx5FPmOWDmPppuwp16LBukZWEhAWZEPwVsaebd4daOtMZ-izGhRuwNZ0tkhsBOgWWaORKMYpIqRK9A",
                            "width": 1242
                        }
                    ],
                    "place_id": "ChIJR_bK295bwokR8gM6QgEdmkY",
                    "price_level": 4,
                    "rating": 4.3,
                    "reference": "CmRRAAAAswEG7wjzjdNpQZdtS2EK6qc7pM60I3reiVpRhR8MTp_Yef6UAI_8L5VuudwPrMvNl-Crpq7ikBCwG6_yImW_BBHUBGcyqvOWp1_Gij0Z_5CFa0u25Nu4Fl1VL9L8FMW5EhA5N4eXqKEZIMkz335kC_i6GhRjrqmKiPWsJ2XwrAi7OKrNcgNfPA",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "240 E 58th St, New York, NY 10022, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7600624,
                            "lng": -73.96556629999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.76150593029149,
                                "lng": -73.9641475697085
                            },
                            "southwest": {
                                "lat": 40.7588079697085,
                                "lng": -73.96684553029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "ec27c4405756c88482516d57ce03739068355b4a",
                    "name": "Club A Steakhouse",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3456,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/102400989400172138580/photos\">Emily Bakaj</a>"
                            ],
                            "photo_reference": "CmRaAAAArSUmhYZElR2cqNh6Ubcj6Km_ey0boOrSsGCKXJZBFsjA8WiCA9Ts0BYzSl1ojN1R1k6H-5Jwq06dFOTonKLcbBatBSiEMaGWsiz1Sxh3--mNqxGK7AieT7ChaJnexwIVEhDWCtN2RwTBjWOifsnv0T8tGhRbsbhLQXGKrdwlfdIULkRUu9tFtA",
                            "width": 4608
                        }
                    ],
                    "place_id": "ChIJhWkA1eVYwokRPKlaxy81SAY",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRRAAAAhOMWjRg8R3K-SHwirrN6Ln4C6CNWl6ICkGWsPP40hxsoIbyCtN6VyU2CCcGV88pIPs77EixD8DstKYXCK43J7QztfgFJC1DIb3WXNy-0R5xlwINSoIUOghM6yWW8kVfDEhDbdHfYjegT4fwCjRoF8BcvGhQX9MW3pVK07cZEsk16Yailc1Omig",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "1241 Amsterdam Ave, New York, NY 10027, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.81004710000001,
                            "lng": -73.9584781
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.81143228029151,
                                "lng": -73.95721536970849
                            },
                            "southwest": {
                                "lat": 40.80873431970851,
                                "lng": -73.9599133302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "b605d46f3011e337f2e75e269bb6b4f8d0853468",
                    "name": "Flat Top",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/108230965180565314385/photos\">Qahtan AL-Jammali</a>"
                            ],
                            "photo_reference": "CmRaAAAAgxC_FNJmaZhkTWYxpYuO2Q3xVAyKPTOWj1aPYQLfK1aE-Raj5ORFaQ_2KwMFG8ahG-LZtuD8PzDXRwtC8A1F1B4d1isMqc8srGplMPoRov3stCTMesuDlGR1wAoHzDkxEhDnJYa_0zFrR6785hIeC8ywGhSdnc8AYS3Z8pwy1U8sjUNZPrkcKA",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJBWhERBX2wokRAkCnvxPY9lw",
                    "price_level": 2,
                    "rating": 4.3,
                    "reference": "CmRRAAAAo4Tz7EEVrnJgwPN7G27dEjWivz-cFvpDgBGDw8nOc2xCg8-8b9NPIvBhFyzLCaOwe7UEsEcJiPiUPXPcUbBfgSwlRRyPly-sdhqkyVba1e5XjBxs8SBXuhkxlHDAqfAeEhBIOIRIGJz460PUrdpNPlfkGhQTnSbbiB_cTetloYQo3r3oqrPmvA",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "127 Orchard St, New York, NY 10002, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7196729,
                            "lng": -73.98968090000001
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7210212802915,
                                "lng": -73.98836696970848
                            },
                            "southwest": {
                                "lat": 40.7183233197085,
                                "lng": -73.9910649302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "688e7118802e5d647427780258d276023ccde055",
                    "name": "Russ & Daughters Cafe",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 360,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/116657897098896826230/photos\">Russ &amp; Daughters Cafe</a>"
                            ],
                            "photo_reference": "CmRaAAAAwIcOD3g2-OCcln3a4h3tLwx8nxiZdKGLO-9tCQwXNOcb6c-pkOlpZTkg70VOviFb1NVJycNydH4RgBMKWBZMupfyyr-vtlLHEjIAq8PjGxEQZXsRp4RqfxoVxcYCNVAhEhC4-mlObpInfB641taStbpOGhQB72UIpK_D9rknObWi2xqDdymoQQ",
                            "width": 357
                        }
                    ],
                    "place_id": "ChIJ53yq2oZZwokRqIHSP4qZT3o",
                    "price_level": 2,
                    "rating": 4.6,
                    "reference": "CmRRAAAAGLA7i_zcGW0WamKdghwkD4J2MF4BoTnO-f2OLMRjEEF2yxq2Vxer-08x8_4j31Ac1qFGoTNpSwyYuc8IBhacVOEOPnxuX3hk3pTDYA2asScYR56cjdmpXHLJzpZQh1u7EhC8NT2ySetXvc_WRZXxG9w9GhTB0YRoL7ZBhYduWlByYKVdeKS3-Q",
                    "types": [
                        "bakery",
                        "restaurant",
                        "food",
                        "store",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "142 Orchard St, New York, NY 10002, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7200208,
                            "lng": -73.9891633
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7213831802915,
                                "lng": -73.9878601697085
                            },
                            "southwest": {
                                "lat": 40.7186852197085,
                                "lng": -73.9905581302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "c067408df4b60282a8b470813e7581b7cfdaceba",
                    "name": "Wildair Food and Wine",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3824,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/110683553841105199970/photos\">Oskar von Hauske</a>"
                            ],
                            "photo_reference": "CmRaAAAAwMHnGJxyLwlu63uEor-Lg2E-wGs4xmQlxlbFdqWGJB6Mwy2J99WMdf6fP74YPkjO4FogyfyGur5bzq5FhQEipP_4qSmCC1YzgdKstMFLc_PRGdHiF-51JdqkjfjF63GPEhD6k7HqV9_N14J4AZIVVJZhGhRTGKpG82AdCEh1QLOogjGmp8wt_w",
                            "width": 2867
                        }
                    ],
                    "place_id": "ChIJfZsx0ClawokRCNMYMdZ_smg",
                    "price_level": 2,
                    "rating": 4.4,
                    "reference": "CmRRAAAAA9ZfUG4f6xofxjRyrZPsv4Bsp635ViWxJSzempWtHuDh5bTdS7lD1g2A9r-tt3YfHZXT-okgjraG4gNsFtgLdFQ1BS27YPs-p-irTrHYPMlzbndWTaVRG3XyY5MeRR_AEhACRVYhcju7lUd3aXYpAvo0GhRrEaTTyxGWmFaoVfQOltvbAFZYEQ",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "35 E 21st St, New York, NY 10010, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7396162,
                            "lng": -73.9883565
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7408515802915,
                                "lng": -73.9870568197085
                            },
                            "southwest": {
                                "lat": 40.7381536197085,
                                "lng": -73.9897547802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "400cd12f069856ace98966a9b6cb1f300b7c66c0",
                    "name": "Cosme",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1296,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105641580144879585384/photos\">Cosme</a>"
                            ],
                            "photo_reference": "CmRaAAAAOHXKcBFxMgMYDvWdCz2CgaK6AiEFQOy12UbNGfE4RTgBUZ0TTZzG3DKIxJRM_vaK-XslPhxyEkiM_FCcAAIZqqbQF5z3pRqMaOpRqw6RKntLwSNPavEn0v9YrGTVkMs-EhBuhOhZtwU-iEgPwXjMamBVGhQOKWgVC7pdWzDQtBW_c0w4RGaifQ",
                            "width": 1296
                        }
                    ],
                    "place_id": "ChIJT-gYZKFZwokR7O8LLYuYMjU",
                    "price_level": 2,
                    "rating": 4.4,
                    "reference": "CmRRAAAATCNJAzaSG7tOXJJkMHcJSTf9MN6RN8WQoyDfmv8yXMgBqtNabIE1-H7GgGs3DBdpUkyoa-0CCMUZwFXIahus00lKfUPMz98xuGEH9-T0lsSDzan7S23LIIYCxtHSBDgGEhDtUMuY4Fa-WJfIbkTSCPblGhRmtT2Y4Yag_cgQiOeSu-GN01_oFw",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "10003, 119 1st Avenue, New York, NY 10003, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.727263,
                            "lng": -73.985845
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7285625802915,
                                "lng": -73.9843767697085
                            },
                            "southwest": {
                                "lat": 40.7258646197085,
                                "lng": -73.98707473029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "084a0fcc749a6625e7b0a5aee103f3ab1d84136c",
                    "name": "Oiji",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1318,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/111173771909374722776/photos\">Oiji</a>"
                            ],
                            "photo_reference": "CmRZAAAAR3G46FJ-QBzpJWKrMK0QrqqzuC_Tbola-Jcrt6HSXEYf4AZ6s8-2zinPCWwPndpjkkTaTArzbLfsjjncIzIyKjh9-WKJLMNVYVw5xTrdGWtk549rSwTy5qPqTx9UMqxMEhBtyyfkLAToTLKdr4Iuk3N2GhRS7o2CJFoX0SzvQJ4V2VKFLVeQog",
                            "width": 1313
                        }
                    ],
                    "place_id": "ChIJ9_VJHp1ZwokRRhe-9rLmBb8",
                    "price_level": 3,
                    "rating": 4.4,
                    "reference": "CmRSAAAAeFK4CCUvR5GwLAFy7pg4b4EPX6zklUqMcgRde_rXxjkVRtiWoRCy3YOFWqP-kqT8xSYvhYFs1iAvlgTTcyR97dwHLlNeIskv0tGHfiaQdarT1_Nn5kSlZiqo9tct5mq6EhCRQBqRsyZCUF1k0uSpNY2rGhTSpd61AANBo-KLPP6avlY0PIVlFw",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "131 Sullivan St, New York, NY 10012, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7264898,
                            "lng": -74.0021771
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7278729302915,
                                "lng": -74.0008660697085
                            },
                            "southwest": {
                                "lat": 40.7251749697085,
                                "lng": -74.0035640302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "f91d4f3c33f0cb773066614d78be838f6ed5eeb9",
                    "name": "The Dutch",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1366,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114365317263368146080/photos\">The Dutch</a>"
                            ],
                            "photo_reference": "CmRaAAAAT_giYIXChwn67p8vXFPfOo4VNryT_2wpnfrzoIrwGm3TjPwcRX7zW5nrSFuP1l9IG3Fq5rrI6aPDr3UOQWonrqVthwGxSYjY6KXsOxRPhurFS6lo98XNbbRODWV4mKd2EhBo2-gyN08yCDIhIADvfPLbGhQB9hNk2pQZPwoZd6GDxq-JeqZ-fw",
                            "width": 1384
                        }
                    ],
                    "place_id": "ChIJ3RB9uI1ZwokRxCJXW-HpYZI",
                    "price_level": 3,
                    "rating": 4.1,
                    "reference": "CmRSAAAArwYUKhvyTOTZuX2b77MSZJJ-89qiLpsZWXYK3hWxqVgdNfzJc9LX7_Nkemg9Dei3g0FvE8yRkL5SXtCzkZSZarI8YI8ld1TtjX1O5POOGo5XfhwAyiznY9944kg3xUtjEhAiuvMAG3wG3yPpY_wcUH-0GhREPCrZlOCko1St15Za2E9cUfWeIA",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "355 Metropolitan Ave, Brooklyn, NY 11211, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7142631,
                            "lng": -73.9560616
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7155400302915,
                                "lng": -73.9547475697085
                            },
                            "southwest": {
                                "lat": 40.7128420697085,
                                "lng": -73.95744553029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "6d5cb18b6dd00dc9e4d9f6ae0f6c46da26baac0c",
                    "name": "St. Anselm",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1365,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/104111246635874032234/photos\">ZAGAT</a>"
                            ],
                            "photo_reference": "CmRaAAAA_RSEtv7u4V7Wqhwf5yYoNKALecD6NUOkllAuVqPFKkvZ_OIQyvjAtpY1VtkxcYhh9yMG48wW3_3mM6A0NrDN7JCaycb3HV2ceZAAcYhoF_mpQuWHyQ4VYk1pE1r-lFj4EhAbPWuGbWbG_UXJKDhgY5-cGhQavUDLJamB18qhXgJf6IkUA07LQQ",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJc3Sn6BNewokR_RkenZvQhlM",
                    "price_level": 2,
                    "rating": 4.5,
                    "reference": "CmRRAAAA3R3TWBPlQ95822E_B0_3Rgrfm_3yK6I_CFjBgedGMI-E0rS-ErQgTx7s5tLRcWXobd5qCA8bnmpFpcPuQBkhQ61YnDX9p5DF1wXxnDmtdYiI-9ojSTHi4xBTTea3RC7IEhDZo4fqutITBOttxgCwx-g5GhSAbk2gy8DzbhAdiWq9YHGpMCLlkQ",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "69 7th Ave S, New York, NY 10014, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.73218879999999,
                            "lng": -74.0033937
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.73357833029149,
                                "lng": -74.0021448197085
                            },
                            "southwest": {
                                "lat": 40.73088036970849,
                                "lng": -74.00484278029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "7e3f519a691dea53fde5703d169ee2fa6abeda4a",
                    "name": "Bleecker Street Pizza",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3024,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107861206092985225681/photos\">Chris Gonz</a>"
                            ],
                            "photo_reference": "CmRaAAAAURFvJAWdqnPHCB0lwIOi9cn4VOwrZ-HrUI5ANuI1QZp7j3Y6Nnv-LxgZpZKEvVGLNRI69sDfrj7B9XgUS1RVIPnW2xU39lrTPhgAWYfv5OqEhVu7kLt2uRIRtYT4oNRhEhCyoZAwO-UEdXhss-uV-yAkGhQL4UZjNSCiVTvAXJX8c1i4CNu13w",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJrXXKn5NZwokR78g0ipCnY60",
                    "price_level": 1,
                    "rating": 4.2,
                    "reference": "CmRSAAAAbaGWkI7oq_vRjACNgIOiadWbu4OnNpAAaSHZbxa3272RHjiMjYVq4Mq5XOGEwcB8V8NhIMgyF9Xwys49IpshBH21EMEGAFg2T-T9lZzx7Q2ffTsWrHvxINVD7jUEiYgnEhCjpQd1F9cO9ACtu_h4liyIGhR-rf0NTW504nXB3SBJ6zJ9dBb41Q",
                    "types": [
                        "meal_delivery",
                        "meal_takeaway",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                }
            ],
            "status": "OK"
        }
    }
];