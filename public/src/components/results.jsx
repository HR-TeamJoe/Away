import React from 'react';
import MapView from './mapView.jsx';
import DestinationsList from './resultBoxes.jsx';
import ResultTabs from './resultTabs.jsx';
import ResultsSummary from './resultsSummary.jsx';



class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
    <div className="results-container">
      <div className="results">
        <ResultsSummary temp={this.props.temp} date={this.props.date}/>
        <DestinationsList destinations={testArray}/>
        <MapView destinations={testArray}/>
        <ResultTabs destinations={testArray}/>
      </div>
    </div>
    )
 } 
}

export default Results;

 // <DestinationsList destinations={this.props.results}/>
        // <MapView destinations={this.props.results}/>
        // <ResultTabs destinations={this.props.results}/>
var testArray = [
    {
        "city": {
            "city": "Rome, Italy",
            "city_id": 3,
            "lat": 41.9028,
            "long": 12.4964,
            "summary": "Rome, Italy’s capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display. Ancient ruins such as the Forum and the Colosseum evoke the power of the former Roman Empire. Vatican City, headquarters of the Roman Catholic Church, has St. Peter’s Basilica and the Vatican Museums, which house masterpieces such as Michelangelo’s Sistine Chapel frescoes.",
            "visits": 1,
            "key": "3"
        },
        "tourism": {
            "html_attributions": [],
            "next_page_token": "CoQC9QAAADdnR1SLZ_Be9kkIZWQj45SpWWzHYpSDw4xtVt9PGgx-Cski8hg1qZI-5t0kWvQSICqcf2Epd_uwPQWde7um4EWAvOlf0Ox_LmoPe3oQozbgYWuetXHCo-RsBHPZs9w8AUm3NIyObmx5_DyjvRCRJbOkLR9i1NM8MiZ28-5fxPRs0FOiesNH5aJ39eCty1vzZgxv9d5qo3QuQhLjoiwtbpQ5vLoXJbn0uOzaerZHMGI2iJDAU9vuP9A4T73ItpNH295O3NiNcNcvj2NYn883pqtzrFnWUc1vxVOkMz-uE1CCXKOaD8dnGB6QToRUT-ngL6lWkhaksiW_D04rmvmrxs0SEAzSErXywMp7Me4sSRbblDEaFKKjaI3WSpoF868w0anxP0l8w2s-",
            "results": [
                {
                    "formatted_address": "Piazza di S. Maria Maggiore, 42, 00100 Roma RM, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.89759859999999,
                            "lng": 12.4984084
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.89872028029149,
                                "lng": 12.5003275302915
                            },
                            "southwest": {
                                "lat": 41.89602231970849,
                                "lng": 12.4976295697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
                    "id": "e6402378419cdb3afb91efec7a72987d215b87af",
                    "name": "Basilica Papale di Santa Maria Maggiore",
                    "photos": [
                        {
                            "height": 1432,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103005905499355473755/photos\">Simon Chi</a>"
                            ],
                            "photo_reference": "CmRaAAAAooAOsPSiDNW3Hq-auqMZeUK4WLZe3wkEp67ap9nFepfe5YZqO_sFV_11JVnz92fYBYf6Sh66HHwGmredP4n0QFuENCOXejAaXvvwoSgUTiGIbDcbwzpTAk7iuEWOzyFeEhCJp2D-GkZoGhIMPCsH26SmGhR0YAsGM6bgc-89Z1vx6r9QyLq4mw",
                            "width": 2546
                        }
                    ],
                    "place_id": "ChIJ1zB926RhLxMRejWMj_tUs_c",
                    "rating": 4.7,
                    "reference": "CmRSAAAAa4Obdda7jXFO1yHCyewmhM9e6OVW22W1-cqCiyLtS4UxwUg2KqxbsW6TrFb-eQYUUEicr7ngLdmotPh9u28A20xpP60pA7D1XH2Dsq-mx9-2RHec0t8E3iOLVdemE5iaEhC7sdw_knmJ6CmtP-Y5N4sQGhSFkYW_8GPKR87FPz5Lp6RvG6uR-A",
                    "types": [
                        "church",
                        "place_of_worship",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza Foro Traiano, 85, 00186 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8960502,
                            "lng": 12.484071
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.8973072302915,
                                "lng": 12.4856401302915
                            },
                            "southwest": {
                                "lat": 41.8946092697085,
                                "lng": 12.4829421697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "64e6832dda684ab82f072be91db2226127bb01c1",
                    "name": "Le Domus Romane di Palazzo Valentini",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2592,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107685639785505082152/photos\">Géza Urr</a>"
                            ],
                            "photo_reference": "CmRaAAAARRdQwMBjs3M8Tq9v6hcGNPpUBuj9r2DwZDCgQZI74EbjMs8FKnn54XbncXvPelOozWwd2x4ZfGnFvM-VNfDeP6i7SbXD3lBPScC6KHisckTgAjiqsqK7_MELQl69aarfEhBxtSQM48D7tk_K-jajzA50GhSBqlbNsmNI2r-AdQUk0A1OQnzuvw",
                            "width": 4608
                        }
                    ],
                    "place_id": "ChIJr2C1NU1gLxMRAQ8Cfk1debk",
                    "rating": 4.7,
                    "reference": "CmRSAAAAdYVP_4b1Nv-sH-i2UTFk4tJxDntdEwt9h2D0SiSlW6Ve4HktMSc7C8CUNy_HNidanqjZPTncOgY8HGUFd7yA5ZmNJXpHTSDDBpbo9Ihck2fswiquayri6c3h6udYPf2eEhBpBQMnAw6c4q3T7_7A6MtXGhTFqD2eugCi-SgEyz9viRveWxXmog",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza Navona, Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8989673,
                            "lng": 12.4730872
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.90178555,
                                "lng": 12.4747335802915
                            },
                            "southwest": {
                                "lat": 41.89650695,
                                "lng": 12.4720356197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "1c75309d0a9f5b57989d41b06a592017c2398e59",
                    "name": "Fiumi Fountain",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1363,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/116814032363202226950/photos\">Andrey Deveykin</a>"
                            ],
                            "photo_reference": "CmRaAAAAKYN1X7i5BJN0SFZlS_e3lyqYeqEmPlRSOGCbyhqUf6HSQfWTjQhMfx1E5WTyBS4VW1wfIyLzh5dIZptUxVfFaY3jB6v6KtxLI2QmUuJJElDwuYW2vTQLVnas7oDfvfddEhDYkiR6aAZWFKt4_hZa3ZGGGhQdE-VnbrUivfuU8qp0vGT0DaWGcA",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJG6cU-09gLxMR8hkxk2gJcFI",
                    "rating": 4.6,
                    "reference": "CmRRAAAA3PLboi8s8O9pfdOV4-OCjPxsqhOQeOxPLSdDpdcMoUkx8cpI5xSUvEvmbLQn-cm-LToIURPrrtvVQbo_xY2tdCP5TP8u8mO_Y_d2K0S47_VwRp_meVrhDmyKDCV4lkOrEhDd60xK20Lbg35f7Bkx8Jy1GhS46T3mGHc4_63ta0ctd3q5TmaRng",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza della Rotonda, 00186 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8986108,
                            "lng": 12.4768729
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9002094302915,
                                "lng": 12.4780112302915
                            },
                            "southwest": {
                                "lat": 41.8975114697085,
                                "lng": 12.4753132697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
                    "id": "61d786e5932897f0f3e263f7ad26df6efafc270c",
                    "name": "Pantheon",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3264,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/117023613501119482371/photos\">차무궁</a>"
                            ],
                            "photo_reference": "CmRZAAAA03zqdFTyOzYjd7KNpfqDhqiv_6OuwZiHsbAp2cfSjXDF66BOZGtXyW-FyMBLFOeSGAyraYEeghqDGJL-zvP2dSxcvMnT9AXxO6XGBbWafemAVEMPw9GZZCn6SMyEy7KSEhCMJ8FrZtTzfDeU1os08rF1GhSlstj7FdimOaj0MX4STWugc-0lBQ",
                            "width": 4928
                        }
                    ],
                    "place_id": "ChIJqUCGZ09gLxMRLM42IPpl0co",
                    "rating": 4.7,
                    "reference": "CmRSAAAAlg29Y05V8Bi18pKtt9G5lV6-tVTD6gIv0mwSo7IDmJT127G2N0fLZu3QedvSd0t6Qgj47FxPqAK_RQRh7D4kDoSVp-USmIVls_JhFOsj7AnKwPqQj9rbvqeER0UWwXGMEhDZyZorYrZ9GeJUgsG4EEmlGhTWfzow_S7nYpaui6DYxHJ5k_lfTg",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza di S. Giovanni in Laterano, 4, Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8858811,
                            "lng": 12.505673
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.88755958029149,
                                "lng": 12.5103442
                            },
                            "southwest": {
                                "lat": 41.8848616197085,
                                "lng": 12.5018038
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
                    "id": "1b0d4af816c3640e12388196e7f6247bb7d37c72",
                    "name": "Basilica di San Giovanni in Laterano",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1365,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/108804498440835784499/photos\">Cristian Tino</a>"
                            ],
                            "photo_reference": "CmRaAAAA_KKJUQjplhGtZ9b3xGfXXGjmh92jIwW0c21nOSPAaTaovZayMA2KLKZCXQk4NMZQJjCV4hNsj5xWDGylU3gAtu7-XjHE--DY0Qlbgkb5kDW7S14QmR2xpLUdf2Q5tOcGEhAGaQ_7QabDOMvgOoRprrdXGhRYGsfwvQ_ce5fm7hp5M0fIqUBjQQ",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJc6vKf79hLxMR-JBUkZ--MAE",
                    "rating": 4.7,
                    "reference": "CmRRAAAAjg2NdZpAAOGI7AvSBiQJMl4pMXfkpd5tw9BmeTjDtACnx4Oa5LJbWZ7gVBe2XIzR6ChLwvP5r11tEIQLm82XOs1qO0TQqSqM3Cb22sxgBHp6SQush-Mn3Hl_6BkTOkT2EhDBOr_giVCz8KbXYBbPSAfkGhReSv3vqQdD1pg_p1ASWHEhBENyCA",
                    "types": [
                        "church",
                        "place_of_worship",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza Venezia, 00186 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8945976,
                            "lng": 12.4831269
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.8960713802915,
                                "lng": 12.4845365
                            },
                            "southwest": {
                                "lat": 41.8933734197085,
                                "lng": 12.4814822
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "42720963a821235573423ebe18a66bf8c4845470",
                    "name": "Altar of the Fatherland",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1200,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/100257381557984050499/photos\">Alex Savin</a>"
                            ],
                            "photo_reference": "CmRaAAAAiwWjMZ5vy2ytvv7mrs7BxEUJtQz_MgVz7bH0INBMlEHIsyiEtLhBe55uh9o9b98ffsQP1mlIO9fQ-fPNMTbAcuV4HD_9vKALq8W_Gs9FrY2Bo0Eh3eqE4wz13cv5oWIjEhC3jjg2gfinkfy4fJzPSsl0GhS2WHKyLsgPU-L3zEphI1NKdbXJCw",
                            "width": 1800
                        }
                    ],
                    "place_id": "ChIJ412AG01gLxMR4T-4pwdIFSE",
                    "rating": 4.6,
                    "reference": "CmRRAAAABrSrOXv2YO51Nwlbzff9-nOw-r4DhsfO5Lz4h96MnRBVSj6stkKo33kQVaV39DjOrYLfx53HXGkopFKSxpvh1QPlCeutiaR2jFhrPeDcWOFMVXgMhAwTthWhYoJTf2XwEhB-oLof8xkIys1OCtAxxhjaGhRlJil3gTPnIz2xMpiZ2FfM9alRIg",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza di Trevi, 00187 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.9009325,
                            "lng": 12.483313
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9023822802915,
                                "lng": 12.4846219302915
                            },
                            "southwest": {
                                "lat": 41.8996843197085,
                                "lng": 12.4819239697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "ec120f1e427fe055b35225ef1a5f34660a585c01",
                    "name": "Trevi Fountain",
                    "photos": [
                        {
                            "height": 2808,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/111348727456353660358/photos\">Bean Yang</a>"
                            ],
                            "photo_reference": "CmRaAAAAyV5LNXrk29YTgWfA0DehO53Q-BqffWMs2RoPWwt9xS9S3qw1-lDm-SfyQ_UiYSyh_RkBfRHWwbyLZFTa7U37R6jXuRiVEI4xmtpfNJ8YIqn28NBkwA6jZpigKVavPXdAEhBYyYJSNHJwuj9LRw02af91GhRX-4qgOKW7OVSpMVsis-ytqX7fqg",
                            "width": 4608
                        }
                    ],
                    "place_id": "ChIJ1UCDJ1NgLxMRtrsCzOHxdvY",
                    "rating": 4.2,
                    "reference": "CmRSAAAADET5QQB22GEFO58nZGXi4UWsDPQaIOrgoZWx8AuSwBBFahHFFM3pxrOBRVRZmXzypfNTDvUp3xCPBiipz10OaQsmuJ8A83jV05cIGgWOdAR8z5dHKbJoLE-Qmqr35GvyEhBe97WrBtYSVB_dDKAgVXRDGhTqvrdPR1J2qAoioIYGx8leLlEmQQ",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza Navona, 00186 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8991633,
                            "lng": 12.4730742
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.90174534999999,
                                "lng": 12.4745058802915
                            },
                            "southwest": {
                                "lat": 41.89652115000001,
                                "lng": 12.4718079197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "033a8ac4ff5f54983c878f766c8091467cd065a2",
                    "name": "Piazza Navona",
                    "photos": [
                        {
                            "height": 339,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/101226780486736353244/photos\">Piazza Navona</a>"
                            ],
                            "photo_reference": "CmRaAAAAujPrEzurkfVIRL9d5m79A_6RqskaEWsFSrdF2t5_moLZ7KMmXf8P7movvJz6E-9jopMX7-BP2-Xk4bdiJCFqMNs0CsduZm_pzUoyOVC1K1Jh-IJ2I-ofpswIQf2ljajpEhA_2Fu8XXDV4zB2Ygj-VZj1GhRcw3jd63Xf4W10jO83DW2ROmLNew",
                            "width": 338
                        }
                    ],
                    "place_id": "ChIJPRydwYNgLxMRSjOCLlYkV6M",
                    "rating": 4.6,
                    "reference": "CmRSAAAAyTEoTkNLq7naDEDUSPY0_QgWGw9fgAs_Fo2vXy24kzdyjY2dWPE_cvPxZjtQRxOlSuvjS7nycBo-zXDSV61MgSSA7ym2eFOEW_tIRvzsdJS4agrzuEgB7hgwdV-4XfX8EhCZ-MwfreumJkuEEVlnkJwzGhT36-hWgpxktktgxkJg1Tf0D28Nqw",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza di Spagna, 00187 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.90599,
                            "lng": 12.482775
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9073335802915,
                                "lng": 12.4841033302915
                            },
                            "southwest": {
                                "lat": 41.9046356197085,
                                "lng": 12.4814053697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
                    "id": "c859ad5f34537efcafafd5c556fe4be908072a20",
                    "name": "Spanish Steps",
                    "photos": [
                        {
                            "height": 2891,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/106821047497812354782/photos\">Gaurav Dhup</a>"
                            ],
                            "photo_reference": "CmRaAAAAbXnjOSr5KzliB40O72N6WdRPocKGU5EetjThqIFIOeKgQByHsUhHiAYM3_UlFP8jxRIjxC4TdL5DzIgqLrQfwGru4rDDNwhuq_iwgK_0as8H3jrHq4VTajKhrF4GxHXLEhBztmd7VEz-oIVZ-BboZFGBGhSQTjeQlipoq87DdHp_D9uA4qeHaw",
                            "width": 5995
                        }
                    ],
                    "place_id": "ChIJda54FlRgLxMRD2muipfUwH8",
                    "rating": 4.1,
                    "reference": "CmRRAAAA61VDigEk61ZMvsgpb1S9gtibzbRtnlDTWjW-gqKr_Vprq68jv8kueZ7Y06kDJtcLqDsYuVk5GYkrW4NAElvIR5Ph4zoRSyI5E_3vuxjKXYOXcyehz1Kphs3GvADXq407EhCamVIGSQZ0DszkhtTsvySkGhTFR4W9MqhLfCQ0lH1BpfAz2iSo_w",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza Campo de' Fiori, 00186 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.89559390000001,
                            "lng": 12.4721808
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.8969239302915,
                                "lng": 12.4735034802915
                            },
                            "southwest": {
                                "lat": 41.8942259697085,
                                "lng": 12.4708055197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "035dd36a0775413891aeea3642812e289d26d11b",
                    "name": "Campo de' Fiori",
                    "photos": [
                        {
                            "height": 3024,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107705993218033878493/photos\">Gianmarco Bruti</a>"
                            ],
                            "photo_reference": "CmRaAAAAyJhDAfSvlfIj-Wq6xJ-Wr0qsnWeyRb5wuenXCopGllZpU6mPyHdoWdf_5PBTAVCg4NrBo7JHDA_7FcVPL4IUvbt_u8XiDgLK7KI_jB3epnw1EDvlf5IaUsNYx0mdDfDMEhCsB83iUOoPQAnXjdt9PTUuGhS-fEHWVDuz82Jf6izWm5r11FtMSg",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJfc8DqVVgLxMRxPIIp3z8CBg",
                    "rating": 4.4,
                    "reference": "CmRRAAAASxnVD7vXZ2wCVPG0e3S_9l1WAEYG_jsmU_VlYRXdTjF4fVHEX9TEq0W6sLjSfd0tAqmEftnO9nVl_p1lQ33LFiqY4c917JAAFImkGzy7RnyaTIAME6-YjGFRnDi6ZBrAEhASFfVV7xHuwCWniClp4BDDGhQ2rlAcG6y6S7Lmq29qUQnsDaIVjw",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza del Colosseo, 1, 00184 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.89021020000001,
                            "lng": 12.4922309
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.89234975,
                                "lng": 12.49475295
                            },
                            "southwest": {
                                "lat": 41.88811675,
                                "lng": 12.48966315
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "5ddc4dc1f73c354fcb055ab40358155b9cc378ea",
                    "name": "Colosseum",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3927,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107024186496683775188/photos\">Ian Done</a>"
                            ],
                            "photo_reference": "CmRaAAAAwBXOCa9026I99HJQ9BQqbFVBI8yi7cdnkt5Go-UVIwH4aiv7NYhgJ7NB4urOz0vBr8ZYsPcoM2u4VsPb7A_P2WO_BuJtx16jgbgGd-vIjphkv5bzeOEwKWBGXd6vjqJuEhDCn88apELvbxLd_D2Jc9TYGhRCH22EwCIzktZEnzbp7bwFLg_9fg",
                            "width": 5815
                        }
                    ],
                    "place_id": "ChIJrRMgU7ZhLxMRxAOFkC7I8Sg",
                    "rating": 4.7,
                    "reference": "CmRRAAAAtOLGMo8malqaU81bPjhUr7Ta0GXgW1b30jRBlbVPQxxzdI5WIAU44StmjMvxz0HBSgq0h7GghfhB7QXcUN6lEPtEel9kUfTdsRHK4n3Vylk0nxJYUCoxzVjJFFS1RnO8EhC8btC3uihrf7V-JSZprGIoGhRY1H9oOfZaCYli-i8pRSCGJ9R_yQ",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via della Salara Vecchia, 5/6, 00186 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8924623,
                            "lng": 12.485325
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.8937266302915,
                                "lng": 12.4861384802915
                            },
                            "southwest": {
                                "lat": 41.8910286697085,
                                "lng": 12.4834405197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "444254efd7e08f4e38b782a43089877b6fc8cd0c",
                    "name": "Roman Forum",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 430,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/109987387196105419847/photos\">Roman Forum</a>"
                            ],
                            "photo_reference": "CmRaAAAAbaoHhDeupTOis_Mk2fp-6r-hFpFkcWJKX5iV9crpDC_ASo1Sr5xEKe-VJ5fj8ZJ2koJBTOl6gAiSx3j91ymsTI3_7iocY6pX7IfIfsM_EW8SOB63-Fy1StgxiioMNUWDEhA8hc5Jxm-bYhCWDJH9aDc6GhSAlF3jzdhicwjwg_UVNFtHqO0nlg",
                            "width": 431
                        }
                    ],
                    "place_id": "ChIJ782pg7NhLxMR5n3swAdAkfo",
                    "rating": 4.7,
                    "reference": "CmRSAAAAvxp6ebjAd7Vdd5n35JhE_EtlZp-lQQ-dKxamEqpa8TAEqHGR6hVOkTsQ2zOPFoJcgAKIJl2ec56OgQ96XLeK2wUBJFKDHslcxjY8mHuNcM9ahFT-HEDlCSQtIhWsNkNPEhCzkmP6Xu03Dq3fqoPYQMkNGhSnTgAr9Nbj3OkElP43WlfN_-BmKw",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazzale San Paolo, 1, 00146 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8586767,
                            "lng": 12.4767338
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.86035763029149,
                                "lng": 12.4790816
                            },
                            "southwest": {
                                "lat": 41.8576596697085,
                                "lng": 12.4753916
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
                    "id": "eb54b0124106099d4b3425b990970f7eb9a2ce65",
                    "name": "Basilica Papale San Paolo fuori le Mura",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1700,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103929875320074446223/photos\">Basilica Papale San Paolo fuori le Mura</a>"
                            ],
                            "photo_reference": "CmRaAAAAMomjfBtD-jUPb-D2Y5VWHo8H-5VCvBeahMhlZaW8Os24IAvN88FxDePzvJpP_23QiCBzUChUrgeaFHSBkAc6KE0P6b-3Mw2fjEZYEEn-T4qZbxHfR7MREFG4uIs2RvtKEhA60Udz_QUeaDKVBu32auIYGhRfIl_HIewivdDaC3H1jhCBMKPmEQ",
                            "width": 1700
                        }
                    ],
                    "place_id": "ChIJ2ReSKI-KJRMRTk07SoiIUXI",
                    "rating": 4.7,
                    "reference": "CmRRAAAARbSLE6Oi4QQ7Wyk-1JtIis81RnqSbHE62aWVubgcssrdzKufTp9_luLr3N7XfBjxnLwLd4XBDRso2HmPYKk-MPd2OPQriSPiYYoW2uRHpovVUTdokib8XGlAjhE35pSJEhC7iJOe-QFBLy1QNJRjsqXsGhSoX8Er-7jYn8RXXmaAOtBNZQ7S9Q",
                    "types": [
                        "church",
                        "place_of_worship",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazzale Scipione Borghese, 5, 00197 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.9142103,
                            "lng": 12.4921442
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.91848459999999,
                                "lng": 12.49604445
                            },
                            "southwest": {
                                "lat": 41.91174940000001,
                                "lng": 12.48468985
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
                    "id": "6908f2ad973cb82e3f2287b618143d47d4a96650",
                    "name": "Borghese Gallery and Museum",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2340,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/104789611772855881967/photos\">Alejo Pellicena</a>"
                            ],
                            "photo_reference": "CmRaAAAAyzoLbQDMeKjeEG6gEs05Pd9f0OaFMx7OiPoKAd9DxmjTaLUlQLSyF3mCriZGwaGbU0n-B8mxW9mj35IJFFo-IcHoD9FVYNdByFnuBLc64zijrhXY79h7PXNeKWeXX97aEhCCgLxoROfc01X4CjfzdgiSGhQu4gdQAKY2fAfrrGIVNwy29xBgFA",
                            "width": 4160
                        }
                    ],
                    "place_id": "ChIJq-bXVgRhLxMRv3vgOXaktBs",
                    "rating": 4.4,
                    "reference": "CmRRAAAAFqaupLRqKTn1-swdYPl7-cDpPqBJmlARgSmWS6ymdwb_SKSp3GJPL5UR--zjFUE7lzJbQFDd0qQhVqENwmY2pYeORpYTLUwvkGJCGXhJmVyKeRZm6tB4g7VeCqdk4nw0EhBNCSeJ4Pqi2WDn-6FlV-yXGhQFePF2yy9YrFrSu_SBeVPdSIN0xw",
                    "types": [
                        "museum",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza di S. Luigi de' Francesi, 00186 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.899581,
                            "lng": 12.4745405
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.90091928029149,
                                "lng": 12.4761154302915
                            },
                            "southwest": {
                                "lat": 41.8982213197085,
                                "lng": 12.4734174697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
                    "id": "a6d75bf540596186723e4e2063571e8efe0157ad",
                    "name": "Church of St. Louis of the French",
                    "photos": [
                        {
                            "height": 4000,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103667738823739982204/photos\">Ginés González de la Bandera Romero</a>"
                            ],
                            "photo_reference": "CmRaAAAAVOOIyKy2ysHmEvxxj8z5sWm-4Y9UG4gMaqkpupdCeQT-MSFvdtOxRgaOZaeVwW_Zj2itPqyhih01Hfb_KtH6h7X3pTftmRqbXX17wswsKVIJEtlkTamQKuuAcwx1pM4HEhDcRIFPrZZiXChbR1IcKI39GhRbmya0NcMR09MxN6l6jJMzS7MYWw",
                            "width": 6000
                        }
                    ],
                    "place_id": "ChIJLQGCLlBgLxMRuYQp8kv6syI",
                    "rating": 4.7,
                    "reference": "CmRRAAAAie8ikfPgOOyNH16BMFs1y-Flj36pT9Fk9vMK5wL4DNpHNyn8PJDCfUhzu2MAU9eQAHB5OutHOYcnzmFumcuOHg2ZsAiwN8vnirLe7pue7KP2V8zdgYOZ0ZjDszckiuKVEhCn3lqAoQtkK_ts4hyOT9xxGhSYkOT1ttb_SvzuTIso9OsxUbgbAA",
                    "types": [
                        "church",
                        "place_of_worship",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Viale delle Terme di Caracalla, Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8790382,
                            "lng": 12.4924394
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.88200579999999,
                                "lng": 12.4970026
                            },
                            "southwest": {
                                "lat": 41.878049,
                                "lng": 12.489967
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "46e67f50a1b62f82669388f05a5f4cc7d0452f2f",
                    "name": "Baths of Caracalla",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1152,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/116866591952561125069/photos\">Arnold Lengauer</a>"
                            ],
                            "photo_reference": "CmRaAAAAChevBbb3tb9JSdFIFjB4rkJ6-DUJIfxxZtoTlfNsL3M8yyUhesWH6iV4PXkwKCwoaBoxYmU-WleKZ7TSg1kwmUEYXcIozuAw5OOK_oBlGst1uH0M-fpXPxyQLmkIZHgDEhBdT2po0YsUB4VoSMrPJ_mzGhRpppQZJTN9hRPwThD3iJD5LZYPJA",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJ1YU-M85hLxMR3Jhb6gZAK2o",
                    "rating": 4.3,
                    "reference": "CmRRAAAAai5sPMQrzWxz4f-HmbwEYbQoq-ZcURa2sXpoU43FOJRd3UE9_BpuQFy40Ps6kASkI0X1k5CndG9izFCjGrS6miLj_1cMRM2YAHgcf9EcQ071aa42nlnvr5cvb9pOJzfUEhDBLZW2ozGWqq5Jr2OnryxCGhQ-RGuLOYR_dygG5jO2S6jNamGSDw",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Viale Enrico de Nicola, 79, 00185 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.9042819,
                            "lng": 12.4983756
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9050575,
                                "lng": 12.50195805
                            },
                            "southwest": {
                                "lat": 41.9019551,
                                "lng": 12.49473385
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "0156ca85e8958601ee5af360957e3a6afdab4cab",
                    "name": "Baths of Diocletian",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2322,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103451448739496432950/photos\">Jacek Kurys</a>"
                            ],
                            "photo_reference": "CmRaAAAANX0FM-6sKH6ocO6NmYzTsCCspdaemP6jyeE_dQIR56D2O46nmNH2oIhcv7CLVM27oSaWlD3-1_IVTRPZ0htmR1qI2CH5nh3ywL723IP-tBAs6jdZb_1nKy5fmK3AvNXVEhCINGYSi6g2_hY_ipJ3dinaGhTTWtIX0J3vn1YUWdA81NHKfa2SGA",
                            "width": 4128
                        }
                    ],
                    "place_id": "ChIJOYfI3KZhLxMRBKoNSYu_VC4",
                    "rating": 4.4,
                    "reference": "CmRRAAAAVnIb2tVlBECx0ch0m5EIXjAPda2nOEQkvrXbi4qwASFstuR13_DoPtnd0asrFDnWZj7MqMwPr3mUcLfGDSp-SREZdeMXB9osuSDv55H7HK6y-eh5BOxwLzfVcERruOVHEhC022dHozyqey7AZoabeMBOGhTIpS5VfssMKAoswH-84-2sZuDk7g",
                    "types": [
                        "museum",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza San Pietro, 00120 Città del Vaticano, Vatican City",
                    "geometry": {
                        "location": {
                            "lat": 41.90216669999999,
                            "lng": 12.4539367
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9033783302915,
                                "lng": 12.46061875
                            },
                            "southwest": {
                                "lat": 41.9006803697085,
                                "lng": 12.45170935
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
                    "id": "85c7cf29b5692b6fd6e3394fe30e35aa48a28a8f",
                    "name": "St. Peter's Basilica",
                    "photos": [
                        {
                            "height": 3456,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/110409974586769607808/photos\">Richie Preece</a>"
                            ],
                            "photo_reference": "CmRaAAAAF5HyXpUzN9-i0D2irWfLhUANap-cpR0EWlUf2yuA0He2fyguKkTe7AOsnWyFmcE4ngMvYC-Y8UoA3rXif8yb96Liy6VTcqXBYSV-jrQ2Ma9PqZsAWIr76o7F08c8afmvEhDJiJ3Nux3xPROnZJbZs-nWGhRD-S6P55vOB442eY2yTatFXz2v0g",
                            "width": 5184
                        }
                    ],
                    "place_id": "ChIJWZsUt2FgLxMRg1KHzXfwS3I",
                    "rating": 4.7,
                    "reference": "CmRRAAAAutZFLgZxkibwypCW29kGK1xKZ4yPxkfExW1oglELELee1e_PxZaahLyTG124eLN0SXSgmSYLd6wQssFLS60Lgm-DXpRR3wcU1VpqIhykYjhF8coLE0nP7htpcfjffh2VEhCARwl-IwWEDiqVxMroefWDGhTesv3GVPqdt2151Ot8UDAjxkiqDg",
                    "types": [
                        "church",
                        "place_of_worship",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza del Campidoglio, 1, 00186 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8929428,
                            "lng": 12.4825577
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.89440433029149,
                                "lng": 12.4838845802915
                            },
                            "southwest": {
                                "lat": 41.89170636970849,
                                "lng": 12.4811866197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
                    "id": "d9553a0a8b01046e16a4b0c12e846a747cb61406",
                    "name": "Capitoline Museums",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2160,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/102391721525932844287/photos\">Raquel B</a>"
                            ],
                            "photo_reference": "CmRaAAAA9u-wUTBxxIAAj-Ee54_eDco0Bh-9w0n6H-2ASpWoVH7wSFhNTIiHCN4Q7xBeeWa7kw_nn98NxgYb_6uRQxRn8ePYwjTxtjQy13h_q-2ah3ZupN2BypM-b50g75MAbE5nEhCC161rSo8K_W8gfVE_iCQpGhTQlvBLP5FNuoR1ZzSbkeCNHlCkEw",
                            "width": 3840
                        }
                    ],
                    "place_id": "ChIJ8-wGeU9gLxMR--zJtnpGod4",
                    "rating": 4.6,
                    "reference": "CmRSAAAA-c3jxBbmFtGBPUm5PSkUsaiOzirqfcnR8vX0JiWYG1ecGfsjOeX0lEmamJji7akdHDsVBK42jdc2ARDLCgnkx-jZE1udZTk8cQmgE7gNi8G32hQo20ZxY0CT5CgcBy38EhBw_x2IWe1SPnZTqXfaOCr2GhRwf73c39GYWagXeQ7pESLA13VV0Q",
                    "types": [
                        "museum",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via delle Sette Chiese, 282, 00147 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8589185,
                            "lng": 12.5052027
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.86012263029149,
                                "lng": 12.5059470302915
                            },
                            "southwest": {
                                "lat": 41.85742466970849,
                                "lng": 12.5032490697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "77c1d6036cfcd6fe70d3b6462f2d23bd9469e960",
                    "name": "Domitilla's Catacombs",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1536,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/109250628965788253411/photos\">dario enriquez</a>"
                            ],
                            "photo_reference": "CmRaAAAAmCndiuP-CrdANHvW9pwwALkhyfJMcuavWVTFWrdc84Z-a07ikWV8NY3cadI77B43WM8C4d9pwvtRrNwesvMhHoxYmfzHWqNbIY8UzYld0K6gUQ53DUyQO5vd92HQ6UaTEhD-2evBiC7XsDmhGfen5_7DGhSpUd3iE6VQcwHTWWriOQjYiWsijA",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJBULz1nKKJRMRmkuAVRGLp3w",
                    "rating": 4.4,
                    "reference": "CmRRAAAAr7_sA-092c9qEDs_f_qIxXfaxkc4NEZOu67WMbCn14amTDoTw58X3XM5cUQvIVZPQUAS8fjLEs3tK7xa3KrhXxGWbd1TCNKDPu9MMlAuv_S15us5rf5kjozYnHRChEp7EhAXgAo9sdbcPDBXsz2lJeMaGhTBF7L5qaZntJQJIbAd9bu9qMtDzw",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                }
            ],
            "status": "OK"
        },
        "hotels": {
            "html_attributions": [],
            "next_page_token": "CvQB7wAAADb9V884m3Or6nKZ9l-3MfZbDy1kz0UIVMEPPCKj7k_hz1YUWXQyMxCX8b6suOZeBfgwrQZDQgcgnjMr9xDjUuFa18oVQLOpAxwQKbZzI0w5NBIOQQO09k6fxrrwmuP3t17EkkfN0-j4lyedXFInYEQZOee5gJnPNTKAeKQPe5DVTpo1AdRM1lqtQUZJRrTJiNvRpI9MBk-r_m3A7p5vGQQ9GvFJYa7Cqs2xPTErtD1T_WiO8axRczBUKHuyzfzXf2UDA9UIF7SWCDmgwYYsgrMUV4loC30GODYjTOhH8DCycX5Cs2pt8SbfR6savRFcbRIQHoAF_mLDFCFGpZrFRQO-IRoULw1kJUgKyC26vAxF8_RhCujKAnA",
            "results": [
                {
                    "formatted_address": "Via dei Condotti, 85, 00187 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.9056453,
                            "lng": 12.4815041
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.90693753029149,
                                "lng": 12.4828897302915
                            },
                            "southwest": {
                                "lat": 41.90423956970849,
                                "lng": 12.4801917697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "31e50996fa906cb88c41e3532535bc2a03c34ab4",
                    "name": "The Inn At The Spanish Steps",
                    "photos": [
                        {
                            "height": 1366,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103515413304100316909/photos\">The Inn At The Spanish Steps</a>"
                            ],
                            "photo_reference": "CmRaAAAAXjLLs3ptbAHxj8Ku_BiWS1ESTeGFVIGHG1cQv73erWYvZoTNZomk09J_uTirO9GsOwYq7-wT18cQ2vryPUj7Xqa2OniSGWcXLTApfZS6Q5YHGjuiRl7DHs01DSaABujqEhAfySSYULTObFr2FhjJCkz7GhTPagO6GAAbTEofrph_sy_8VOqhTw",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJbcGnTlJgLxMRK7mQcnYwOwA",
                    "rating": 4.6,
                    "reference": "ClRQAAAAulnG04mYBC1MtbDZvHMLTAwY07Xxp31LepisJXDTUXhMCoNONzpcYpGRz2BkOMdMXrGXHLaBOmiwOszNx-slXUcaX8PeRL9ZQWPK7Co70FgSEKxvSrwNh07DVvAb59d3alYaFGWxhMFJ39vRvRrm0EnbNN7uE8-w",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Nazionale, 22, 00184 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.90081900000001,
                            "lng": 12.493472
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9021921802915,
                                "lng": 12.4947918302915
                            },
                            "southwest": {
                                "lat": 41.89949421970851,
                                "lng": 12.4920938697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "1b4f40521b68b2742a220f931da7398a5c70c3ec",
                    "name": "Hotel Artemide",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2000,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105758694695587792694/photos\">Hotel Artemide</a>"
                            ],
                            "photo_reference": "CmRaAAAA6KuxYWuetWeO8JXhY0Gvl8ETuezNkl9FlY9Os9nTTBDOVz7kruiYuJuOC9_CEFTyEcw9pExVdP4mv3S42moQ9gYgMHNGlhqJAdKwQRhBCbY7LySKb1GRL_rQRPcLixLeEhCO3aHxyTb8fhozvuJYS98eGhQyYV44zxZjHFZK3JpwjdJomORJwg",
                            "width": 3000
                        }
                    ],
                    "place_id": "ChIJ-XEpPK9hLxMRCnJJKst12y4",
                    "rating": 4.8,
                    "reference": "CmRRAAAAYc08daz3ij395PO5BV9p8wMiunsJoZc4LVZRagSMwpKL8n22tOgYMxTIEJjCujw-Gk3oGWB8haBEyWMqmnQgFjLh6oVM0Bugg4WaEsarw1z0UcmTIbzvVOIf8Gh8ZLwdEhCArMY_COhMB2FNrsAyrMeKGhQr1gjIkQFO8OObDW1kXSNcPXxf6w",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via del Babuino, 181, Roma RM, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.90923529999999,
                            "lng": 12.4778684
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.91061883029149,
                                "lng": 12.4792688302915
                            },
                            "southwest": {
                                "lat": 41.90792086970849,
                                "lng": 12.4765708697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "b303317b24ec071a4232318474cade8eb78375f5",
                    "name": "Babuino 181 Luxury Suites",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2592,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/110831204750359276436/photos\">James Brooke</a>"
                            ],
                            "photo_reference": "CmRaAAAA0nqz9dJEz8geRKydaUpWhcgz7H-w2aFUZQS1dEX7R2tL5NEuSpQLKtv7-iVWwjrCLmiXvhEz3oMLjG2Nif1h0cgubypjSKB5szlTFRjt29yttKigo_9h71e00kavf9LaEhATo_SQi3WyK_BfVo056JXzGhSLf-I5ULdSLgVOPE6sd3g4r9HbNg",
                            "width": 1944
                        }
                    ],
                    "place_id": "ChIJq34c-FVgLxMRrZEmss3Jm6Y",
                    "rating": 4.6,
                    "reference": "CmRSAAAAs0ackrHV2KiP0KpB4VHTBrEYBQG3WksJEkylnwFurkb8k65BLDoVYrscRhJztO8XbnDARaTcAXfihz-2NBYoDuOBG6cHdz5W9x7oLj6WRxsJ89PYs9x0YxhLZSOLf4-TEhBBo45bgu5KGNSeDk7Kmzz2GhSHLye8tHuhy8JY7BDhvgWcP2mVEA",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via di Monte d'Oro, 30, 00186 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.9044105,
                            "lng": 12.476936
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9057388802915,
                                "lng": 12.4783273302915
                            },
                            "southwest": {
                                "lat": 41.9030409197085,
                                "lng": 12.4756293697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "8089ec041bd2f62b0d5f3093e27b97a4758ae6de",
                    "name": "J.K.Place Roma",
                    "photos": [
                        {
                            "height": 2431,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/111820670802192158274/photos\">J.K.Place Roma</a>"
                            ],
                            "photo_reference": "CmRaAAAA9XyF_4cXo1kYUe2qL_vONckl6JnIbBVnFKmN1NoOft3gOzFV5BYdQftCW8yGn_MzfAbvkDcN_MGZvHi_dxXwSlOiU1EfavBeLhpscNe4n0CvHH9CdWcqKN2dsSPfu0ddEhA5TEMhz5JQ_VYoUJNlpn4RGhTDG_-N1AUpJh8O-aeSmRQx2vfrIA",
                            "width": 3553
                        }
                    ],
                    "place_id": "ChIJ0U1yt1ZgLxMR4ViurdnTKck",
                    "rating": 4.4,
                    "reference": "CmRSAAAAtN7QURQQtgmMwwTNgyi458ytKcnvHC5vm9BR81TzA4HyKPnGNKNtlDtkpMycV-Hux29Po8ERivW1aYxryk_TDC_wGBb5dkPBNnoqHnZPaiIx5E-KZT2PTOq-ly7tckvlEhDqeO1OdT2MLBFx4xifxmz9GhTKTaO8X7HznU2dEtTlcJaYpCyAMw",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Tor de' Conti, 3, 00184 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.894562,
                            "lng": 12.487185
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.8959084802915,
                                "lng": 12.4884799302915
                            },
                            "southwest": {
                                "lat": 41.8932105197085,
                                "lng": 12.4857819697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "b50b6db56dd620cb7c78bdfe59db305656c1f692",
                    "name": "Nerva Boutique Hotel",
                    "photos": [
                        {
                            "height": 2048,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/112740600102339155477/photos\">Nerva Boutique Hotel</a>"
                            ],
                            "photo_reference": "CmRaAAAA-HJhuhQZUyEBhObL_hcEdja3z9sI6L9kUmxOQ2tOaGtt9LpTBt2Q955mjB9JBJX6D34YR7ShCrpTqZTBMkJbZKvp_t2-tOfeiWvP4B4drjLsBKYSvzuJ892eI9mWtx4wEhAZI3aG3iXh_4brw-sIxPhbGhTQzPfTxGMwaSakrDhOhIh8NcItJw",
                            "width": 1359
                        }
                    ],
                    "place_id": "ChIJ_UjQpbNhLxMRowavoifLqZU",
                    "rating": 4.8,
                    "reference": "CmRSAAAAagDMwa6TJpqlxjneSvMOy8hYgVlAhzOukzN0y6pXGM9PIGsJ8PprBzvNk4amJ5Usk_im0UMNWqhgvHz0pfW0kyh7xd8PBJ8w_bNN3JNcyd-zCy5LeORbBnxJOvz6JLr3EhDYw_T9BeUc3sJ582P7SCXRGhQ4Inn3kPszMJ0Fgz6q97ZeiYofkA",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza Barberini, 9, 00187 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.9038556,
                            "lng": 12.4881865
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.90516083029149,
                                "lng": 12.4896055802915
                            },
                            "southwest": {
                                "lat": 41.90246286970849,
                                "lng": 12.4869076197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "75f9f9e036d1d86d83912383829d0843fc6c8d2b",
                    "name": "Barocco Hotel",
                    "photos": [
                        {
                            "height": 744,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/117290856329376681933/photos\">Barocco Hotel</a>"
                            ],
                            "photo_reference": "CmRZAAAAF0DEteUDvpB7EhzZ_GybuhRkBN93dHBnZOHVyGRm914GC40r3OJTvA2HfKZe0vGnnIOJv8-NWMeYvS67I_eaBuc_eM-bx8TDCGw5j4lSzgdpklxOlJ1JKWfEM6VT5IK2EhAE30UfbODg7_rmI4vOi4pGGhR8L4S65e3rOjW4hUIYkfER3tHiFA",
                            "width": 1200
                        }
                    ],
                    "place_id": "ChIJlVd5JFRgLxMR_rkYdcz-yc8",
                    "rating": 4.7,
                    "reference": "CmRSAAAAo-fGqidrZFd5MO1las60EFs5P3D9kxg40I9l17x0p8MpdxXjuBF6Xj1kSXK5US5ElfcMx8E2hTm-_EhBLo9LSTyw8VEolkBZieMAyQzGeKUjThwvOz5XOj2OZu9Akl2jEhCM6YoIz4nzOS-ILcM7djfAGhTcWk8Sfhm-BA-VYKy_6mpaPZr2TA",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Giulia, 62, 00186 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8982249,
                            "lng": 12.4662437
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.8995890302915,
                                "lng": 12.4676231802915
                            },
                            "southwest": {
                                "lat": 41.8968910697085,
                                "lng": 12.4649252197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "4847f8b188ee120f8b34c5b16624508f118a5edf",
                    "name": "Hotel Indigo Rome - St. George",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1405,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114064085781718104406/photos\">Hotel Indigo Rome - St. George</a>"
                            ],
                            "photo_reference": "CmRaAAAA7_6M3QJVd7iP6TttUdgqpfHnsU_XHtHs24opoictu9iQd6pnpgTMqCnTe-GQeEFgdlwjCyPr0fIRyiqw0Ts1EFf8_srwFNGMJWTht2A0kv9rzzNYTkesi03qp3mivOmCEhAytdiAj0G1_KQXVnVgZar1GhT7cPKQK140Pxp1KzX9bnMglkvJxQ",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJR0hNe0NgLxMRuNC9n_Dmvi8",
                    "rating": 4.5,
                    "reference": "CmRRAAAAd5ituF9R-s4hIJwKb9U1Mkjp4rGN5hqM2_Ro2VFdbJ8sG-GbguztvUL_3xfwnB6b4_OTZrDGkpxCNeXPxxE2EQU1qyUG8H3-rq7jHOtmc3fYwg10FrO3pX6VlWI7ejMZEhDLQnSXndw4o2WmMg99B6lJGhQ8402LBZo7DkwGKpNxQr5W87LGIA",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via del Vantaggio, 14, 00186 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.90870099999999,
                            "lng": 12.4755791
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.91000478029149,
                                "lng": 12.4769264802915
                            },
                            "southwest": {
                                "lat": 41.90730681970849,
                                "lng": 12.4742285197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "517d05d0b067f472a433b5eea81838f5a7686cd9",
                    "name": "The First Luxury Art Hotel",
                    "photos": [
                        {
                            "height": 1367,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103507764775943050493/photos\">The First Luxury Art Hotel</a>"
                            ],
                            "photo_reference": "CmRaAAAAshAv3wMYqATtV_bGAj_BJvn14uurI-QLeO8_Q-MBK286i1Zwu4--tfjwWQ47wKzq5Y_wunlqOz3NlOM3Nd0bmQXJNakHLGa0PojRNmeWLW_5dmQPkZzLEGIlVx611ozkEhBvL1sviOcVk1EbmleWP8AzGhSgO4Z5GjwJwOO48Fk7vMDcguBhzQ",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJkYnSJ1ZgLxMRinaZxWR9ahk",
                    "rating": 4.4,
                    "reference": "CmRRAAAAU6A8JA7rxpfQssoA1ObYUu6RSi_hXeTkky3r1p8Av9cgTRsAIaCmK_qN4Ut8byFZs0zeCPz56HuLyI66VJ0taGgmf9HbVS5ZwzU7kWPQ3yzbpkJ5jlGer_YXVQnxmp0LEhCeqYG8Rks_5GayLq8SjZEEGhToQ7nFAQygrAuLUz6sxF84-P1rMw",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Margutta, 61, 00187 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.907337,
                            "lng": 12.480994
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9086848802915,
                                "lng": 12.4823411802915
                            },
                            "southwest": {
                                "lat": 41.9059869197085,
                                "lng": 12.4796432197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "6ca0d11d8a70f298b35adcde1fe99ae8eddfccaa",
                    "name": "Hotel Manfredi Suite Roma",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 500,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/104406872816167361208/photos\">Hotel Manfredi Suite Roma</a>"
                            ],
                            "photo_reference": "CmRaAAAAF-zYugCEJ8gKiJlJ8RmCVKSuUScIC18qMGkdZYYEHGB4hdAXaqTxqCgBukVfNr-RE4BlgcWvUTaUNO8FTAqavC8KXlU0WG1vZhYm4sxEjl0AEUDG3CbIMB6Z7xSukKTSEhBjfWJ_FRBTVSV4jLn5F6SmGhREd3Ht6JjZHw2WtP1699UXmxZ29g",
                            "width": 750
                        }
                    ],
                    "place_id": "ChIJS-O0nVVgLxMRqD41ulrD9s4",
                    "rating": 4.8,
                    "reference": "CmRSAAAAZnIql9O7bFIErmXV8jNRGYrRj8rpRfkPJp0tG3QziYOVGEHPhP1V623ouDAeX_Uh1OeZK1Vye6rmDAhRaBLjpdXx-qep5RE2wIROImYqoom90hVpy7b72tZgi4t7gh5-EhAM_IxcBAXIzMsIRm-942htGhQVjp1bU__B9QpzCnL2Zs4rZbkNhQ",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Vittorio Veneto, 72, 00187 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.90707769999999,
                            "lng": 12.4898787
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.90847988029149,
                                "lng": 12.4913050802915
                            },
                            "southwest": {
                                "lat": 41.9057819197085,
                                "lng": 12.4886071197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "e9496cbe7c4a0c63efa51f16900e9f40049890ef",
                    "name": "Baglioni Hotel Regina - Rome",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3264,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/112533476645194605916/photos\">alexandre torbi</a>"
                            ],
                            "photo_reference": "CmRaAAAAhxS0MSUjgaw4Bzuv3HoR8nzrOa4lEPTj91-Q3PNvL4AL4J7BD_EpSz7B5DP2DgVYHsyU26EESQVUj-MQkLlvmmE8UqHYWgHHFLR5sKxVHikxuqNCaaFAQjwShRgPdrRWEhBtF7c4f4OqaH8xXx32iawXGhSY8h3xgR9v6QF5FeVrqy06HzYipg",
                            "width": 2448
                        }
                    ],
                    "place_id": "ChIJSXC_NKphLxMR-W1fh44pYOY",
                    "rating": 4.3,
                    "reference": "CmRSAAAANvoRCMGL0Ol5Wcxa_LfWyRN42OxeNfqA1P-3084u8oSghbk-s9KpZDcFOWhB69w8_JW9t40krhFnlfOEBeB0QtS3Y3BOLAdoDOo43miUbdwvEOpxPwy6Uu6Kd5l2YhYWEhCuSbnTGXbO0ax0fLJ0KluXGhQUkwuIP85oD7-B5kpoUsghbNiFrg",
                    "types": [
                        "spa",
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza della Repubblica, 47, 00185 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.90201099999999,
                            "lng": 12.4959075
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.90359898029149,
                                "lng": 12.4971789302915
                            },
                            "southwest": {
                                "lat": 41.90090101970849,
                                "lng": 12.4944809697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "32879eefa5588d313d4bccd4186970a9a09ae545",
                    "name": "Boscolo Exedra Roma, Autograph Collection",
                    "photos": [
                        {
                            "height": 1536,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/102996417465605078328/photos\">Boscolo Exedra Roma, Autograph Collection</a>"
                            ],
                            "photo_reference": "CmRaAAAAUcBsAV2933Q2zKspFwDdOZxKNgqGavemXMw332B9p2KQfEW707DB0rqY43o1nl2olX5gpwHg4-_y4_EaYrLFLRdlBAkI4lvUMjV9KafXahFQS-bwjd10cUrnFC-1zVpVEhCwLB2VLwWDmm1NRpaLfpz0GhSVTfOOlwG6HWdteBZ37XCbDGcHog",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJlXtiEKZhLxMRklV5HYf7P0M",
                    "rating": 4.5,
                    "reference": "CmRRAAAAVjgpvyb5VIxumPk8yNnzpYqrs-Wy0drU0q1Hg0IA-Sa_sM888NRh4KqSlGCQkQaIbe8p294mIEGK6XUUDIJ9ocDKbK5gTbBHG6tZQDaXeMuVIbbj6iPNHiFo9PO1hEYJEhCgd7LLgjljB-LUdAV2jWQJGhSXIryKpdmfxpqcoU3wlZh4W-ffmg",
                    "types": [
                        "bar",
                        "night_club",
                        "spa",
                        "lodging",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Bocca di Leone, 23, 00187 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.9053494,
                            "lng": 12.4802824
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9066651302915,
                                "lng": 12.4816964302915
                            },
                            "southwest": {
                                "lat": 41.9039671697085,
                                "lng": 12.4789984697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "5d5734bde26d35f631aa0a802379d5a986182d1d",
                    "name": "Portrait Roma",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 550,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/106656984882951939198/photos\">Portrait Roma</a>"
                            ],
                            "photo_reference": "CmRaAAAAd6OK-5ozSpaU5vjh9mM9D87m44KQq_gszEWOsdWKasXjuDB3Z6q7Dut1PIw4ENHU34S0FyOqg_EALdr0p6azmac1pa7NlspbXljyd2LARgvOD4nlyW36b1ujG-kNPOjpEhC3lTu482cp8anYbVlQTgvtGhQUU3BNnYG6m9k2isNmYcuTOluumw",
                            "width": 1000
                        }
                    ],
                    "place_id": "ChIJVWAyUFRgLxMRIpEyP89UFys",
                    "rating": 4.6,
                    "reference": "CmRRAAAA4PBI3Uj1L6a9-sXjWn_9wa-ptpvAT3VvX9uUo5m4-GvtZC4kYr30bmlgd_un01x7EiqUsYlR0-pBaW3a-Z0s5YY1FtBF28K9Exu7Edr_glsGt0RddxeoezaldsNVsx1gEhBNQq6IpKaOAZ1P9kh6hjELGhQJx8Cp59_ZnDheWkZHRnF_ZCJ8fQ",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Vittorio Emanuele Orlando, 3, 00185 Roma RM, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.9040717,
                            "lng": 12.4948729
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.90538593029149,
                                "lng": 12.4961684802915
                            },
                            "southwest": {
                                "lat": 41.9026879697085,
                                "lng": 12.4934705197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "9b5e17dba0b9680e51688df4c66bb505ed6fc808",
                    "name": "The St. Regis Rome",
                    "photos": [
                        {
                            "height": 2768,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107046974542795749082/photos\">The St. Regis Rome</a>"
                            ],
                            "photo_reference": "CmRaAAAAF-JGF1Gc0ftH7CPX2bh20BWvePcrFklCnFMO1vfIu62xtJotY6L8nxkwk4J8_yMSvQayl6DcTyTWnetaOdgMUGtZBdrLeVjjCI1KK6YFbACgrHjxj9Qo2LEQupItN3HrEhDknfxgTEVASztdgDz502orGhRx4bNmgpUC9Mc_e8k_UwJzk3jLXA",
                            "width": 3840
                        }
                    ],
                    "place_id": "ChIJx2SA37dsJRMRK89K-Hte_A8",
                    "rating": 4.5,
                    "reference": "CmRRAAAAO2MOSD5aN8T5C4XZ-8sdErW5V81MNnXJTI3MCqkaM8GMol05LIj1EZyH0w9aEySGPJYL7eVyu4xahdkq0QT7npoI6zkSh9Iq4thnb3HXGi5Zh4tWUR_Fkylew5c98yaCEhAwdQ8ZgRb2nGROshk2jdheGhTeK-xxe3-R00ee_Z2DJHaIgEM8BA",
                    "types": [
                        "lodging",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Alberto Cadlolo, 101, 00136 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.918896,
                            "lng": 12.446661
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.92018528029151,
                                "lng": 12.4475285802915
                            },
                            "southwest": {
                                "lat": 41.91748731970851,
                                "lng": 12.4448306197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "a7f06071d60b9f53a3928967de29dcf8137d3863",
                    "name": "Rome Cavalieri, Waldorf Astoria Hotels & Resorts",
                    "photos": [
                        {
                            "height": 681,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107043673076650089828/photos\">Rome Cavalieri, Waldorf Astoria Hotels &amp; Resorts</a>"
                            ],
                            "photo_reference": "CmRaAAAAJ3-kZfWryLa_5Sr6vjjWHmpFL8XhLNvRY8Q7s3CqQPTxyoRY0FXNWPJDDl44zL1BeE3Ft9-wR83hGFkoa2TdchMTEktfMc_aDx0PxXg1bJa8Jah_L9zjwp5FYIIMR6sSEhAr9J9XR4aU8te7DJ_JmJHgGhS9PSllWBUPmyTaHbcBAD5VwF4Mfg",
                            "width": 1024
                        }
                    ],
                    "place_id": "ChIJHw9AUoRgLxMR5jT9M_JvJeQ",
                    "rating": 4.6,
                    "reference": "CmRSAAAAaXMKNH0nNGpt27Q-jPS_azlWi2U_7_-214KOwoYRIXAfPY0AWXrdb39buc3PTB-xQmRRodeQ-4Rfd5Vz8YQQHbUUYGqk2Z7SPBrBn8nzd3GaMLn7-UeFl7ra78aNVWkaEhA8R0fFMHb8oKFtEhLdN8SuGhSaUcprzTJ6jw_oG6d9a8xLH8T7aw",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza Barberini, 23, 00187 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.90393359999999,
                            "lng": 12.4890981
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.90526403029149,
                                "lng": 12.4903795802915
                            },
                            "southwest": {
                                "lat": 41.90256606970849,
                                "lng": 12.4876816197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "337f02b5e67dfd90afb773b2345129045e4441ef",
                    "name": "Sina Bernini Bristol",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 450,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/101856401984294286185/photos\">Sina Bernini Bristol</a>"
                            ],
                            "photo_reference": "CmRaAAAA840GZNt3BC7fc0F9sXbPIkajk1PmDqoEoqcVN7hzSUtmD9P2OCwxTWyZSwWCtUEBxlmRkqCWNnCkfDx84jisyxLfLeUYQ-xSRcLnmDd-oPySX82kM5y3tkOcCNATfPxcEhDiqlgLdFSwKP1GENPsYiugGhRWS0JMEo3XmJe6yv8QA1TfEiINqA",
                            "width": 799
                        }
                    ],
                    "place_id": "ChIJeVBw3KthLxMRezubMNDacPk",
                    "rating": 4,
                    "reference": "CmRSAAAAibrt8fPiFhXdc1crYyH8aeF7s4wBpUk6dRcbSMji_zz8S6DIQJ9vGILXDqjuopjE06ichosnMvLBOIGJHCHDnbZs7fm4zgYk3hFiTGKjiiRfGfbItwzBK1pSaEouNQkkEhA0Lc2AfzfHRvtFZ0EVVedQGhTEoNURPaqdCNw7IYtz9dUnlfM6EQ",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Ulisse Aldrovandi, 15, 00197 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.91881300000001,
                            "lng": 12.4848226
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9200509802915,
                                "lng": 12.4862429302915
                            },
                            "southwest": {
                                "lat": 41.9173530197085,
                                "lng": 12.4835449697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "cf9157415c022110e99f632bc729d0f113e4989b",
                    "name": "Hotel Aldrovandi",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 788,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105048270189148178225/photos\">Aldrovandi Villa Borghese</a>"
                            ],
                            "photo_reference": "CmRaAAAAobAS7nYGDeXgSYRmQtrlWACjedwCH-32jXyrPArrIWAnBlOgBiBGh0qhacbrocFXnMxsLOJaChbvrLLofmJHOYyshL47L7M_f8epy8ogdFRYH4Qdew6NlccZN-iRag2QEhCuGHMWPYZDw7InzJ7X80ccGhTZpxp0-NpZnRVWSv3aXaOnS2XkXQ",
                            "width": 1200
                        }
                    ],
                    "place_id": "ChIJp1wwQB1hLxMRVVQOJirA4vg",
                    "rating": 4.7,
                    "reference": "CmRSAAAAGx4puHgPLdikKEpZLxq68A7NDyD5hdYxhLSsT0gpCLMy9sKi_mouQkgyh8krn6goPTOWNGyT3MJuTPrgI-_yfU0IfAyOGtLupBph83E1C01rOocQssjhE8tJr3YKwgJpEhDFAwEJBp3BmwxakJu_solkGhTC9uwwbFyyjW6juJUg4wZEKTcjIw",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza Navona, 93, 00186 Roma RM, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8988194,
                            "lng": 12.4734482
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9001659802915,
                                "lng": 12.4747411302915
                            },
                            "southwest": {
                                "lat": 41.8974680197085,
                                "lng": 12.4720431697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "2d49adae6ac08a59bed760e92d0c1d2b3086c712",
                    "name": "Lifestyle Suites Rome",
                    "photos": [
                        {
                            "height": 2002,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/100026801966681224087/photos\">Lifestyle Suites Rome</a>"
                            ],
                            "photo_reference": "CmRaAAAAuH8pmNmDWAWyoP-7t-T0BOo8em0Sm7eLFUh3kTVaUHYTrkeUKKDyOcMAiGD1ZOKJy8PQ08Hdkvz0jXKHfD1qKsutZZKAi_ABDrnRreXBEPb75IXM2z0NddXrvghLW1okEhDppvu2Ld8PTImpR4bPPB9bGhQs7QLMCE9_AN71H4rYey9Eu5BVyg",
                            "width": 3000
                        }
                    ],
                    "place_id": "ChIJX1A25E9gLxMRFw9aVOJQ3BE",
                    "rating": 5,
                    "reference": "CmRRAAAABf_sISBhTTODeJAsbFeni_nCTG2PteR2-k8ScwOyt1NjAN9wPzRbT9L94Dmy8bR1cFztI-UunPeVCyRxWM3wzGdWKiD8EVRIW6fQRVarvsuMBUgR8cLD-GdUwKd3z1VxEhCtiTiJv8h-ZDdNIz8vg9jRGhSpObXNU5jz_DIe26Ki0ToSNlYINQ",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "00185, Piazza dell'Esquilino, 29, 00185 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8978231,
                            "lng": 12.4969563
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.8992982302915,
                                "lng": 12.4983232302915
                            },
                            "southwest": {
                                "lat": 41.8966002697085,
                                "lng": 12.4956252697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "2aed1d72cb2139e8757fba12c8da4d79eb3f16b5",
                    "name": "Princeps Boutique Hotel",
                    "photos": [
                        {
                            "height": 1026,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/113493987452448389631/photos\">Princeps Boutique Hotel</a>"
                            ],
                            "photo_reference": "CmRaAAAANZ7W6ymGYNZNQThZZcT_Z_y8VxjF_pJOjQm9I1qIbAxE2Giywe_oLcqSR9yFZDnWTQCPIJjnZzbD_r13tRO-rIX1XT4kilvueUqlLQTXvAoHC6xBRG7l3cjDuo4Wq7sCEhCKBNtCRhhm31F3BToFgdsPGhQxzDljpOxbedsdvvIrq4kwWmGp4A",
                            "width": 1026
                        }
                    ],
                    "place_id": "ChIJzUf9FKVhLxMR7D-KnC_K_eI",
                    "rating": 4.6,
                    "reference": "CmRSAAAAG118DAXRvsLAXDwlaYjZO9NCB0i_kJAsFLqbhhbI2Vf4fGiW9vBqCTicxE9RRXIhcefgqB_59pMr3SGNnCpzkAIiDvK9a1kkcQ7_RK-ap2nUjPIcWMVcf8MxBpyYVaiZEhDCGrvnA2gLMhTpP9RB4pQaGhR2Hfn7d9YmJHvBgZ4LcZpPUkjRZg",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Marche, 84, 00187 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.90929550000001,
                            "lng": 12.4899692
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9106564302915,
                                "lng": 12.4913662802915
                            },
                            "southwest": {
                                "lat": 41.9079584697085,
                                "lng": 12.4886683197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "661a5552d37a12026e2efaf4a619dac4cf341384",
                    "name": "Hotel Golden",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 852,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107578558069098445573/photos\">Hotel Golden</a>"
                            ],
                            "photo_reference": "CmRaAAAAaAlvB3qqHIiu3wLDeHCFazFjAVC8tKRuWkrVt8EYiF8o9Mbmo7f08wkDqPFNz_TVBL2C2bf-MhAmxYSt5PcwrNuv9qZP5JvpwuD6BmG0tuV1tQOdYmLrjlAk1ZMwjGXXEhBaGKaHdfZN46VmXrkRUM2WGhSEsZ7VbG6Byw0mF7IW_v_OjcRV_Q",
                            "width": 1280
                        }
                    ],
                    "place_id": "ChIJgaAQLAdhLxMRyiXJ18XrAPw",
                    "rating": 4.9,
                    "reference": "CmRSAAAAgsuHRHdAUbMY5lP5LzKSNzZjUQcI_D4ef5Yeh_J4RfeLbv8txwBgarPcvSgTM9WTwruhyKJk8L_dgwyrWib0eRiPYbACmTk5cWm12BbQg7ghRVdfCOtCrlFGdU6sVoKTEhBwvMQVTptNi7rn1E3hl1vzGhRDhE221f2h4XuJ3A_8NlDwZY7_cw",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Piacenza, 4, 00184 Roma RM, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.89907669999999,
                            "lng": 12.4884775
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9004841302915,
                                "lng": 12.4897664302915
                            },
                            "southwest": {
                                "lat": 41.8977861697085,
                                "lng": 12.4870684697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "68ef5d6cd6a9d711168c54e796169644ffe3e653",
                    "name": "Villa Spalletti Trivelli Hotel",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3024,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/109606448507513841520/photos\">Lex Redding</a>"
                            ],
                            "photo_reference": "CmRaAAAAL3GRhClZjT_Hh_ls-p93DUsgvk3WTjVu8Bs3wvFptDvioakf4ku5ak_whriD1dVenAMF4fz2FtUQA0xRWh4pdUe2HM5UAYJsx-OnnQ0OA_egCIf6dMZqg2rz0LBqYEZkEhDZPVjPtKSsDdCt3qoqyedkGhSpaxdOvxqfOpUPCed2w5nv4W1klQ",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJJ5Qwx61hLxMRt0M5aa36Ot8",
                    "rating": 5,
                    "reference": "CmRSAAAA3Rv1_j7wIQwGdxBCeS0Pb2rXoEAZzHHsSRUW4P7tZhVg1Vlby47j3lYYF21swfT8aG2mFZDFMOtVlZzXGMLl-RX6KTsms45QrZi6uxT63SuQ69OEF1_BHyhOxDzo49VVEhAH_HWGs1urSblKXPqXO1xcGhSwVY28E3kdVRfKHiCxhToIlu5NVg",
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
            "next_page_token": "CoQC9AAAAF6t1YnnlOcyXyNwLlkyt2mtCJ7l2njXvd8kaMNsk7IwqZaWOk8XwGB3Rkx76wwBMxIwONswToTSSx6BByLxm_9dhs2O83XRp9XENaUuJNghRhRdxDc4J58lQ9HZIm5UTM0ZvX4GkB9HK0im28Q46nh1vbiiHrXedh83oW7OoIox1k1DHR3VIi6QJUCocw_siUPWzfwlJ7Et1sg7TPahcEQnkMeLmYIle-gI-28DrQZfUexpsAkcZb5jwhLp4WTn_VC8F3N84J_dKkWb-PCiq3I9SigWklCXsrAQTcOOZlZZL8JxakVt_LQ0B1bksvwr4vtHWiBj0kASXHDZu9xWzyMSEFgRtFeJ4X6UQsead9mP41UaFJGXlOHt3csS-dapM0Nj4R98qqKu",
            "results": [
                {
                    "formatted_address": "Piazzale Aurelio, 7, 00152 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.88826330000001,
                            "lng": 12.4611673
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.8896553302915,
                                "lng": 12.4625027802915
                            },
                            "southwest": {
                                "lat": 41.8869573697085,
                                "lng": 12.4598048197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "3303a6de561346384d618afbc8e993ad3dcfe914",
                    "name": "Antico Arco",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/110654310012273127893/photos\">Fundim Gjepali</a>"
                            ],
                            "photo_reference": "CmRaAAAA8MYeE-MXNJ8TdXtrSdvI7d08H2_VLDcxt5FiB_PR7_ou_M4y9NJslqpzlUKJrrA-Hx414jVDlsu28URwbicQ7F2jkxCHrs_fCX1aV7TOCS7OTGcuLd_2mj0zoTtivy4LEhAOM0SknxAGlvZTNlL__BysGhScCp4lVp1MAvxvirZEzuvpjwIdXw",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJ7_1igBVgLxMR3Q7UNNGH-sA",
                    "price_level": 3,
                    "rating": 4.4,
                    "reference": "CmRSAAAAcCv1yrR80PFPLv2nIv4WSXeRK0XJqApEhH6V3HKhg4CFilv3xAvKvfwVYC_TdG8WcSwc49arFra-yuNgpeAycWQsuCdy2uZhozMH1OPgFHSctMqMvelYyN4ChcgBPB7uEhDd6uVdMULh6JvDNwYRYeWnGhSaFp-dCkSZSiuvAEKv--Y4Ruo8lA",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Salita dei Crescenzi, 31, 00186 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.89910819999999,
                            "lng": 12.4762405
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9004063302915,
                                "lng": 12.4775833302915
                            },
                            "southwest": {
                                "lat": 41.8977083697085,
                                "lng": 12.4748853697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "c72aa08296cd08c29cdc8e599f3d26a7a80e431b",
                    "name": "Armando al Pantheon",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3024,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107396944078630829224/photos\">Jelle Van den Bergh</a>"
                            ],
                            "photo_reference": "CmRaAAAAtKx4VI5UKeZglnDeMJhWxbCk6uuxSGh0AtC6HiZo4g2eOR32Gqn2F9SLYF8tNC4eNWVVuph7q967leTdE_ifG0Rf4brUzQVMiYMUkJscauBuvCMC3amxI6Rw7lbDa2nhEhBBv2NNR9DRM4OTSYQ_W9BBGhToOuXcmBFSQuDxyuaWQOAxsCnLVA",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJcwb92FFgLxMR_nDe5ODn_ZE",
                    "rating": 4.2,
                    "reference": "CmRSAAAAjXj2bE-0MqaXAigR4YzeWACg8uTp3o-dzu5eOKv7Uay-TwjMo7LtsReixacOi2Yuz4UBoVO1H9Yl-C0WBbtqEBvd7aPcLMDyzPbMIEg8ABqYQfw7eHQiCtzdMN1ojF7XEhCANg_ihThwPrBH8Wrru6oNGhQpi48YqjmzWN7t9HxLl3KmUSdvsQ",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Federico Ozanam, 30-32, 00152 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.875751,
                            "lng": 12.44774
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.8771509802915,
                                "lng": 12.4490332802915
                            },
                            "southwest": {
                                "lat": 41.8744530197085,
                                "lng": 12.4463353197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "7cef31c20ae332a5175951ba13c66242cacc2d03",
                    "name": "La Gatta Mangiona",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3264,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/110087546023981382737/photos\">La Gatta Mangiona</a>"
                            ],
                            "photo_reference": "CmRaAAAATyhwDNhtZIXg3M1aEqW6c6b6mEQuizGtrF79hS4ExH8k7WU9u9eVVNIFEw8BeZkVwkwznMp-2QBvsw0n80oHfNzs0cv_MlColwb9Lkx3I8w8dPgZuV7kMYWjvoOwJjkdEhA9RUDYk_i04ZmRNGhQOg4OGhRGIV27DFPYuKC7HGf-LLEMOM58xQ",
                            "width": 4352
                        }
                    ],
                    "place_id": "ChIJU1VgGgNgLxMRxykaY1BwCQA",
                    "rating": 4.2,
                    "reference": "ClRQAAAAfo7pFFnMy598Kc__oQjrwx6fZ0CfG3AAAKN-z_XFh3ii3pf18CZwI2qywx-FhEuLPOjclqEI6VHlBIDRjcq-FfbIlglCw0sh4oZX83Yrg_ISENAVJCaYFfyDLMMeCl-zpHwaFKA5_9CHJURgWvh41TSVcDT9ZAiW",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Alberto Cadlolo, 101, 00136 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.9189892,
                            "lng": 12.4466609
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9202931802915,
                                "lng": 12.4475513802915
                            },
                            "southwest": {
                                "lat": 41.9175952197085,
                                "lng": 12.4448534197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "63e3396a81bc53226319f350b3357ebf3129e26f",
                    "name": "La Pergola",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2448,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/108843061367963150091/photos\">Coast Group</a>"
                            ],
                            "photo_reference": "CmRaAAAAhSAI9ftKi73vTIyNThOxQFurO6FIEi0sWq8VyzwnTEu7vGanxALHR89Vip9y7Q-OufX483ZcGMUUy7olOo2FBhrMH3z363oFOmwOTokpb6WaOM1ilMymv3Kdeu88BcdtEhDwTHIV3GfAryUjs9iJaB7IGhTqCtqXnFaUwozrZksl-NMBXV0UFA",
                            "width": 3264
                        }
                    ],
                    "place_id": "ChIJHw9AUoRgLxMR2Up1TWI6ZS8",
                    "price_level": 4,
                    "rating": 4.5,
                    "reference": "CmRRAAAAdkgi9KHvBoOCUOASQdLlZosBXeYYi6gG_-c6dDaEcFCUZ6KckFmtH6mMVVHfQRU2p-Sxanksf_MNIMGlZouyIM4au1klwcE1fgVYA8aCtGlmsCzrxEP3mN_3KtQvpWzCEhBCvXwkAKdSXLadPqhTC1TfGhRP2sezYup77dEt0Nmj7AhALxZLXw",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via di S. Vito, 13, 00185 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8956851,
                            "lng": 12.5019557
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.8970635802915,
                                "lng": 12.5033395302915
                            },
                            "southwest": {
                                "lat": 41.8943656197085,
                                "lng": 12.5006415697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "4b8804f91bec6ec9d577e874eecf3b6390909801",
                    "name": "Trattoria Monti",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2304,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103098301739023846101/photos\">Andrea Tinetti</a>"
                            ],
                            "photo_reference": "CmRaAAAAoCQTU_WK-9_5MsgcHLTCc9i6O2A93mRaPQLvPt0KJxVsHbG8Ok67qplZVqb_YUoiKZhTxMR8Fd7Zeu7j6SoLxc1C1Ze-UNqUgX8qQF9Lm--8W2xGdEp9T8vTlFZ8mddxEhCL_3DHeoDuLk5TE3M8vYm7GhS14GkYE-gKiF3Zs2GM6x93Go7fvA",
                            "width": 3456
                        }
                    ],
                    "place_id": "ChIJC5hnqbxhLxMRh7PX5swtzyU",
                    "price_level": 2,
                    "rating": 4.3,
                    "reference": "CmRRAAAAxPqd8C5sPEvcLrqj2kfdKRazAbKHwDpOE_qeKjJLGknEAN92FKUWFGThd8UgPHC_R85O5p5IsjEBLlW7g3BO_EVbc9LLO3onTo3PmMAz2bgIU4N44_IEy06QVlfCdVEjEhCqpypdLFci_uBesIrysgikGhQXXPYXwSX6Idk7i-VSYXxMzWOJqA",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via degli Avignonesi, 22, 00187 Roma RM, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.9029494,
                            "lng": 12.4873527
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9043317802915,
                                "lng": 12.4886851802915
                            },
                            "southwest": {
                                "lat": 41.9016338197085,
                                "lng": 12.4859872197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "c8bb514951768cffb8fbaa5bb93b088e055ee026",
                    "name": "Colline Emiliane",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114825244922802183409/photos\">Bosse Wikerstål</a>"
                            ],
                            "photo_reference": "CmRaAAAA_3cJ3kFxdf9iZ4u0TNX09E0u-oF9KL9P6wiPIO04fb12LV2n8dmj_ipAqEWnrTtmh9bi62iY0LScDYf-jvXbZbGs8ZudwQE3yqTCjhnU1QwgVY7tEwe4Z2D4uzFeS25IEhA5RHcO64j8-fIrLnWx_Kx8GhRhCeT-d6MhScUkJna9s7ovCIr_jw",
                            "width": 3984
                        }
                    ],
                    "place_id": "ChIJYRcthKthLxMR-FPfbPYbePI",
                    "price_level": 2,
                    "rating": 4.4,
                    "reference": "CmRSAAAAUHOBm5GuQv4bhQIt164u-Imu-tnd2Xhdz4joDnGJ1FCoWWf-LGkIjL979e2monHuUy3L3ykS46BSU0ECi49apIp1SS1-MqXLqQUALboxDapCOSRaxV_m8gzKbKLC0kROEhDLDlq_aeEPbiFlZBjw8Y3dGhTYKx3NKmRpiY4lyiqSGoo0AtNfVg",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via della Madonna dei Monti, 9, 00184 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8940615,
                            "lng": 12.4884778
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.8953673802915,
                                "lng": 12.4898371302915
                            },
                            "southwest": {
                                "lat": 41.8926694197085,
                                "lng": 12.4871391697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "60453836504e27b11e919782282cb705a8cd01d4",
                    "name": "La Taverna dei Fori Imperiali",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1154,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/106604569541128653539/photos\">La Taverna dei Fori Imperiali</a>"
                            ],
                            "photo_reference": "CmRaAAAAZmx0ESTo0JbPDDZXaYDhx1-ct0gy9EpzWGS_J72MSz-G_lZ62Gt1iM49v5zCGAuMZEEiRuJtGeKVKxTRpAaMjwf5vBY9q2u4u4FWfpSLTm6iW4F92ZSk3lIWIHU7bKFeEhCxLu2fz6Ud4b-yPVzMwagzGhQTSU-YyechIw4wMxJFel4rPxlNpQ",
                            "width": 1153
                        }
                    ],
                    "place_id": "ChIJXdzO3LNhLxMRtdzzdg7hqW8",
                    "rating": 4.3,
                    "reference": "CmRRAAAA-pdzTPOLlN4RhTJV4NH6sVavxvQ7jEf7zJaZEqvHWgPkrRr1nM6xCQNs6ZXf1o5-3BVMtOBUvAb97puhq5JWcOc29dE1yk05G3RZHbvVpw7wiuUg8a9YGsF_oTDOnbEREhA6TQqj4tN53dYnaI1KiAxOGhQqIfMjMQrJV3l4nJWr763JraYJsw",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via dei Gracchi, 11, 00192 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.907074,
                            "lng": 12.458351
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.90838323029151,
                                "lng": 12.4597181302915
                            },
                            "southwest": {
                                "lat": 41.90568526970851,
                                "lng": 12.4570201697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "aadf4191bbf0eab67d8b781e2be262b5e09ffec4",
                    "name": "Panino Divino",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/100579350888882107467/photos\">Winnie</a>"
                            ],
                            "photo_reference": "CmRaAAAAps-VrX-7-H37b8R0qZOwUxcCCRlhZX01p-G33N73YmQ0zXVml32K6GhF8an7i5AqtWZ3ZRm3RoCEIfskctGK7LLOPjtGMccPQQJ_EX25SDsYtSKWqlDPFd9xy13OBLywEhCa2N3XUffp1O_MrGnlxr26GhSjE0Yxc0BA__X4EXIag6qpgw4BjQ",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJK5xQ3mZgLxMR0SX4Y9-kgnM",
                    "rating": 4.8,
                    "reference": "CmRRAAAAlDE1D6s7DtaeUmfqkYRyHvyC4dABU3cY2D-U9rkoEFe7aEtzWVnaOPu9PNd6jVPnA_YeYXNstMlT_7nFcQSt5QyKBdszs0MgUFW4k_x88qFJfAv_IJQDLiWK_Qu9Q05fEhDKxe5QfvXFfITOajXt1wmmGhQA18V5SIvw5faau79EtDSv-_uJLg",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "store",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via della Panetteria, 34/A, 00187 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.90188980000001,
                            "lng": 12.4844988
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9032260802915,
                                "lng": 12.4858176802915
                            },
                            "southwest": {
                                "lat": 41.9005281197085,
                                "lng": 12.4831197197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "9eede639d1d01db5a1566e77c6264223d643e8e2",
                    "name": "La Prosciutteria",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 346,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/108193797233108948368/photos\">La Prosciutteria</a>"
                            ],
                            "photo_reference": "CmRaAAAA2_nK1-N5zUvyNs-gI3f_R4re4zQoNft-F671Lsx13xzL6EcQQ_1bdjUzXOHDsYluI3Re_fqwCHXxrigxw1krKmLU1DxHgpksVLjiXY7ruTUwKMG9Xp9Ni5c3c1heO6a2EhB9lXJkN908ejvfpzYJSAqkGhQ08reMZw90JhJqT93Z_PPHRp-7pQ",
                            "width": 346
                        }
                    ],
                    "place_id": "ChIJCe8Et6xhLxMRBrtgyil1ubU",
                    "rating": 4.7,
                    "reference": "CmRSAAAATxlZVH0we3_rugvoVYSIwQcFcigNZpcFOHvzNs2BSLtu5azhtXBuyjEBnLNT-JtWEz5r7Ptv0H2a3KsRY4BXSVJ4ZbJnVZn8ke3Fa_cnbcIx80RrroMfhmNpMaxdyPhQEhCaGQ0HNIqZhCdX9x3_ltFiGhRPl0EznUWyRX2Ik6NV1gf6yy27-w",
                    "types": [
                        "meal_takeaway",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via di Monte Testaccio, 97, 00153 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8765459,
                            "lng": 12.4759881
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.8779134802915,
                                "lng": 12.4774318802915
                            },
                            "southwest": {
                                "lat": 41.8752155197085,
                                "lng": 12.4747339197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "36b782fb1a6f0c4002e12b6393ab8d37fd006585",
                    "name": "Flavio to Velavevodetto",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1365,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/117448699495527096505/photos\">Flavio al Velavevodetto</a>"
                            ],
                            "photo_reference": "CmRaAAAAqhfCoSXV27GzPnPihFJ3WDW5y0SjSsh8nd_8OPur-I4cf8QxDIvNal1mPT1NC-miKM9BxtwWsTYvjbjZnRLx6WEh6jaayB1t1EbHbhJ-zbO6NRtSECeMSKBaQtGViOL8EhCbHrDzcedPU1bk3uHJE5YmGhQt_6Ptut8kz2_GkAst-KcObQlYBg",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJIdoK9y5gLxMR3ocPcmakVLA",
                    "rating": 4.2,
                    "reference": "CmRSAAAAK3m0CQAyNyO-gIXQUgZWjXb4qAPlYnmeL1M44OUeMyKcXRMYp383x0b242GL5TUMtNQKrAa1j1eh-AyBXNS7SQEXIH_n3j9gkYrJCZrNTrjdHGyQ9FzJ9PP3Xr6ETGGaEhDhxBBex-H1e7LDqNeRvLa9GhQVvub7RiJ8gm8N6Q1TMQyZZ10PyQ",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Viale dell'Acquedotto Alessandrino, 172/174, 00176 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8761237,
                            "lng": 12.5473336
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.8775162302915,
                                "lng": 12.5486959802915
                            },
                            "southwest": {
                                "lat": 41.8748182697085,
                                "lng": 12.5459980197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "8cf8273c0b32e519c228d43debd1b78483a9926a",
                    "name": "Osteria Bonelli",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3024,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/100628340954748398585/photos\">Andrea Tozzi</a>"
                            ],
                            "photo_reference": "CmRaAAAA4jaKCZh482_eu1zHKcPz8fSgId7nqnVKBua3rgrHPbcNr5rNfipkork1g4Z8O504S0Ldmf5INfjDMfHoqejj4r0VgAeuKqUIsGrCPUVyHDDcZ78JFxPmmidnWHMsKtb1EhCkplRccFFwVn27mod6E-PeGhSy2TiIK4DRWg6o6Pjs7-NupJBtGA",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJe2TV_RNiLxMR-2Pf1plrpxE",
                    "rating": 4.4,
                    "reference": "CmRRAAAATA0DWiXNvVGo2TU9qTgPscMXhMhEkEKSxgG3QN-4S46noUrI6cjPWzU9eTBLpHGhJ7wUuB6G9gY56onlK-TSKzC7FO5N1PDT7CHyonlxLvyKthzx4UAZBeYyemDpMTypEhB_iBmxMf6Idb4zZbMjIFDlGhRz_4rd6fQNivEuPi3zsYpNay-iVw",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via dei Cappellari, 79, 00186 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.89679,
                            "lng": 12.469908
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.89814803029149,
                                "lng": 12.4712722302915
                            },
                            "southwest": {
                                "lat": 41.8954500697085,
                                "lng": 12.4685742697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "6af90cf0c8a17fdd5fdf6d88af9c2f2dd36e4c5e",
                    "name": "My Ale craft beer & food - Italian Craft Beer",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 637,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/111636167549875136176/photos\">My Ale craft beer &amp; food - Birra Artigianale Italiana</a>"
                            ],
                            "photo_reference": "CmRaAAAADY6uaITpKswhmM-eLsQ_7CrFvYv1K1ebCeRD0yfbJ5-4GD8iC56N6Fteadt86MfiFr6JndsyG4Dic_qdbrsqy6hMuTZZdM51i-yJ1ela3_Yp8VcT8IhaSV-kszxCLCW0EhDqEItBUTCx2JbWzF1wmY7hGhTlp_iTEd-RrpsRAKQC6cySHZiTRA",
                            "width": 638
                        }
                    ],
                    "place_id": "ChIJz-wkrEVgLxMR2d4XrQjQLEA",
                    "rating": 4.9,
                    "reference": "CmRRAAAAs4qkeLYeTR5oqXcLglDQ_g7z2R8hs0CmaGZqYlnbYLOBpPLk935stZTT6xoIPAqzMRHcYaK5GheZ0gcZK37BZFMzNP9UUwwjFWvGOWlitjopzyS5sH_TDeVVb9bjDmn2EhCpWap7mFoWEbwGee2zuqXmGhQCxuq_qgSpZJ4uIu9h06I1yiO5bw",
                    "types": [
                        "meal_takeaway",
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via della Vite, 28, 00187 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.9036181,
                            "lng": 12.4806217
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9049363302915,
                                "lng": 12.4819891802915
                            },
                            "southwest": {
                                "lat": 41.9022383697085,
                                "lng": 12.4792912197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "92e499b213b19aea723c3f441255711f4f1e34a7",
                    "name": "Life",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 350,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/111658888792876238053/photos\">Life</a>"
                            ],
                            "photo_reference": "CmRaAAAAO6clkXzfp1lY7s0ZQE0OqMg0vJhBtvSpZTXwuXgrEecOaq_J31UstD9a_zbyglTLM_1QV6G0UOdIDw9KXQtZlpTOw9ImLWAnwLkzY4f5IgaYfDQbCSsRvEb_04f4d7GwEhAqrAhfR7qO9hq8MerBQhLcGhSUuwr6IRZTqUsYcOfxMOlpkA8CZA",
                            "width": 600
                        }
                    ],
                    "place_id": "ChIJ35zKflRgLxMRV3wSarkFZ4M",
                    "rating": 4.4,
                    "reference": "CmRSAAAAxjZksJ0iJHjhM3wCWQmkvx5sh6MhlwkvY1RtmJOp_f2BAOFSw7x43fczRVNsvRJvkuvsk7CaA4oyXx0zpdtlHuR_JniKacL1vbzsxFpVhOs-Xmers6PDxPyK4f14YbSYEhB6T1dhITvuVHz_R8g7__loGhSLFuMJNW2zF_bp2BNpbTEcbw4CZQ",
                    "types": [
                        "restaurant",
                        "bar",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Sardegna, 135/137, 00187 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.9098783,
                            "lng": 12.4933512
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9112692302915,
                                "lng": 12.4946813802915
                            },
                            "southwest": {
                                "lat": 41.9085712697085,
                                "lng": 12.4919834197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "1fda77715e460ae5458b694198e31e4238e3a334",
                    "name": "Ai Fienaroli",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 300,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105958580382380856092/photos\">Ai Fienaroli</a>"
                            ],
                            "photo_reference": "CmRaAAAATjFq-PwEyeb8HGFmBP4mZAlmbmiopFtxGyTSG1hPs15JAJ_irLGKPoGtEw8XTsNh8xRufL8w4EznJsh9EkAqL_V5a-HpOy4dHxNBPMTXDnFIt_xaUeBG1qQE5bT0Bux0EhC416jbsMrdYSLkVvohtTTHGhSZQSuDDeLn4bzjuo5u2nXXbhlRGw",
                            "width": 300
                        }
                    ],
                    "place_id": "ChIJ_1ILRQZhLxMRoSpKnSqOjAs",
                    "rating": 4.7,
                    "reference": "CmRRAAAAyj4jrMVvBt55tEgsmbSFMBKGQK9HT5kgOA0ce8bsz2Mhj2uyD3NT_GUNXDg2lA1WzQCz74pnS0IOAK1627uJaFHothMWUM8G9UT8QURFrcYqioAMAr5aFAveGbLYcdbuEhAdZRrxO5LIEC_Qsfsl0zwgGhQLJNnmUOh71ud2WUVNwonNN5KBcw",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via del Boschetto, 41, 00184 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.898147,
                            "lng": 12.490223
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.8994950302915,
                                "lng": 12.4915663302915
                            },
                            "southwest": {
                                "lat": 41.8967970697085,
                                "lng": 12.4888683697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "5b0b9c749fe6e7f7f2493e24651f76ad5f20f736",
                    "name": "La Taverna dei Monti",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114142266043334973379/photos\">Vero Waeckel</a>"
                            ],
                            "photo_reference": "CmRaAAAAPutwjJo2qU7nhjyfhLU7zUOwigaE1cWF6tlefYjUh8sGsdpQ4Hfs668E8yhsrvrn1yZMSdxmWDUHXRRGHe7WcXrzaToHrCe5ST7brakRBx8-6FKi_0G5XId4IknrqcGNEhBOSHjfBEj79nvml5gIWLNHGhQpnGUNr3l8kxqrqRFp6Ju9grtnsw",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJsQkID65hLxMR2Y5FKM6tPsU",
                    "rating": 4.2,
                    "reference": "CmRSAAAAqfXeMcs-C2Vagti4YeHgiV5zNLVi1o3VHfUAQAB3ThiCBRIsnD6VwAKlC_ppePXyHHLNzOmswXUSYn29Ztvn2UnuWXQ5DKhjN1OYhin1r47sBTgkpqUCHJ0U41CNqqnCEhAxo1MfzYSOg7ddpHJ62OwBGhSYvC0iZYDFY5-_bShbIOEfX2VtyA",
                    "types": [
                        "restaurant",
                        "bar",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Margutta, 1/D, 00187 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.9095674,
                            "lng": 12.4781774
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9109268302915,
                                "lng": 12.4795611302915
                            },
                            "southwest": {
                                "lat": 41.9082288697085,
                                "lng": 12.4768631697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "ee01967966e5b2b0187ba2b865a1a3bf7ab3a5c2",
                    "name": "Babette",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3024,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/112557074296519039231/photos\">Julio Diego Ponieman</a>"
                            ],
                            "photo_reference": "CmRaAAAADEbhl92XRtQozBcyUcR3bP9ClVB3Zgl5jSxF-Bsp1RpkL4L4S9TfS-wLUPLaklNuivTo3o2oppYCPyJtA95pphAqMN7c66zzRiiUCBtH4mUYTCFd_excHNnlG2T-zXtDEhAVL_7lV9cwVG7kHkbDw2eAGhQMnYpLha-Fbz_1W4NVuhSspmtkFA",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJB3wryvhgLxMR313GXMohFBQ",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRRAAAArjI_sOW77IA9r-DeJLE7zr7-LrpvCsk_Pfwzh565vNXulKL_uZMvn-MELG8zg0Q6km49iKJHfxrkGbqqsV3CTW3Uh3q1Jf5K7kHgiS3hMBzlts632s7cuJEFPvJiL_R7EhAS64VRnyynT_blUzjNCENZGhS1Lf0P9uTPqQIQ1BvbRTaqz_g3hw",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via delle Fratte di Trastevere, 49/50, 00154 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.8879534,
                            "lng": 12.4716522
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.8893013302915,
                                "lng": 12.4730011802915
                            },
                            "southwest": {
                                "lat": 41.8866033697085,
                                "lng": 12.4703032197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "3f4f0e1d7db68547b6d3611a34350cccebe6ed38",
                    "name": "Ristorante alle Fratte di Trastevere",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 556,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107564610349444348242/photos\">Ristorante alle Fratte di Trastevere</a>"
                            ],
                            "photo_reference": "CmRaAAAAN1SJNCQFZIuXImJrO0rGS1R8i2MVeSVds28juORuXl-aMNMA9x9LH11jLE0-lHvkPhyf0293U4vpTNAYxNLQwYf7QxUSxTUamdhjVS6qJWL_rCdhEcdtV6KiDM3jlWdNEhBIeOsIuz5QnwWyYsEk2CbqGhQzWlCz2feFnuJhlQr97GoZIAY-7w",
                            "width": 800
                        }
                    ],
                    "place_id": "ChIJSynDOjhgLxMRTqsl7zI79gc",
                    "rating": 4.2,
                    "reference": "CmRRAAAAFDWaaUBhHEixdc4omHOCH1O4J4dbfL0rKQDKUUalZ4SX_jZzT77V9dj89BETJgFGefMsgqVyHfeKF4MtmchJGpF8mT2lALwPK1ekuypRDbWIlzJpXb4J16l0G55gzUfWEhDEo-t8NdgklEG9KiV5m5JEGhSyxAlCgjYEWsw-fBA10C6vA7CbOA",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Santa Maria in Via, 19, 00187 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.9007229,
                            "lng": 12.4817911
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9020066302915,
                                "lng": 12.4831200302915
                            },
                            "southwest": {
                                "lat": 41.8993086697085,
                                "lng": 12.4804220697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "cccf76339e9e489d42b6a5bdab022a18dd6bd7dd",
                    "name": "Pane e Salame",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1363,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/108805354080787987355/photos\">Pane e Salame</a>"
                            ],
                            "photo_reference": "CmRaAAAAtXEsfOOxws-TBF0YVAuSgOgCczcFmLVK3-6fAZtAlFBi196zddklD9wd_Fos1jiOWpnzHcgev9vLcCrgv9aOneI4jbpPNYlHqFHbv6n5gQ9BzIn1XDrwVLHAUVa9pO4_EhCQfS70_HBbYH5gXSorWKtPGhQgGZd8ribBA_QMTSGvpScEieyarw",
                            "width": 1365
                        }
                    ],
                    "place_id": "ChIJV_Yr41JgLxMRQZaiulxyYN4",
                    "rating": 4.8,
                    "reference": "CmRSAAAApfghGqN5RNDx4lc0PmuVNzz5gMoEm1-zZ1DAWZGBUQFe9baN9OU5PTWB33i7t3_JhZHoSBsz1oe7Uik7KTav7HiyL0sT2lDV9JoZs2hPPA0wi1TIAu0_5pPE-8kJz0dQEhBpQ5iHGrVYonyYQ3KgGv-SGhTJgPpKFHUrUJuIbUZPcdPmNjUOEg",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Ludovisi, 49, 00187 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.9065658,
                            "lng": 12.4861332
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.90782213029149,
                                "lng": 12.4875303802915
                            },
                            "southwest": {
                                "lat": 41.90512416970849,
                                "lng": 12.4848324197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "b1ee604ccd8fd09eeaf0b3d8a4d0738dfda241be",
                    "name": "La Terrazza dell'Eden",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2592,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/100735689421139742392/photos\">Chie Mushiga</a>"
                            ],
                            "photo_reference": "CmRaAAAAwD_PT_5M-ueLMm_ercsrDOdAyW4YyrYBjHXNR4EC0JLegRv6J1nHhQcPTt3bBFrKzNPoKpRpj1mSWkeB-HV9L35d8X3iJCxWeCXtLDcv-N_b6d_IWgwgHtc_O2YIUAA2EhB_1Blm1N3hSkOgGgvYYNxIGhT64sG8wYoUU1g-QlXBO1ow6_vylw",
                            "width": 3872
                        }
                    ],
                    "place_id": "ChIJpduOjKphLxMR4AJb2V3VE5U",
                    "price_level": 3,
                    "rating": 4.7,
                    "reference": "CmRSAAAAo9ifxpzXUYypUWv_3pppPHEL0r-2BHobnXbzTQF7GYpDb49YGmzYcbP58rYZ5wKySwSfmNpx23ykFN6WBPHSt67T2Wkd710BVnA4b4RFIoHweA9aDEkUxZW4Ccvp5eK7EhAgv9_RWNPTX5cmGo3KBOknGhS9QycokpuMl06m0VEfiCMaqGCiIA",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via del Lavatore, 91, 00187 Roma, Italy",
                    "geometry": {
                        "location": {
                            "lat": 41.9013114,
                            "lng": 12.4846504
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 41.9026436802915,
                                "lng": 12.4860147802915
                            },
                            "southwest": {
                                "lat": 41.8999457197085,
                                "lng": 12.4833168197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "4e2371bdb75ae11eb0e4b23eae231bf506297407",
                    "name": "Piccolo Buco",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3024,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105836523113125317721/photos\">Claudio Minotti</a>"
                            ],
                            "photo_reference": "CmRaAAAAY0E5SZMFTKdc14c_DanYXvOPxm2Z0aUOQF2We_8jXYc--sOTTDyD0eGRJzR6bSuAjDJ-xG6CSdytlJOyBjgHFUR73DBJDikihOYL3D2aFbdPmv3lrtoixZGdip9f9WY6EhAaPb7OfPCQvXDZHc_6JyDuGhQO7TX38IzqesKYp69udo7p8huhnQ",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJ42GGxaxhLxMR_KbsMktBF4I",
                    "rating": 4.5,
                    "reference": "CmRSAAAAxkysvGqvuiK9erTbiVNuSjd1Z0BYv8Yb0krlsAoos25Bmmk-ujUpusGCJfY-R_gq5EW1NUsvNzjLxthERhfZxhU7arSdJc6_9PTnIU13qwMx-vtgvGrJZmbkBYk0dIzeEhC4ZLPtpNTopuBRUO50bjJoGhT1wTDMxfHVD9M6XzkPUQTAWTZA7A",
                    "types": [
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
            "city": "Myrtle Beach, SC",
            "city_id": 9,
            "lat": 33.6891,
            "long": -78.8867,
            "summary": "Myrtle Beach, a city and vacation resort on South Carolina’s Atlantic coast, is the hub of the Grand Strand, a 60-mile string of beaches. It’s also known for its celebrity-designed golf courses. Along its beachfront boardwalk are arcades, souvenir stands and restaurants, as well as the old-fashioned Family Kingdom amusement park and the SkyWheel, one of the country’s tallest Ferris wheels.",
            "visits": 1,
            "key": "9"
        },
        "tourism": {
            "html_attributions": [],
            "next_page_token": "CpQCBgEAAOPoEm-XaKFK1-8qEqjj8QYjkOJDb82T5lp-oZHrnV8hDKUEcitZWJvilt9rdpS_cO0Oow9G2Ysj6v__g0Oi5QWWG85zY7VhKNlq8rWu1cm9DVqv6Y8ikL1HQdTrY2PNcvGTN1YrP-P3NKlfbczGI50ipW2-tZNA3VAdP2KurASpTk9izlLKFD49ha7O1P3mtUzcMIodp-G8n3v2afj7RKVHm51cXL33v_oU7ITaXDH4c2T0JOmXb4Mc7k957kUU1oNlgFK2s1U-9v8UYt7DtSuuvQD13XKP6_sBpZCE_kRkUePDerocQYQ1PDb1dDhYAzmxyCFK99fariA3xBJUZoCu6ThXJ9KENgkUacqwe_IaEhDPB9xwznk0qQCefvcq4yMTGhQwu30xoEaRsoq5LnxUa8p2BO5qgw",
            "results": [
                {
                    "formatted_address": "1804 S Ocean Blvd, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.6719193,
                            "lng": -78.9039308
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.6731035302915,
                                "lng": -78.90238021970849
                            },
                            "southwest": {
                                "lat": 33.6704055697085,
                                "lng": -78.9050781802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "2bf55af1d92e3210b94b175720b6d45326a421a5",
                    "name": "Best Western Plus Grand Strand Inn & Suites",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1859,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/110655132460690505856/photos\">Best Western Plus Grand Strand Inn &amp; Suites</a>"
                            ],
                            "photo_reference": "CmRaAAAAg-M2cJboIK7nBttErz8sZAUZyBryjMftD0DLdrkyCRpqeDnhiTTOGp0Rh1Oi6yT-tpETmPUcRZEJ4M7aNxj_E7e9oFm_iYVOD_JTqtwFLgRsn0AeHnrNUyZKEddsk7FuEhALOaezevjmdWNy95WOa5fqGhQimp6HNWISPabLYsQeXebSA2Si5Q",
                            "width": 2489
                        }
                    ],
                    "place_id": "ChIJRQvUrsFpAIkRPgg68-OkTSA",
                    "rating": 4,
                    "reference": "CmRRAAAA5t4oxEX-PaA31A_9NZBnya0dDkjJDVqOlopk5a56zn3eUtJWNTomapeq6YJlIfcJl_XoW_j8copU0cx6oONByMYB3l4UlpC4RDFpFpC6iGNvLsSqtt-JFndCTAoAmqpeEhDlr10Lnl0j6qgSfK_0ZPM-GhRzqPgzMWWDphsIGqsfLvQAG3bctg",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "1325 Celebrity Cir, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.715575,
                            "lng": -78.882182
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7166260302915,
                                "lng": -78.8806049697085
                            },
                            "southwest": {
                                "lat": 33.7139280697085,
                                "lng": -78.88330293029152
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "dfcf980f3d51cea722f1b9561d86fc7df3d259aa",
                    "name": "Broadway at the Beach",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1836,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/117376468254621994747/photos\">Becky Weaver</a>"
                            ],
                            "photo_reference": "CmRaAAAAQFraOUae7VGVBiUAaUACF3Z8pdgqM767ikvP9bL4WuaabMfE2lwQWow9qCgpzOFNJBSoJm-8nyZzxffnOHUtVhS8d90Uu1fzpdmlqd0F8har9sZyG-zCGjlIK3R6JOP7EhD7RCtrnkm6TprHOcJ6tS0wGhQvJrACpMoXMQz3aeN8IQRzOTIAcw",
                            "width": 3264
                        }
                    ],
                    "place_id": "ChIJuRDdP-BoAIkR0_3G2Gp6ufI",
                    "rating": 4.5,
                    "reference": "CmRSAAAAzT35WeFwVd0IC_WcIJj53H5NXu2bpkDgbpQnXuhpO_Lguo6kuq6tU52TDt0OnFQJbKGnDG0hnnXeHNkseX1Nf2qPAeeDiLNvLNy4SN6DIBStyKwbRcojcLM2IuuqAqtDEhBZorjgtoBhchsxdlSunM9SGhS8kfGJxj1eWZFMgxtQPGrxtl6RDw",
                    "types": [
                        "shopping_mall",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "8400 Costa Verde Dr, Myrtle Beach, SC 29572, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.748479,
                            "lng": -78.808043
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7496875302915,
                                "lng": -78.80679591970849
                            },
                            "southwest": {
                                "lat": 33.7469895697085,
                                "lng": -78.8094938802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "d714f32f0a9243b0d5bf6067fc820eaba0089eb7",
                    "name": "Myrtle Beach Marriott Resort & Spa at Grande Dunes",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 423,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/104651733942375612376/photos\">Myrtle Beach Marriott Resort &amp; Spa at Grande Dunes</a>"
                            ],
                            "photo_reference": "CmRaAAAAab5_gcg_-a0_dtECI1f2oaWf1yC9DNyIp0_gQLmx3R-_45nNat6zMj-yBZhjNqSUQJ1168Ca3CDCD5Pd6viEdyRb-7ON-VEUlV3u38RH_NHOTUhTk0e5IwXuZR-2l2wWEhBJ5mbqJrI_HapMdXaUF4SoGhSlDwMRR-sUsQA5c6qniHwD1v1rbg",
                            "width": 610
                        }
                    ],
                    "place_id": "ChIJp3i2H8RlAIkRGProx-Ytn4k",
                    "rating": 4.4,
                    "reference": "CmRSAAAAobr21eik_28vqSd2S1lQPqb-AXzOLUQmLfTmP799-kXEDMQkRvCojagIglqDRkn8N_GTZ-1D1pYgkeaHI8sFgdulkh4vX9CQesiazRZdEGdMcn03bB96iInpP07Z3d-OEhCYrsMKQ3W0pi41H-pYSJifGhQ1KyrIwmkOSwty8GRa7G8R9nW5BA",
                    "types": [
                        "spa",
                        "lodging",
                        "health",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "1110 Celebrity Cir, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.7158977,
                            "lng": -78.8778877
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7172466802915,
                                "lng": -78.8765387197085
                            },
                            "southwest": {
                                "lat": 33.7145487197085,
                                "lng": -78.87923668029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "215ad0b8527a1928541e66461a4dfd5c713d53d8",
                    "name": "Ripley's Aquarium of Myrtle Beach",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/106112205046794758861/photos\">chip hilliker</a>"
                            ],
                            "photo_reference": "CmRaAAAAkgYbsImoKwEI54nCVAVzsovV670EH2t3dKJdmTwlna6F6rcJ6kI2L8ZjeC4k6TaLPhToYNogon7WoMrZyFOqlTgkraJZe_U20_n1XJUcU9gNrI4TZQ5FgSipnwxhMrdSEhDp5oLbxPRuxtxZ3ikNWD1BGhQOO2AcihIqldDVPBUs2p9G_vD0cg",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJdc3q8N1oAIkR00s3Z0Mo8Vk",
                    "rating": 4,
                    "reference": "CmRRAAAA6nXjfzzxMT418ZucaUWlbPLnVgEdVhJKex-R-FBPIXT0vPkTPtHCEgi6AWQEDe_1BFaXHiqT_HAw-MSiYNr3oXHfVb3Ac2q8mLM5ZXQNgWHa3FEjy2ifWOsavTdaCG1VEhBNIGDM1dUVcbhO15NSrB-vGhRhYDnfHMQU9IJd4ZwHvgC4GdsQMA",
                    "types": [
                        "aquarium",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "6000 N Ocean Blvd, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.732098,
                            "lng": -78.829747
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7335613802915,
                                "lng": -78.8285286697085
                            },
                            "southwest": {
                                "lat": 33.7308634197085,
                                "lng": -78.83122663029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "6dd1119cdeafc3f00552b2be2ee99492cc853a50",
                    "name": "Island Vista Resort",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1664,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/109923371500546005916/photos\">Island Vista Resort</a>"
                            ],
                            "photo_reference": "CmRaAAAAz2XoF5WOHEx-C4GPXAmyogPCWIqDgdAZruUZVc_Zyi4UdnMxL0mh8ikoZd-5FR6kkq3ERGoD11ASwo3tQiCS4FCa8_OWNiOIkQlxmWbmgExkVxIrr_pxhMOYZJGit-xOEhD_rElrOSWYCiSmNgunMyGSGhSZfA_eEYGruzthB1h4m2LbZ_yVPQ",
                            "width": 2500
                        }
                    ],
                    "place_id": "ChIJsRxtowdmAIkRojDCNSj8a0o",
                    "rating": 4.2,
                    "reference": "CmRRAAAAcoivaRXCMI2JrHA0oh41jJhJScKaIQNX-3Pn522q_3Ug6Bfat0pmmQomnJvkpoAtddaH7YQID58jrHWkDV19LOsHkKKgOX3Rt_OtGnTiNmbEow2tY73tgEv7TStWGEw-EhBbpVW3IRD0RQU6iqSRRKGhGhSFcVCTJwyZO1I-z9cCZZSG6cFPPg",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "2200 N Ocean Blvd, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.70158600000001,
                            "lng": -78.869503
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7029401802915,
                                "lng": -78.8681609697085
                            },
                            "southwest": {
                                "lat": 33.7002422197085,
                                "lng": -78.8708589302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "a24d0c4d75b4476ac77edfe814e08b98a3966119",
                    "name": "Ocean 22 by Hilton Grand Vacations",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 4945,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/113057500473298742793/photos\">Ocean 22 by Hilton Grand Vacations</a>"
                            ],
                            "photo_reference": "CmRaAAAANMY1TvHolHMLrDe8EF7pb4cRfphRxXbLBekE3ZY4pczvv6M5uUA-uxvud52uqw0GRDUEBLKmoJlDYi_4O5F_lZx-drrr6gWfc4nfQaEGe6GX5W0KBZAbgEWrrZ4Q572REhDqAv22VmCGL2xsywK32KKjGhSHzQOQoQIpuKq1QpYNSTMry8Qe8A",
                            "width": 3300
                        }
                    ],
                    "place_id": "ChIJhYlc_PBoAIkR3VJqWzyd2rc",
                    "rating": 4.5,
                    "reference": "CmRSAAAAcdRpDvSzn6coLyt9EU_0KmQjCNY0uMwtHFUSobnHeikjLancL1KGfohkiKz9oteG2Y18pT7n19hkHcvjRdV9ngn0zGWna8Klv2HHDGtUh0IyGrSJkcicc-KJhzaKdsN0EhDUr4LhhKMxW5d1Dl5SsV5xGhQPlFZodIYZ0BHw_-nUq89qUunbOA",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "1105 S Ocean Blvd, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.67583500000001,
                            "lng": -78.897414
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.6774171302915,
                                "lng": -78.8964759197085
                            },
                            "southwest": {
                                "lat": 33.6747191697085,
                                "lng": -78.8991738802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "0fc8dae385b0d05da0eb351faefc5fb2a0051c7d",
                    "name": "Coral Beach Resort and Suites",
                    "photos": [
                        {
                            "height": 689,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/102470841085434906390/photos\">Coral Beach Resort and Suites</a>"
                            ],
                            "photo_reference": "CmRaAAAA4DiDs5k2L8f8Ge6j1TB9I0tVZZvY-rBHmW1Zzg1_sZaD3OFXNXcDQgKfbH2A5_NUNmC5v5j_pAqMKdUuDBd1dQWnOPL81sJM0QMY1C89oZEdUjRfCLJ9KDRA_v_JdINUEhBE20u-258ucI6_wQQu0paeGhReXV07TJ53IF-LKRX5RCBz32Bpcg",
                            "width": 1000
                        }
                    ],
                    "place_id": "ChIJj6XDWLhpAIkRkPtqHD13ZUw",
                    "rating": 4,
                    "reference": "CmRRAAAA5Z2hi_Tvjoe1QuSDkyONt3_u_7Ddoo0-oMwz0Hju-ULzfQdz5aJjmGSv0Lgb-qFHUMlBUhIDQCU1hK7tXJai_jMiaEqCZEJMQLO2N9x1CiGV0K3B7Cp-myZkM4nHBOEoEhBNzHYfcv71l-WIWoqm82lwGhRoR0HhP2Ef7nxfFU9x7Dd60FSG1w",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "9800 Queensway Blvd, Myrtle Beach, SC 29572, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.767071,
                            "lng": -78.77815199999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7686048802915,
                                "lng": -78.7773068197085
                            },
                            "southwest": {
                                "lat": 33.7659069197085,
                                "lng": -78.7800047802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "29b80aa0c6a7aa78d7827648b9461a9929705bc4",
                    "name": "Embassy Suites by Hilton Myrtle Beach Oceanfront Resort",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 683,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/115215781400796065252/photos\">Embassy Suites by Hilton Myrtle Beach Oceanfront Resort</a>"
                            ],
                            "photo_reference": "CmRaAAAAbXhO6z1-C2WKggOeRAGlLT-KJM4gElrmFYVrXnx1rfhpkRMyYdwi77DBkHkQjglDMzUIOjsXADC4vYgiKSndjTyV8fWyNYrfSYzovApKTLodeVwuUze1naoJuf9JSNkAEhD1iNAT9t--WyW98VOT98VOGhTuZs5enkNeVQbcmD61HDE0z9ZSpg",
                            "width": 1024
                        }
                    ],
                    "place_id": "ChIJUQ7K5ltkAIkRszwZAkBRo1w",
                    "rating": 4.4,
                    "reference": "CmRRAAAAlRIoR_YF-nTmHedDZ4PeM3mqYqEfTfO3jYagPOLbbTPGZH6MJOT3mjP8grmjN3p4Y6XeTEf-t4S4l7sfnKoVRFJTDkRD5wLN2n8IXr6xp9pXoNFdWlkenxT-Pl418AD4EhDqZOk_ADIiFi35im74aCzQGhTAMh-ZlKapYy1m0JhHrJG_GtWgCQ",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "1220 Port Dr, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.69039410000001,
                            "lng": -78.9531262
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.69151883029151,
                                "lng": -78.9515706697085
                            },
                            "southwest": {
                                "lat": 33.68882086970851,
                                "lng": -78.95426863029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "3289fee6a73e535e924766c6baf663a12feee094",
                    "name": "GTS Theatre",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 540,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/110551352106814824893/photos\">GTS Theatre</a>"
                            ],
                            "photo_reference": "CmRaAAAAcMKbmsENhvmhCYc6oY18HhvzpVP9xs7u1DBZadjdFRQuaQWGBzTidlHEhOShNUaO6F5AxlznsxPRd67YNn110YU27dVXIGqFDHsh7ZiWfeJR4cMuMjroNSI6uxaeGqbLEhAEpnegRREQqtoBuG91D5oEGhS311RZ6lmKBUTyd--H6rDX_FJ8fg",
                            "width": 960
                        }
                    ],
                    "place_id": "ChIJ4SHTRTJAAIkRK7FSvA9WbsI",
                    "rating": 4.1,
                    "reference": "CmRSAAAAmStDml9ixLx27plOxrkqHoV55Wf5-6DMG6vY7O76v99Uia23AHpDBw0MHr6tlKQ0UjrTSo17VMweGU--V_vcXcM7IvXgHk8KRRegvMv9-cjzfO-XvRnDmUtndR15HfCQEhDdszOtwYgz7mizbjgtWvnkGhS6he340Eyt607bNcsD0VIwItacFQ",
                    "types": [
                        "bar",
                        "night_club",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "201 77th Ave N, Myrtle Beach, SC 29572, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.743746,
                            "lng": -78.814003
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7452533802915,
                                "lng": -78.81257026970849
                            },
                            "southwest": {
                                "lat": 33.7425554197085,
                                "lng": -78.8152682302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "5acd256fe8bc347e52e8e5177f19639100c19c4e",
                    "name": "Grande Shores Ocean Resort",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 445,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/101982054573787421668/photos\">Grande Shores Ocean Resort</a>"
                            ],
                            "photo_reference": "CmRaAAAAQMDpNNZvVbI86wVpnbg6Ebn2IPWEHU4qMxFHMtrAm59MNwOD7FpCojHbRPLDd3mplvkRQ7IVaXMW0Ih6nFulr59qT8vb2Kao03B7rVMVUgVIlQ5UhUSuDRIwdM4MmABLEhBaCDPF5vyRikTCewwKUTGmGhQhvPbnImvmKbrstR1gP1ehs_WRCQ",
                            "width": 446
                        }
                    ],
                    "place_id": "ChIJB57gNN1lAIkRGFNmX8UV5KA",
                    "rating": 4,
                    "reference": "CmRSAAAAQIaRSCd8C4-DoEJZ1jEDGGDl7hoeMQst6sRT6b1d1HIic033SIkfLJ9EaUxkG86QrbyUWe-9TihyXgSaEHqeTPrOBE_3pw5ZKc2wwyPzpTLRTKLxPe558u5VWRlocjtSEhCoq5njD6I2h3PeoYQEDe3bGhSqdyPv9pf7aaKDvF3RL2OxBP5Y-g",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "8121 Amalfi Pl, Myrtle Beach, SC 29572, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.764875,
                            "lng": -78.815805
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7661915802915,
                                "lng": -78.8142522197085
                            },
                            "southwest": {
                                "lat": 33.7634936197085,
                                "lng": -78.81695018029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "425465a082aa9719b92c132b34d5eeb97c357ab6",
                    "name": "Marina Inn at Grande Dunes",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 5628,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/118166509269262785236/photos\">Marina Inn at Grande Dunes</a>"
                            ],
                            "photo_reference": "CmRaAAAAFPzVUy35BAoTZvaXY_M73H-MpP84Uv01wW5NL6qdjqLeVK_m1xjQHXpW8U1cgu6I5AnpV_pDp5uQQsNLoD1iHZeoogj-UDV8BwSeWlTFXbLaIN8SRpPdeve9c3nX77l-EhCkqqijU-WlnIjx9oJpisMXGhSjmSUG3HCQwOgQqLeCgBAIMZqdEQ",
                            "width": 3840
                        }
                    ],
                    "place_id": "ChIJ7TS3GL1lAIkRkBvSnAiu7gw",
                    "rating": 4.5,
                    "reference": "CmRRAAAAYmbnkTt0S0qVha6tNzEUuPUXeUXqWVcVPAbyOVCy4mW1-0w-ibv8GqYB5lYzYHj-UUgLjTvdZqc84_ZzhLwFmL4AOL5eSai_m9_gNV7nMPV5HDfL26v6j5GqRQ3tl4CvEhCikNwtOQ2JlzCgm7QvMdUpGhR1psqRFbuwsBDrmDtlBaPgxR4vjg",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "201 S Ocean Blvd, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.6819673,
                            "lng": -78.88932249999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.6833938802915,
                                "lng": -78.8880512697085
                            },
                            "southwest": {
                                "lat": 33.6806959197085,
                                "lng": -78.8907492302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "f72451252c47de4ca60adaf5f3596ddb663d4cf1",
                    "name": "Sandy Beach Resort",
                    "photos": [
                        {
                            "height": 1513,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/106449060401363277071/photos\">Sandy Beach Resort</a>"
                            ],
                            "photo_reference": "CmRaAAAAjgdhEoRwiZ11K4VGJ7r1WZk9xrRGbqmrIcsKgZw6e6FqobGQSexFha7DyHD82RXpi2VuiISK6Q9KsQl_F01lzBRWWlwrdXDTQLQ8PUmw4N2OAfcmY3yzjzgzvuG-xy2ZEhB-F2gtzYCXhkhW5Ip-1zvDGhRAwQRTbHsV7F5OM7sKUKSQkASZ9A",
                            "width": 1670
                        }
                    ],
                    "place_id": "ChIJdws5gbFpAIkRCFC9le35noI",
                    "rating": 4.2,
                    "reference": "CmRSAAAAC6L0sEx9snSvJvMnTTXbpuqAIOUPu4elnjXpQqoAbvhKG1lJ-TSv6D9At_JUqDdNdXYXQ43hXVMhWwxvL0G7WXna-n8pSkPgL5vd89s8SwWpWFpDbw4E9EHoYqWjngRKEhC1tq_XkawECsqrcME7h6jRGhTr4-viLA2LTPMJAu6ajqOkfHx5IA",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "3000 N Ocean Blvd, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.7075917,
                            "lng": -78.8613759
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7090706302915,
                                "lng": -78.86017391970849
                            },
                            "southwest": {
                                "lat": 33.70637266970851,
                                "lng": -78.86287188029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "f43f5f11d938ee2a7aafcbad32a7e92de1409353",
                    "name": "Caribbean Resort and Villas",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 5312,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103997281319133279666/photos\">Mario Rodriguez</a>"
                            ],
                            "photo_reference": "CmRaAAAAEd3-2oFe1Ld6Jf2LBB1udNgQU6iNbsMzFARSQI6rCr-pFBVJ4fkxGDGyAr00y7v0PzWpafahldHI9fYljZmdiWF7UBbaogAqTnPWD8t7c08qv0p4OG1Z3u3pZmCgE254EhBwGlcjiyoszZ13QkPpQLoQGhRR9a79mGi2P1TlCYds9Ltw35vY9g",
                            "width": 2988
                        }
                    ],
                    "place_id": "ChIJ0_ZFxuxoAIkROH0YSkU2Igo",
                    "rating": 4.1,
                    "reference": "CmRRAAAAXkqMnb52dnOHbIQ8G5D06g7tJDVgFXZCtcpOu62iHlVmuzgUy2B8fJiTXq1NELR7_E2uN4kOqZV3oukx6a1aXAAUIxt-sXrOPOPHZpyyK-wCBujpzmaSRCMMULJ0FG1UEhDo1B0JwGdw1tP9ligpLHqXGhR4D9NLeW_GaXyP1f_JPFj8Bc-MAA",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "1801 S Ocean Blvd, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.67149699999999,
                            "lng": -78.902879
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.6729197302915,
                                "lng": -78.9018220197085
                            },
                            "southwest": {
                                "lat": 33.6702217697085,
                                "lng": -78.90451998029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "2a619917a17ec28f420a13f770253e8e30d2dd6f",
                    "name": "Hampton Inn & Suites Myrtle Beach/Oceanfront",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3850,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103024656329520797752/photos\">Hampton Inn &amp; Suites Myrtle Beach/Oceanfront</a>"
                            ],
                            "photo_reference": "CmRaAAAARcKdHG9bjonvFPicLcVp8rhgmxNMXA9IxdCJMWZ_gIhG0i_aTHghQS0-V2jzoJbC5IdDoz8WI6KkU9Ys3sJGiM5aNzZY0vNUBZ3X2Nqv0IUIF5KsxUobp3myEtAAbsY_EhCWp9Cr-JggFxPxLh3x-r0EGhTgEUQCsTPEOXkxqof0BvbCY9EVdQ",
                            "width": 3282
                        }
                    ],
                    "place_id": "ChIJE-xlAMFpAIkRmKt7ov0sqi4",
                    "rating": 4.4,
                    "reference": "CmRRAAAAjGCJdzcANOE_VX0Sz3T8tPqnSlwgQhqM751-tqsOS8OaOU436Tba6GIhYCqsjrSHgmh3s2E4TzhHHFwtSxKW7QWjvMgPrdQ6CHve1wH5oOHm-_1i3eUlAN_y80mvBNEtEhDgzdgN7Fjkkz9e7lr3odh_GhTDmXsnTSXuGyP460xtvkBXK1kiPQ",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "2201 S Ocean Blvd, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.6680399,
                            "lng": -78.9070552
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.66951013029149,
                                "lng": -78.9059209697085
                            },
                            "southwest": {
                                "lat": 33.66681216970849,
                                "lng": -78.90861893029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "b9dd65165fafdbaf19397cd005f9bed25e5086f8",
                    "name": "Paradise Resort",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3024,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/116914925992372641737/photos\">Mila Beckman</a>"
                            ],
                            "photo_reference": "CmRaAAAAsMu09bK4aP3MtdBL125O1tUNpnPunTh9u7HKLHD22ESHYFbQBkjrBYTACsLZUn0j0XPTSVmwyGE2ELA4OtWu_pavz4yRc8BJ8yeJJzNhGyGcaKGza1GFq6ApjMHxk52CEhBmzKOe0TPRizJz10CdG3hoGhSUjnC6pjxqOTFzlBnV5Jm4_wevkw",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJtVqVv-lpAIkRPc3jTZakhG4",
                    "rating": 4.2,
                    "reference": "CmRRAAAANkHNVWPjxbb77gBL3O9kYt-WWOAtH_n5vpo0xT5KqA5qhZdztEJIvo4aixukDCualuLGCqd3d-2OMD7XGTp7k4NeQSsPWGicH4YJFzubTEqHm4mh5QdffFfmdTv7Q4TSEhAJChB1rtzL_GQZq-2VhtrSGhRlfBQegqjr9m1K4f2tgUzn69-9fw",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "803 S Ocean Blvd, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.67815780000001,
                            "lng": -78.8950967
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.67969903029149,
                                "lng": -78.89399366970851
                            },
                            "southwest": {
                                "lat": 33.6770010697085,
                                "lng": -78.89669163029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "1725af496540d98f806d9364dfed818f36f1985b",
                    "name": "Sea Crest Oceanfront Resort",
                    "photos": [
                        {
                            "height": 720,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/108648425747035209487/photos\">Sea Crest Oceanfront Resort</a>"
                            ],
                            "photo_reference": "CmRaAAAAdmQeUa-1gqR-fEQQn4Ai29xE78HsSrnj71T2Aw_G8CblEQShVRpm9abF54F8vSBxiLgVkOnpPYJt4HpO26R61SgQfPk_Bm502JSPOrECloxm9Bm1w4roefkVer0PzK1GEhANFCbJhL4lq39Sd_8Gi88mGhQZBIZ4SYgUa2043MDXW9saA5zWcQ",
                            "width": 1083
                        }
                    ],
                    "place_id": "ChIJZ3P2nbFpAIkRMyJ87Ln48LI",
                    "rating": 3.7,
                    "reference": "CmRSAAAA5ndntlWcUHJTjIE7Jyw7FfxYGwc1E-G7Fb5mBZOndEMUDmq9ZAqhZYKCDlwxl7YnXST4zuAxUd1ArdL41WT-taW21LgdFZ5Nd0cNhYJlJI8Isz4LYJc_NL8BF1PcmoK5EhAxNmuafv7dEpQzCccZu-BIGhQwHahRn0ktahDcowKO3Tk2VN3QKA",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "7100 N Ocean Blvd, Myrtle Beach, SC 29572, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.7399996,
                            "lng": -78.81883520000001
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7416058802915,
                                "lng": -78.8177612197085
                            },
                            "southwest": {
                                "lat": 33.7389079197085,
                                "lng": -78.82045918029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "68ebbc1ab24493b38fcf1959a3a738533ce72764",
                    "name": "Ocean Reef Resort",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105931460732595449815/photos\">Nicol Bodlakova</a>"
                            ],
                            "photo_reference": "CmRaAAAAwLpXcQDNNzbDPVVqwgzcH9CASsQr-oN0-Q1ZPDwwWMMnM1c0Sj0EwhMjWwYhWbtk_QULkj-wF66dEkQZ2F2OS2TAnyvmu6Ex8UJCUp8mZGydg_owiyjnAcvCm_q311u6EhBbu7GH4pZARDlg_u1vPFvwGhS_jbu-1h7MbC6o8_eQM7lSiNbc8A",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJ74Ez5uZlAIkRxaHc5-WrnGI",
                    "rating": 4.2,
                    "reference": "CmRRAAAAg4nHXpiThgqA90UBidh9HoDOZAfxK5qicO5WuLgumWxmLIW3b-jpA4dw93E8fPEVotWLwH9YR-NLbDEq9sbOAJdpQBUMOstN-4TkX70eMIN3SOpABn13FHHJAYUCM1RyEhBjd0PRVpAiYpWNWOQhwWByGhRCEOBvFgIOBHT5JiQ6X-bP7i1bng",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "3301 Robert M Grissom Pkwy, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.71991370000001,
                            "lng": -78.8710799
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7208654802915,
                                "lng": -78.8695700197085
                            },
                            "southwest": {
                                "lat": 33.71816751970851,
                                "lng": -78.87226798029153
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "934eca922775a1cf398e06de88fc26dc6026ceb8",
                    "name": "Sheraton Broadway Plantation Resort Villas",
                    "photos": [
                        {
                            "height": 657,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/110987346622558591701/photos\">Sheraton Broadway Plantation Resort Villas</a>"
                            ],
                            "photo_reference": "CmRaAAAAQ54tDV8oZCXxLwdxa3XX7HaJyadRlZuWvXyDfyZV_3m3tfjIPEVtye4ON2vkqLGlq5whyx5PJhA75JcypjPOD9GNR6R45PFUk0hdZJB68krNctbXvw63HZq__sbOXzjgEhBd_1nyACXnP1l6k7tjKsLWGhT9fnWwSuNTg3QlPhmNKOJEewpCdQ",
                            "width": 1024
                        }
                    ],
                    "place_id": "ChIJcy-AmMRoAIkRBKKQ68Zd2s8",
                    "rating": 4.4,
                    "reference": "CmRSAAAAFtrQhU_B4yA_LFsg0MbaTOOZrxTb3zZIyfFWMHKjPu7ivUgKXR7EQQ8fRlA9bjWqKJK66C_XwtoVzPCvteNpdDyj-LQPiJYlvcKDW91BvpkS6fhq_FDMrfdGAfmeWnEZEhAqrozAzn2M2z4HUm8gUN3FGhSy0AJYmE4KFwtgWjdor9OVh6sQ_Q",
                    "types": [
                        "lodging",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "2006 N Ocean Blvd, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.70044309999999,
                            "lng": -78.8703708
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7021278302915,
                                "lng": -78.86886531970849
                            },
                            "southwest": {
                                "lat": 33.6994298697085,
                                "lng": -78.8715632802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "bb304fcda3d2f4e0ecc8b701eedf9d79dbc59f32",
                    "name": "Breakers Myrtle Beach Resort",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 562,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/116248967871638236151/photos\">Breakers Myrtle Beach Resort</a>"
                            ],
                            "photo_reference": "CmRaAAAAtp6kSp6E20iR0oHnFqdMyVLsgdkaeOgtkHv-fWOmr6kX4n1rrSYg3Fo81LEqDYtINgmcdz_7LkycAMC9dPUseJg5grz6oqjJJ2HmEhIGaic383aJrpXwcK86_8W68ZUzEhBU9m340X2j5SYX9NczFMzuGhQFiztLetsekacQprGv9IpNqqnSGg",
                            "width": 1000
                        }
                    ],
                    "place_id": "ChIJ81wb4_BoAIkRyhN64bKbxXw",
                    "rating": 4.1,
                    "reference": "CmRRAAAAAfXvHiMVS0Dgr_t4evZHuMyf7uFvLwXQvaG4DXleH_WPTDyW423DsbcaRIT1eboHeqQ0D9vyqzdUSWZ0lLH143Pim3dpI_-y8sgZSJ3gX1WfJ3oiX0AzxXE6gMzHkVgFEhBxRYGM1CBTjesy8uO2qrqoGhSGc73Dy2NflX3MMdAgyKeL-uEmkw",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "100 North Beach Boulevard, North Myrtle Beach, SC 29582, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.79111779999999,
                            "lng": -78.73578069999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7923948802915,
                                "lng": -78.73476956970849
                            },
                            "southwest": {
                                "lat": 33.7896969197085,
                                "lng": -78.7374675302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "f41b137800a328384e2c920cfcb47ecb1e3a0c25",
                    "name": "North Beach Plantation",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/115095203116415510940/photos\">Pat Mulrain</a>"
                            ],
                            "photo_reference": "CmRaAAAAo7yP_89TT2Q2E19al9bdSZrTzm9coGPamRsZ-X5HU0YAOxzyCyL4jpjtbYSyd6AzdlOatEH_WXmDPVwoSH-NrBVKyuUkRLgd5YO6L1Zpf9h8gejGJWCz1xj8b-gnYOcCEhDWJLEkKRQD1ljS1PZjwiSUGhSBqXWr1k4n7qr_2VjtCaCQRxYHRQ",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJayRHlmdjAIkR9ztm69GTf4s",
                    "rating": 4.5,
                    "reference": "CmRSAAAAyu4Ho3DCMXsDLhIjna3Gdso3ioa6BJHaK7vB_J25Q65L9rLAWr5nOllGUMGE7qeIJp4GmpjUkgcI27oY1PiIJe53v4-FtUUPnM5-ii63Taac1vzSIGOfuUE_0WMmldCAEhAptlVsxOCBjgivLHe19JFhGhRuFcI97OWJmF9jfELLrQK5eP6HVA",
                    "types": [
                        "travel_agency",
                        "real_estate_agency",
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                }
            ],
            "status": "OK"
        },
        "hotels": {
            "html_attributions": [],
            "results": [
                {
                    "formatted_address": "8121 Amalfi Pl, Myrtle Beach, SC 29572, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.764875,
                            "lng": -78.815805
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7661915802915,
                                "lng": -78.8142522197085
                            },
                            "southwest": {
                                "lat": 33.7634936197085,
                                "lng": -78.81695018029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "425465a082aa9719b92c132b34d5eeb97c357ab6",
                    "name": "Marina Inn at Grande Dunes",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 5628,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/118166509269262785236/photos\">Marina Inn at Grande Dunes</a>"
                            ],
                            "photo_reference": "CmRaAAAAGWTg6UnEJB4iCkx-SYEG_UbVJDB1Smqqvo9WomjKaeA7Xs29a2pis-iV7f2Fb2uEngAxSz47cXcwgVQUE5DZtt1p9jtyfmOg1BX8rc3AXavVg-K-0K6tdLKjRG9ir1nEEhCmPEOMCCffcnjZsP9ook5GGhR0soHROEohNyjHLFZ9XCDc9tp6VA",
                            "width": 3840
                        }
                    ],
                    "place_id": "ChIJ7TS3GL1lAIkRkBvSnAiu7gw",
                    "rating": 4.5,
                    "reference": "CmRRAAAA9w5lpJJiJ6tN9vc_wyKU7y3lX1hVwUBGhwFY0jvCbmuvQSpkUDFt3KmsHlqBcpkXgYA-qqhaMWGWvMeWlVD5Hx2krQgLs9zIf01gfnamRbvzijVkHy83QFSBmvMpryz3EhCr639V-YOJSF5CkYC8T07XGhS7fYqxO60g2LiQe9wf1PYFoAafKw",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "6000 N Ocean Blvd, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.732098,
                            "lng": -78.829747
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7335613802915,
                                "lng": -78.8285286697085
                            },
                            "southwest": {
                                "lat": 33.7308634197085,
                                "lng": -78.83122663029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "6dd1119cdeafc3f00552b2be2ee99492cc853a50",
                    "name": "Island Vista Resort",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1664,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/109923371500546005916/photos\">Island Vista Resort</a>"
                            ],
                            "photo_reference": "CmRaAAAAPZe-goL_1N_QQf0-LcC50_xEWQWTNBU3YSYeOpF5OC37cPvAvBPi2ybB6-FdaWNbc0H7PQ5Fg-Rbk8nTXUrSVpAMKwS4bWFL9lcEeOaoxBDh3V0-5DMDXreVMNWjni-XEhChim5b6HbSXK0yASjDff6tGhT4V0ho0V1P7jOxqW75RVDAqyI4Mg",
                            "width": 2500
                        }
                    ],
                    "place_id": "ChIJsRxtowdmAIkRojDCNSj8a0o",
                    "rating": 4.2,
                    "reference": "CmRRAAAAoNDkEkfmeV5n4bJzqpOCOmEbOyg3F64MqrwSdn83H_OEbfvBlDLz348VSZJQr8poO_CA_HB9lUrTA6hokYE7iNeGNQTrfEtlnxurzh4Okgvhfdjmjf7eNQquFiKA7-_AEhB5djIGDH4jRG5CZqfE2UIHGhS-tgDbkn0ctubvtrpbhU0Cm86m3w",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "8400 Costa Verde Dr, Myrtle Beach, SC 29572, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.748479,
                            "lng": -78.808043
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7496875302915,
                                "lng": -78.80679591970849
                            },
                            "southwest": {
                                "lat": 33.7469895697085,
                                "lng": -78.8094938802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "d714f32f0a9243b0d5bf6067fc820eaba0089eb7",
                    "name": "Myrtle Beach Marriott Resort & Spa at Grande Dunes",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 423,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/104651733942375612376/photos\">Myrtle Beach Marriott Resort &amp; Spa at Grande Dunes</a>"
                            ],
                            "photo_reference": "CmRaAAAAidsa2WwSbV3c9EKkCeqFd9rGgDqSgP9cSrFTXlDO70WqopPu1nOLc7t7FIDOFGyAii3h5_ingzu4zF7aS23U01F6efzAiddS59qeX9gc8YJbhWirvC-n1Q2m_vtOmaDYEhDQ4fA9GymT6HWEDAJTkD9yGhQ4DQ0SCq7KIfWlstHpqIvCkXVEwg",
                            "width": 610
                        }
                    ],
                    "place_id": "ChIJp3i2H8RlAIkRGProx-Ytn4k",
                    "rating": 4.4,
                    "reference": "CmRSAAAAWmpkRAzEtQZEZ5_eJqIDZOnMbG3LNE4kDZqFvkbtiHOaNPC4T3AmQRBY8k5h8v636J74sfnBwBDXz6TR-CtXJgYEhyCquwdNb3UWSSgOZaD1WpPftOL2zReH4Gwa7s8UEhAEQLs4__dDqmob-BZUHeofGhSGtyMd7PZCyJIdMVlwNoOmGoyBDg",
                    "types": [
                        "spa",
                        "lodging",
                        "health",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "9800 Queensway Blvd, Myrtle Beach, SC 29572, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.767071,
                            "lng": -78.77815199999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7686048802915,
                                "lng": -78.7773068197085
                            },
                            "southwest": {
                                "lat": 33.7659069197085,
                                "lng": -78.7800047802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "29b80aa0c6a7aa78d7827648b9461a9929705bc4",
                    "name": "Embassy Suites by Hilton Myrtle Beach Oceanfront Resort",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 683,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/115215781400796065252/photos\">Embassy Suites by Hilton Myrtle Beach Oceanfront Resort</a>"
                            ],
                            "photo_reference": "CmRaAAAAZD5hJb-HTZw5j490WgU3GuOh1DdXg9DsGTgeE_9N1cEacceMvzowPZEaK-qbGQP6WL_rE7Sjqu5n6V60kCW6y1sWt8h4oobuXLz1x0Cao0OO5Bowtwc86v0ZOZFIpC58EhAnE2WaW_h0w1SRgQN2jZ-hGhSsnndToWRjKGicAF_h2ugm84FyBA",
                            "width": 1024
                        }
                    ],
                    "place_id": "ChIJUQ7K5ltkAIkRszwZAkBRo1w",
                    "rating": 4.4,
                    "reference": "CmRRAAAAtWrXz60dZ8kMRq0N2PrJWwLL0YGcg5yudc84UKkPVVrixmmmoiz2uNew5VghL4EgaYe3pMRL8QrAnYbJiuXi292azqj9Ls645fJELwZx9c3g-J0X2KapJdccz14CU6LdEhBXAkSY6BWGogx4ljEixLsLGhQKorvpsPbUv6MhOQUbPAG7pOrFaw",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "2101 N Oak St, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.705316,
                            "lng": -78.87407100000001
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7068156302915,
                                "lng": -78.8725684697085
                            },
                            "southwest": {
                                "lat": 33.70411766970851,
                                "lng": -78.8752664302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "f4df1ab6ac77b94150dfce37d64b297e395eeca9",
                    "name": "Sheraton Myrtle Beach Convention Center Hotel",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/112001877599619929886/photos\">Janet Hays</a>"
                            ],
                            "photo_reference": "CmRaAAAAahFLvhsedPuSB2NKsXJ4cvVss_zH-2Mb2KN97RaO_389wcSprtauBiGcAblRYg_cSZTPbQdP0GLwbx57fwskHHxMPKxaCqElkIA5FhB5CXUqtEMxj1zW5o7adqIFuLe-EhC-so45cj91XsOgYKLUyhIoGhS2fMCLG6_Vo2jVYc_GxmFueqQojA",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJc4BhP-VoAIkRreRBjgP78Z4",
                    "rating": 4.1,
                    "reference": "CmRSAAAARtz2PhQBH5FWyuUAAxQLLZd3UoLyD3FI14ikVHaTBxtwdP0Q3Kkoom616aXXdNj83aoPiMQgvpIwb6gyEXhvZ2rylAOHdO6QrJ2gi0EEuSNmoLqUwpfa2U5p97wkifn_EhBR3hvFrvuEi5IL3ADHYegPGhQ_PGPR3AaIebqgpzjqtPLowSWXLQ",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "2600 N Ocean Blvd, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.7050611,
                            "lng": -78.8644822
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7065195302915,
                                "lng": -78.86326011970849
                            },
                            "southwest": {
                                "lat": 33.7038215697085,
                                "lng": -78.8659580802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "dbc0b12bdc4375f00987b440901693c37732e32d",
                    "name": "Anderson Ocean Club And Spa",
                    "photos": [
                        {
                            "height": 2844,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103029508445030667579/photos\">Anderson Ocean Club And Spa</a>"
                            ],
                            "photo_reference": "CmRaAAAAwyUd-9_XVmg0hCNy8fa89RHZrHC5zIJDwr_Vmb-MbZ9W4gioljZMUTFX8yTWppMt3kfGwjpqlJeCObRVQU7xCnj7cXX0bCl0Rz04HDZpq9N242nYCbw8UjDX2LtgKsqmEhCdRKnrmMK5GCjrwgTPxPD2GhTqQbBhkwELYvvWaxZzqfaF9vszrw",
                            "width": 4312
                        }
                    ],
                    "place_id": "ChIJE4xjje1oAIkRwJ4arslCgcE",
                    "rating": 4.3,
                    "reference": "CmRSAAAAKFUfbzfY9AQHOPsbbhI3lwoZg7lO9eOpMMw432AMsAI078ce_rsmYDUyWHM8rfdsMakyLrAad0oplfaIVSGP8k31k_xLhLa_I_sZXtJRbsILijkuRrHqZYNkhA1KffwZEhAvFnWZWsVwj3pgbZnYH2_xGhSei--5KeRumuZUZl1a-IJ7RWrlYg",
                    "types": [
                        "spa",
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
            "next_page_token": "CpQCBQEAADYnitR2lyIVizSjfobGuJzGCFtF8oKTOy4IDWNfGY_SSf8tz6FDzc_jsI6vVwnvGdJ4SWqePhl6P3lPBcaSdQrtSa4QZSp9UouFGBcIzYIetzm8S7yjPV5igLvx5cbPsRfzEnU0Aygkvtlk0bD6CrJdqTCGLcH4DJOrVKfIQUEjgDEu6nKpLNcixkI3JU5YBjkEt_Dm_bWJTOcCYrjVWbUzIj0w9Jyy1HD0HznH__MClJf34LzQplUD_1r-TIbTajA_HpZQYjqX7l7RJZLRIParcUccF8JYFt-0QK_sp7aGsrq-jBfMHoZoNvws0DDVpger6qqKtJcMT0rBWWy2M6IkoxfZG5urrE6jmhsKgBaxEhD78CpFIVoGdTsO73XQQD6cGhSXN1w9VVVTHOz0PwX4co-3PK5BRg",
            "results": [
                {
                    "formatted_address": "707 S Kings Hwy, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.6807107,
                            "lng": -78.8965996
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.6821229802915,
                                "lng": -78.8953192197085
                            },
                            "southwest": {
                                "lat": 33.6794250197085,
                                "lng": -78.8980171802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "94c52590f5bb166f2110cfa6e6fa68f8cc221452",
                    "name": "Villa Romana Italian Restaurant",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1488,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/106223598382243073685/photos\">Villa Romana Italian Restaurant</a>"
                            ],
                            "photo_reference": "CmRaAAAA4mvsV0O85RvftnSjmw5VOAwJbB4Qvi1mrkAjo1XPFfPKBNplqovAVlMFwkr6-tsKjEJ4Ynq-lVyRq2ZH_RjcjXgvq23x1lmHixc4Nu7_5AMJhXBy2j9bkGWZdWmv8QZbEhBEwoDbFK0hXVmuYzb49ueUGhTtlBfYKz9YDlSFUk7r1ibit55hGg",
                            "width": 2240
                        }
                    ],
                    "place_id": "ChIJqwMpObppAIkRoMsHipGYgXU",
                    "price_level": 3,
                    "rating": 4.7,
                    "reference": "CmRRAAAAzHfvV-B-RoWoPMEilT65D_Gkz4ixwK1L1fqlwFCGi1xPSKcXrVbK-_87S-Qbs8fL7pqG2Alo9OGI23BxaKvQScMERPVF2JMpmtwqZz-oq4naSi8tt3bKHWV37VqJlQXjEhBDnJ8VekWTL10xOlGGjbK7GhSEWW3BoT6SiexGjCWSqRvIryZakA",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "5001 N Kings Hwy #104, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.7248429,
                            "lng": -78.8459226
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7261007302915,
                                "lng": -78.8443468697085
                            },
                            "southwest": {
                                "lat": 33.7234027697085,
                                "lng": -78.84704483029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "423bf7a21006b1489d4cc01eb0a435abbd6bc4cc",
                    "name": "The Melting Pot",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 500,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/108957482534551302535/photos\">The Melting Pot</a>"
                            ],
                            "photo_reference": "CmRaAAAAF7PKRnJTG8No0hx98MYoVToILzM2hsB74JQx4KYF4O18hzqrBXG72IgS2DEYuHCqzA7PbwL34XRoE146xtNSd0QQySTXPyYRRyybFmHJUuxPjTHaZk90nEjpJA4_A2tiEhAxxQDeZ6Hyil3k6_p27DaKGhQFPYsYTgfA2_6Wr-wgnF3vBY3XMg",
                            "width": 500
                        }
                    ],
                    "place_id": "ChIJD4zEY69oAIkR6VAgOxsZ-58",
                    "price_level": 3,
                    "rating": 4.6,
                    "reference": "CmRSAAAA8c025gmfYER9oKd90U5cnzl8WwESGNO7dK3c6Z_s_kMNc_Cp203Xx2SBXccKSuPzQ5IQudqPyXXmkpdZQKMdsWlVZFWW3KMpzH5xzzzfV46-ImJT1D527PCPRk8SfH6CEhA-o62eYa4Zf1PQeRyFnYrAGhSDRQyJRDDVpYCLqLMlnOAPtHANLQ",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "405 28th Ave N, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.707152,
                            "lng": -78.86371
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7085831802915,
                                "lng": -78.86226241970849
                            },
                            "southwest": {
                                "lat": 33.7058852197085,
                                "lng": -78.86496038029149
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "9608fb6ea15671716b1e0c3eeef1a71d39c7cfd6",
                    "name": "New York Prime",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/112148510376139845664/photos\">Jill Hartley</a>"
                            ],
                            "photo_reference": "CmRaAAAARyST_7lAChd2SyklVxybea7AIRaO_13FRH_-Y-QW5mcRWW-ifx34jc7ho10KC6bFLNiGoPabpJfdPp2S8HKZRKGhrsjLX5DPTq2lwtFQziCnNq9DhL5FcLHokZaBraDhEhAVG9L6XiJxnvajtFxVxwCGGhSGlRVihezTnc3fYhsnbQAU0-SaiQ",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJw-6YVexoAIkR2Yb7KM27_AY",
                    "price_level": 2,
                    "rating": 4.4,
                    "reference": "CmRRAAAAjIK1JsmQEggi7OqwrKsFRCPI0OzH9ZrELsQD_a6g7qiAwxfhqwEYStvXqG8Rfl5pA28SS5bXYLp6M7zQF7tNFvUggIpYnMVP-3LBWi8mymoyJf_anupZH4x-PJ7mrSKIEhAOCUKl9-o61QLvctZ893DBGhTDwnk7qk8cdvVhiMVAq783HX_5pA",
                    "types": [
                        "meal_takeaway",
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "1289 38th Ave N, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.7253312,
                            "lng": -78.87067499999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7266801802915,
                                "lng": -78.86932601970848
                            },
                            "southwest": {
                                "lat": 33.7239822197085,
                                "lng": -78.8720239802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "c186c2e2519e44404d28fbf5a0302c6510066998",
                    "name": "Eggs Up Grill",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 320,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/101932469897334163080/photos\">Eggs Up Grill</a>"
                            ],
                            "photo_reference": "CmRaAAAACKZ2SgnqPXixp8iwGcb7sWVXyBp3OeSA1u2GID0wQzxhCBwN5r_u1_olk5u19KR_4tkDwgGu5d5imTu9eTfkxWX5FiH53D402ljVq2X4yPFYIf40yvc1eBKv86sE_no7EhBsBKRXVtPuMfrN-A6uQ8MrGhTQX0m4o_pXtHWFVtTyNzhTXk4KQA",
                            "width": 320
                        }
                    ],
                    "place_id": "ChIJf4Wwv8VoAIkRMz9WlgSQrII",
                    "rating": 4.5,
                    "reference": "CmRSAAAATbv_soGXDicKpdOh_3ywdue_--um2KD-rSM8v1pcvxDRtykNttjRDqQtWrg3ISGm-7ZVOW36_XIsMUQJ39U9-1eUBaAIY4oVIxyglbHt0InMy3sPSN2bo2s5YHsYSsTyEhA6up4YDEQ2TvyEGoQDn2MRGhQlb87qGV8YY1fR9SYS36V7TkpB7Q",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "4617 N Kings Hwy, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.721479,
                            "lng": -78.8498022
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7227166302915,
                                "lng": -78.8483193197085
                            },
                            "southwest": {
                                "lat": 33.7200186697085,
                                "lng": -78.8510172802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "8cd69e633bc6efa03202c579a4094b042139af3a",
                    "name": "Carolina Roadhouse",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105239608439892315285/photos\">Jonathan Lau</a>"
                            ],
                            "photo_reference": "CmRaAAAAzH_EAVVGIKNauK2ZI-jJ19apQ7SYtn7BNC1nc_y-naRbkyqlftSfmb1SXix_Rqs5I7y9tGn2gkE_NpvGpwCnA4pg2Lw_v_eaD_At5oQCeoLezY4e_191aJ9csTb6rUATEhA4dpk3_Znn4VVhAvLVDXibGhTXstjU9hxcIewrOr7kGKCihBWsZg",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJoXKqL7toAIkRdsEvM6a-d7c",
                    "price_level": 2,
                    "rating": 4.3,
                    "reference": "CmRSAAAAAzhUNkoqKjh0AS1z06xUVrXM83jR4KzSpXYqhPtQ6W2vGiaqGqKPh8ntrXttAYx3E-16Gc1d3F4qlTixtTDrFlyZiF-E3zujUtGeTZDdbimau6vC42WJJS23Ujvw45qrEhBqWzxVYWg2RcomVR8_7hBSGhSY8wigd8nT_r2b56SPvRbPKuYeeg",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "3401 N Kings Hwy, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.7129943,
                            "lng": -78.8599101
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7142434302915,
                                "lng": -78.85843291970849
                            },
                            "southwest": {
                                "lat": 33.7115454697085,
                                "lng": -78.8611308802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "3ec09d77046760d26a35f30c554084fbe74758d6",
                    "name": "Sole Italian Restaurant",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1836,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105940107444961902515/photos\">James Harris</a>"
                            ],
                            "photo_reference": "CmRaAAAAP4ay9Tqld6HyFTtbiQgwiQuW77oYCIkBEvInx-YHPoGUEjlZJFocRQzBYy2wD9mQzT1dwoIWee3sau3SSbYMXuxGRJaR0lhxvKEGeSkG_P1cyv3_7S_W80HzYuuRFhuGEhCse4bv-s1KgICfRU06TtMbGhTnGm5lfv94KnbjTJevOM8oIL_Ktw",
                            "width": 3264
                        }
                    ],
                    "place_id": "ChIJD5hxPJVoAIkROjxFr0QKzDE",
                    "rating": 4.7,
                    "reference": "CmRRAAAAPkcYjJU8upUdjd-CjY26R3oe_9mPuM9XLnWOXUK9jZ5Ld-TRYuVOpOk4WaTxSBpUM_I6pN0AdlVYRt7lUBTQjfOPkM0yDdG0j_D5DH8eCmZQBOXtAOmQ_xQpCvo7vjYsEhBHBo4PurM3S7YVV4nT75nmGhSUWDc-q3uQZKQBpk8k0YOLYXoi4Q",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "5101 N Kings Hwy, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.7254952,
                            "lng": -78.8452455
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7266819802915,
                                "lng": -78.84370196970849
                            },
                            "southwest": {
                                "lat": 33.7239840197085,
                                "lng": -78.8463999302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "18967be7ae9829afd1e3d467cc47ff7b9a03172e",
                    "name": "Aspen Grille",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 699,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107107266319079905021/photos\">Aspen Grille</a>"
                            ],
                            "photo_reference": "CmRaAAAA1n3NqMrsjfJA16AqT-CWUxg6C9PU0nERjUgMgFfYvXCHhvNwfiXoxXgleenCCrtaVG3SkFU2Cv-Vub3FdZUjDzQSqckEQX_wzsqOou1SQhTLMuQaFQjzqUBsaP5BknwpEhAlkWlXErAtC3ei64f6HCg9GhSjjs2sUxYIvSxWHcbAHng_R6sRoA",
                            "width": 700
                        }
                    ],
                    "place_id": "ChIJJftvT69oAIkRMQROVZE2W1o",
                    "rating": 4.3,
                    "reference": "CmRRAAAAp9XIVteWfOTPyco3CUVY6baL_l6CAL4qos8hqLELruaLQAda55_CHDm8YuBN2hDKSZ0KVKnBPxD8HCfqH7E4osfGWwtqz7XSvCU6hDRmqxrZFvPkA7CQP1nNHeK0usAXEhC6AHo4X9SA6CirRWpTAgRqGhRTyKs78EaVwVJGyU0wb3TiNVpuMw",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "504 16th Ave N, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.6995067,
                            "lng": -78.8765222
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7007253302915,
                                "lng": -78.8753434197085
                            },
                            "southwest": {
                                "lat": 33.69802736970851,
                                "lng": -78.8780413802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "5dbc339848bb622d34b31c1df3f5e4e99ac987ba",
                    "name": "Big Mike's Soul Food",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3984,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/118079293813108059283/photos\">Sean Bowlen</a>"
                            ],
                            "photo_reference": "CmRaAAAAh4Z9k_IdBgxW4brKWb2hV1RLfHCNM8gVwGI0kfqWwzcRre08qBUJw-P_1LQKtEYFbtekOrK9F4HUym4kiRwh8qonlzAnRdfm0Wx-qF_fh5LkXs4zwvCtoiaPGycKVKuuEhDuU0otnE1awPap9YqBYvepGhQeognlqDpLShUntjFwfH4PDwauBw",
                            "width": 2988
                        }
                    ],
                    "place_id": "ChIJY4yMafloAIkRe-bVIK3esvA",
                    "rating": 4.3,
                    "reference": "CmRSAAAApSnTb434_3liDSlqTGaYF2NxLtCnT_dAYqgrnONf-Ob0H5wUoSSspFq-degYCyiubjSNycQ6RNswXUtuvJjrgukASWSpgml4tMOyhGyJ466llvYostAOnEFEsD080EaEEhCSBaMYv6LJXzwoviDV6MeYGhQ_ifyLa7P2oAiPXkWLRXJqUxyUTw",
                    "types": [
                        "restaurant",
                        "bar",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "411 79th Ave N, Myrtle Beach, SC 29572, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.7477596,
                            "lng": -78.8156315
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7493267802915,
                                "lng": -78.8140235197085
                            },
                            "southwest": {
                                "lat": 33.7466288197085,
                                "lng": -78.8167214802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "47dff3ac1c3e1aa701370cfab3f404c38a058b8a",
                    "name": "Fire & Smoke",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 4032,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/117070426220207954038/photos\">Chicago 204</a>"
                            ],
                            "photo_reference": "CmRaAAAA-Tx1vvTSaQY9t2B3bPgMcDBXRLTtqkRb2zBp8ym9Y_SXL2DxLZhVI7nngol9LuE4xvNSHF8NAVm_JSsL7Dx8yJzXO7g2zli_0ZR78b1ITOvV0OLPvimuRGSyYrxpVI64EhCWjDpLd7OlFQNkKXKWavyBGhRZ1FbGxZzVcJBJTJSxkxk4eKxCiQ",
                            "width": 3024
                        }
                    ],
                    "place_id": "ChIJ4Vqp2OllAIkRZoL4ppA5IO4",
                    "rating": 4.6,
                    "reference": "CmRSAAAAGClGagFC-74y3QjCKkDcdPBOFK-MYzl1a0hW4dr_GDhT-z8x9rBAhooJxzyp1YJLtU5aCfusnfbFJ_tIfEDxx4Z7uikJmNAz3pWSUrPFvzKpe8Tsec8_JDGmj37JSwWDEhDtuIq09aQvnPSiVz2luaSFGhTbMxv341A8MZfPawOn2VYCQHfibQ",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "503 61st Ave N, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.7356854,
                            "lng": -78.8336152
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7371615302915,
                                "lng": -78.8321509697085
                            },
                            "southwest": {
                                "lat": 33.7344635697085,
                                "lng": -78.8348489302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "8d0b825a5bcd6a23140704219f1236be79e703c6",
                    "name": "Luigi's Trattoria",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 429,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/110769452575876440715/photos\">Luigi&#39;s Trattoria</a>"
                            ],
                            "photo_reference": "CmRaAAAAeQ6qW68FwEa1hSCzi10jfI3zYVlA6Q7_S85DDYMZt6jo5DDHUDDMnHoD0YLdG0Hdi2_Z-t5doz9eM2ZDjqBMKncBVPN7kd8hZ3zzFR0ncNlVtQH8nOuQ7wSQaiulY43DEhBktYGKRcsGAMNIwRaxPy_UGhTi9zYYTs6sFzmRN3I3KPI65Qlfjg",
                            "width": 430
                        }
                    ],
                    "place_id": "ChIJWdXJCf5lAIkRtsVSYMXoOoo",
                    "rating": 4.6,
                    "reference": "CmRSAAAAniTKQvrO-LzUTvuqnT7FOd5fDRgv4FzMCh8n8oOby6IBeOt3YtD5PYEjr1GSsuTqzh7sNIlmddQ_lOC7SprJvtDXfZTpXlCOOp3Qgq--DU8H2dXB5sfrxV9awNj78iFdEhA4dFHGDuW5BZLwwstREfmzGhRr5_Xgx9QGvRN-HLKHC6mrPsETFw",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "store",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "4209 N Kings Hwy, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.7185385,
                            "lng": -78.8533151
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7197763802915,
                                "lng": -78.85183096970849
                            },
                            "southwest": {
                                "lat": 33.7170784197085,
                                "lng": -78.85452893029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "1db885ee6f8540d5b3c8430a48070729daf82c3c",
                    "name": "Toscana Italian Bistro",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 450,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/110728256165840015239/photos\">Toscana Italian Bistro</a>"
                            ],
                            "photo_reference": "CmRaAAAA3pmBOm-LqAX8Mtt-wVrwdTAaj1bCW-GeuZO7ZDO6krvEowQmHDM5T-Tslpj3XwLqbVwIrandK7gyhyLVNrHXSNeDVCqmnOYUPloQ16EXndZnet2dZoKqu2m7NedfK6GnEhBhZA0vkbzrGNXseRdK-bBJGhSAk-xLoeTUz1hXori-yzOADbpfzw",
                            "width": 870
                        }
                    ],
                    "place_id": "ChIJk34yXbxoAIkRxVY6nGXlFUY",
                    "price_level": 2,
                    "rating": 4.5,
                    "reference": "CmRRAAAAXp9_VgyvSkeZPa5-EliN5GGo3h9U--ZgKkTXpP7bdfGROEnrPS_oJ2jQKUPeVPRbenCJV-4NDoCQbRB7vxT3JXA41xjZUXYwLw7ijJxou98nxGwPC5SvoJ8ktkSgLlXtEhDLvfsU6DnC-ikULFidUDtAGhQsC_pstuTM12e7nfDFjG4eBfGXUw",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "A, 700 N Ocean Blvd, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.6899128,
                            "lng": -78.8813899
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.6915768302915,
                                "lng": -78.8799466197085
                            },
                            "southwest": {
                                "lat": 33.6888788697085,
                                "lng": -78.88264458029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "b9f2330bb48745dfee28318ebaddce748ac9e885",
                    "name": "Art Burger Sushi Bar",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107931922378043932328/photos\">Michael Grimm</a>"
                            ],
                            "photo_reference": "CmRaAAAAPPkngC6X6V72RE-kcfm49-bzp27bTCCJEjnyZwKs-SEap9Wl48bz5g0tZ2gDQUIb3iJqfDNEl2A0sTrBSHUOmGbqAkiD3g_62j5N8WpmqwnBmLTP43EBCTYc3JSF674CEhBW5MskrHJh8sCJHpcZoeRNGhQcu3mgIdoCF77GaSHvKRmR6t4OEw",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJlfJii1RoAIkRv08baWMofuA",
                    "rating": 4.5,
                    "reference": "CmRSAAAAdHKT7tyVn9b-7EzlCKpQ7gOM5jSKpKYSIEx5bgQdBw90dvzXsHEtQswx7uISVyO7Xi14HPNREm_hDhNh600dWbtoLaKkOYsqTmRWCbWPOEwAg_BMQUzAcj3r33c8ggHuEhCnLUn-mjLVHutjA-2pQF38GhTsw_5-VplmuQcZ9NIrBskCLQDG2Q",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "7050 N Kings Hwy, Myrtle Beach, SC 29572, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.742505,
                            "lng": -78.82336699999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.74397228029149,
                                "lng": -78.82215856970849
                            },
                            "southwest": {
                                "lat": 33.74127431970849,
                                "lng": -78.8248565302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "d0cd7293d00445e3ee4e8b1fdbb5ff25f1fb98e7",
                    "name": "Flamingo Grill",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1836,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/108570728917737584809/photos\">Robert Fisher</a>"
                            ],
                            "photo_reference": "CmRaAAAAjCtBjZ1hqOXI5Mpv9y6VdXeOuXgiNhpxGyqn3ZeJOtbz3MStLP72DXtq36l25BevZHz29fIE4neF3uXM9alBZU-6cYdMmu6n8-QfREQFleoWxAujVeI90wNVbOKGrw-kEhAOHUmtxCC4ypjWD5tqMK_oGhRnI1iC3mbrwABfOkdtYNhpT6dvGQ",
                            "width": 3264
                        }
                    ],
                    "place_id": "ChIJ7TDpuuVlAIkR2c8kOqe5tZ8",
                    "price_level": 3,
                    "rating": 4.3,
                    "reference": "CmRSAAAAuVcBLxAj2MYn7UrfiTdBNxet16GIk6qmoqnvvHHwU97TGICKbeH55wj8DdYmat5PHueW_I7xVBO1QLPUB4Ni8M5t41IXp6K3HcQsymxawU1s3leGIeAilkRy5_2f7E6AEhBSqnordZs4Xs0OVYMMUlnjGhSbsHhYisrtLJuH38U-anSeIasCHA",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "5223 N Kings Hwy, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.7265519,
                            "lng": -78.84356149999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.72782798029149,
                                "lng": -78.8421232197085
                            },
                            "southwest": {
                                "lat": 33.7251300197085,
                                "lng": -78.8448211802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "250aefb6b7d04f7e9b1a940b391550eab7837fe1",
                    "name": "Ciao",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3120,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/118394136246090161504/photos\">John Rodes</a>"
                            ],
                            "photo_reference": "CmRaAAAAbCoBR_mNjTPBaoxoC7Ox3CbjvJQdAb-bSsXhjoRT-rqtLSF7a3Ch41oRBD1CATe2-UABRH_AVk5il4Qq-MZSbj6Ogp61eBDb8a-4uSQIxprtQug90td57Fop7V7rhxstEhCrjKXjpAKQqrHIQk8aRtpuGhSVXLLmu0fEzhpvR5AjEUggmJgH8g",
                            "width": 4160
                        }
                    ],
                    "place_id": "ChIJV-eDSq9oAIkR1nXbqdvLwsA",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRSAAAAhHrHXn7essApIOIBtvBqjVqFye7USM0seGLKqgaqEAXlPYYyM3estTGczvZKWqx2LkeOIRP8NquFtVkkn9L4ePzhUmLNS7J1lOypPdY_RD7f_Jds_j4sMWkTgwoPOhe0EhBWIIMnld8sArj32PbXpD6pGhQi982Kh4MsxfH66WppDMh2sGtisg",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "1913 Mr. Joe White Ave, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.70865749999999,
                            "lng": -78.8979954
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7101515302915,
                                "lng": -78.8964502197085
                            },
                            "southwest": {
                                "lat": 33.7074535697085,
                                "lng": -78.8991481802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "c9069946d9dd474f7d86b1b45c5c139553b92e60",
                    "name": "Simply Southern Smokehouse",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3024,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/113964206675147355432/photos\">Greg Reed</a>"
                            ],
                            "photo_reference": "CmRaAAAAMigU46wrS6jzG40_YEPzE5Gsrf3Vws3Y53nmK-Fue27Zrry0eWIN7HFC9gSoR8spSxzPfExJXpypVyLZm5fq4687Pr_lWTM6WI3GskzzQOkd9O83_CrTHTgr1I0LaoeoEhCbioWFsFk05-efwyw18TBnGhR6fMSBXRUjpc-Yq0EN-pm8xK8huQ",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJ-xQGyRFpAIkR_2S5fx-9eOE",
                    "rating": 4.7,
                    "reference": "CmRSAAAAVL2Gfe-ANKDa7qIp8-m0WJguf8XayZYjBtJvXBrxW1Ur3KBEDiinA3KpT_jTC-Vza5BIprRvlUsjiCt3WoSTKcZ3AVDVYpAU4DdWZ6kKz43dHRuGClDD5qMA_93-PNAsEhBwdGjl0E8rEA5eZw00TcrTGhQYMUYvbtPAaCKhUupsELpnkogoxQ",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "6401 N Kings Hwy, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.7380782,
                            "lng": -78.8299501
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.73932078029149,
                                "lng": -78.8284732697085
                            },
                            "southwest": {
                                "lat": 33.73662281970849,
                                "lng": -78.8311712302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "447d420edb582f6952adecaec167aac7445a5962",
                    "name": "Mr. Fish Seafood Restaurant",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/112081645848534581017/photos\">Robert Rodocker</a>"
                            ],
                            "photo_reference": "CmRaAAAALW_rvgZ0xaGLvxKMrASvd3X4PPT6THfek5Ikf-Vg_0BrtwokGLfkMYtTGHB3wrZiiVxAumfXi4jYPuKS8yeF6NdGUYrAxNTe5Ke31uVPZrWzRFp2yQji3ODQwRM1Mv7pEhBojkjF4tE-QjHZDxWHyTXAGhSB_GVRSRmbJKHXrDC8mRytGzHWVw",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJRddSO5VoAIkR4Tq4hMzpN6o",
                    "price_level": 2,
                    "rating": 4.2,
                    "reference": "CmRSAAAAB2pDovWIJSNPjP_DvNutidwFtR2F-uz0h1a2OhD1YcjzZqMSYTflThpvg6WX9fo3syXbjuDR-Umh5kLnPbfjme-yrMsFyfW9aHk1SU1pfiOzCauPr_hphhsXrH2z3hcjEhAdaKOUW1eIMI2gOZ9ak2WXGhR9qEbSzUmxAdSU0gwh3N_Yn9VV0g",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "4012 Deville St, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.67055099999999,
                            "lng": -78.938949
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.6718834802915,
                                "lng": -78.9376677697085
                            },
                            "southwest": {
                                "lat": 33.6691855197085,
                                "lng": -78.9403657302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "7ffe04196131954613bc96cc2c2cc30ad3195d48",
                    "name": "Crepe Creation Cafe in Market Common",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 5312,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/109731997163909807156/photos\">A Dawson</a>"
                            ],
                            "photo_reference": "CmRaAAAAEUQ17mlp4EL2Ner92Sij-CacMId5dmWBWaQef-aItka9z1JPaQBxNFB3o9h5hay4UsW6uMGg5G7-3GTa_iM2S3k9oTjkOm6hepGQtgliYMprwPH-NFD-jn4rpw_AKRLGEhBqq9yw8Brd_iz5KlDhSFSwGhTj-44856QurV0jw-YrqkX6Brglfw",
                            "width": 2988
                        }
                    ],
                    "place_id": "ChIJ_QBMPgVqAIkRn6fp7qV_rOg",
                    "rating": 4.4,
                    "reference": "CmRSAAAA4s-z8nHy1wX_iCf5l3wexqCV50y7BvM28V7uSraIZiz906BuDRmhQ8KToSebOoIGK4DFwKmxoO5YS3WuIBQZ5H1P6F9UrQ_FS5HIpoB-lkGdoHLVryEbeFH9vmirk7vdEhAYuWoqXGSpSIUcALLYYFnPGhSf9XnXOLWYvpLb8AZSjzxzLCO6_A",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "2920 Hollywood Dr, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.7197066,
                            "lng": -78.8782749
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.72123818029149,
                                "lng": -78.8771109197085
                            },
                            "southwest": {
                                "lat": 33.7185402197085,
                                "lng": -78.8798088802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "fe3d43406a44575194d4adefdf11378ea50d34b9",
                    "name": "Rioz Brazilian Steakhouse",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 480,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105073860551631988142/photos\">Rioz Brazilian Steakhouse</a>"
                            ],
                            "photo_reference": "CmRaAAAAZuB4wdY-xOZ5D2GqXr_KRqXaozqTKROA76uUeMp9hsw5rjrRv-JC_kZiASZd3F7RsaIGJckIaGeLEyDvrn2yDDxoL6gxhzI707VllBoazohKnydd1sj-mQ0M89XHmPx6EhCHeBfyoMDirrFtj4qoimkPGhQCFsmwsqT7sSfAljMi3sRId-YmnQ",
                            "width": 480
                        }
                    ],
                    "place_id": "ChIJ7-Rog95oAIkRhNwNeLW8298",
                    "price_level": 3,
                    "rating": 4.6,
                    "reference": "CmRSAAAAANK-Jdl1lAgoZBBCHrb2r0PI1XfghQSmhw251x98ORMM1MLQijfajGXuHa23_oURDbJIXbvUfiT9of9zunyRdC-9tt8oPEjIEIfIXr9aqOIT1LRFQEwYBmJe9jH4-OkmEhDZjQH43PY-X-wG8uBuBpFOGhQw8B1wDHsAVEAemzEtuTmUy00rYw",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "1604 N Kings Hwy, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.698949,
                            "lng": -78.87543749999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.7004149302915,
                                "lng": -78.87423311970849
                            },
                            "southwest": {
                                "lat": 33.6977169697085,
                                "lng": -78.87693108029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "1949829a2825aec9a4d831482af122422ec17eac",
                    "name": "Cafe Old Vienna",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 720,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/102676994290891596079/photos\">Cafe Old Vienna</a>"
                            ],
                            "photo_reference": "CmRaAAAAVW2bbonLBe1F5R8URZBG4RKxmhhjhYu3US-pPJCePr9xk1phVpfjVIJtU0xwGR0z6yQ2yzxWauTXBNEY-Bqzm0y8jzTrcqILlywvPiTn6ZsyHLSXNgXjlkMKv7nvzxu-EhDVB58Z1giznVgzQFGDWJuYGhSBigG3Kx9H8zr6Ku8wgZax1PN3Hg",
                            "width": 960
                        }
                    ],
                    "place_id": "ChIJBxxsevloAIkRwBoK6kJi3YY",
                    "rating": 4.7,
                    "reference": "CmRSAAAAz5hxDL2_GSHOxhmhiTOZ_c9DoSIJRh1TI1wgF_Iulor-t834HxnA5mKAcAwkWe5Opqe5Kwk3Guo87NRSbWPWkeG4ntAfKuOmqslVsiY7qcRgfP_sCVy-ZZgapOtELIYTEhBsto70KlWux-yLknivR114GhTnJYIH3L9kZUyrHc2sJrck0qFJWg",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "3751 Robert M Grissom Pkwy, Myrtle Beach, SC 29577, United States",
                    "geometry": {
                        "location": {
                            "lat": 33.72404389999999,
                            "lng": -78.8673112
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 33.72517153029149,
                                "lng": -78.8656864197085
                            },
                            "southwest": {
                                "lat": 33.7224735697085,
                                "lng": -78.8683843802915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "ff40f43894fbab8ee0a759fae5fea9c598e420da",
                    "name": "Croissants Bistro and Bakery",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1296,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/106257246094931549300/photos\">Croissants Bistro and Bakery</a>"
                            ],
                            "photo_reference": "CmRaAAAApT9y4WANIWy7WRUWsERid1gfd2Vz_n67ovlTC8e8sT9Q99Q4ioy7yAE5YAYYRv4ffhDc6Fi_TEOsAYbvQc4P5AFtfT2ETRlccGUqUz3U3CPdTyV74lOKVTvUvEXsBR-YEhCs2m8P1uFN506riiDBexb-GhTiiHbR4JbgiwBpSwSBJ-lycU3nRg",
                            "width": 864
                        }
                    ],
                    "place_id": "ChIJxblM0sVoAIkRAL6R8Ou74Xg",
                    "rating": 4.6,
                    "reference": "CmRRAAAAG_VtMzoeNuxAG0fXZ-7apmL4W7I_kK93OmoN7hD_QLCZamig_fCwovQDpKFTksx-dE0tKiX8-Gtck-Z2JHeqa2e5Ym9ZmlCoScF_PCCc9R9TcbrYgXgRuKTroITiq97OEhCYPScylrPjR3uix3Ub3Y_ZGhTEWDygYgU_XIeixMH2ypPlLblBng",
                    "types": [
                        "bakery",
                        "cafe",
                        "restaurant",
                        "food",
                        "store",
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
            "city": "Florence, Italy",
            "city_id": 11,
            "lat": 43.7696,
            "long": 11.258,
            "summary": "Florence, capital of Italy’s Tuscany region, is home to many masterpieces of Renaissance art and architecture. One of its most iconic sights is the Duomo, a cathedral with a terracotta-tiled dome engineered by Brunelleschi and a bell tower by Giotto. The Galleria dell'Accademia displays Michelangelo’s “David” sculpture. The Uffizi Gallery exhibits Botticelli’s “The Birth of Venus” and da Vinci’s “Annunciation.”",
            "visits": 1,
            "key": "11"
        },
        "tourism": {
            "html_attributions": [],
            "results": [
                {
                    "formatted_address": "Piazza del Duomo, Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.77314499999999,
                            "lng": 11.2559602
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.77488434999999,
                                "lng": 11.25972295
                            },
                            "southwest": {
                                "lat": 43.77174374999999,
                                "lng": 11.25256315
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
                    "id": "b8d7fe306e5b50c1fe4978d829336f7ab5753acd",
                    "name": "Cathedral of Santa Maria del Fiore",
                    "photos": [
                        {
                            "height": 2048,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/101266923102970896987/photos\">Phill Walker</a>"
                            ],
                            "photo_reference": "CmRaAAAAXNGZYl2BNvJSYGisw3TnjxuHwdK-f5nnSi0CaDnlIbzNW0kvO7ngUvko5gLC5PU2x0oxhm3AG1fJwocTBzcNy5IEBiLI4Bu1mVYbMoEwwbk15u-6VJu12mPpIldk0-0UEhAfis8dEnhC-1BJX6Sn4UdPGhRJLoqyAGXQiPU5OSE5gLZLwiWiig",
                            "width": 3072
                        }
                    ],
                    "place_id": "ChIJ9S_ivwNUKhMR9fGqh4RDkVU",
                    "rating": 4.7,
                    "reference": "CmRRAAAAsjbyNul1N-88JUJGy0WiZa87M3rcHQwz0seorQyiaq4rL2taswrjoPNzxrmMdeOGcSCK8xpkLfV8daCqCl8nVEWzFuyyZo83YdDOafmDZAW9g8OGMKTydKX3XkQrldunEhC5W4PEjWc_ILWvTa4p2Sv4GhSTrIXo177v9oq9EE2UMkm-F3le6Q",
                    "types": [
                        "church",
                        "place_of_worship",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazzale degli Uffizi, 6, 50122 Firenze FI, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7677856,
                            "lng": 11.2553108
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.76976363029149,
                                "lng": 11.2569125302915
                            },
                            "southwest": {
                                "lat": 43.76706566970849,
                                "lng": 11.2542145697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
                    "id": "d789c6ccf6db8a8f02e662e870f48ced1d1b25fe",
                    "name": "Uffizi Gallery",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2336,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114827300666391331302/photos\">Lennox Head</a>"
                            ],
                            "photo_reference": "CmRaAAAAZXzzDiSQr9wgE-bPMcJHoivQBaCwtZglEpHNdeKdi_VjjCItmvFyD1S_-tQrsR2cAVnmSplcqr6fO_gC_NBrX8hL4Td7MBAka3oTE9b9ORGJbSqJOPE7tVA8uZAWXJVjEhBEf1SEflWMYYqbXXR9CT8MGhQ8WJyojErLi44EUwpHNzznJK80Dw",
                            "width": 4160
                        }
                    ],
                    "place_id": "ChIJgZDFjQBUKhMRzcTwm8i33s0",
                    "rating": 4.6,
                    "reference": "CmRSAAAAAB-lCAhNwojW5VzRR3oO272g90Dssu_8vprjygVSkMbK7jaCPQYCZiRUSbCVxRqdtcrogAI7YoGxMY0LXutJK4UGNc_-ifvg93Hryk_4-_WHhF9z5UKOeFNZ9qerTWNnEhBcNiuXG0JQnMGAU2kSzg6sGhStWUQDr06NbGFZXQqwJ-5xCwkcuQ",
                    "types": [
                        "museum",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza Duomo, 50122 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.77280599999999,
                            "lng": 11.2557051
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.77596659999999,
                                "lng": 11.25953055
                            },
                            "southwest": {
                                "lat": 43.771383,
                                "lng": 11.25274955
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "dc48a24730fa88da598208329efbff1471a935d1",
                    "name": "Giotto's Bell Tower",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2952,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114947476240296261008/photos\">Rafael Vrenna Bertazzo</a>"
                            ],
                            "photo_reference": "CmRaAAAApt9yyVCbTlcUePawGKx2TVjKB_bZ08kfA_CZvHX-ab8Q3GypWhT_uF6Bqt7qx3yhzIWlhUWLYEZoy9ADU2OGWaIxkUIyXUDpoM8Snd5jhnDGJnVx2GMja4iGjDjebNQdEhDgxX6pf4QrD3QAfmMQElVlGhR9reBFexJs9bTDcZvCipaHe_t_2Q",
                            "width": 5248
                        }
                    ],
                    "place_id": "ChIJ9S_ivwNUKhMRuHV-NzGBS5w",
                    "rating": 4.7,
                    "reference": "CmRSAAAAt9vu4A5a79NTKbze0czK2ZdQuLj4j6pBh2A7TJdPRSgHn6EUn01ZyM585AbECHa90QOYfB4zNg2880Jmpx-DjzDz7pDrH__XojRBRcOCj__bYoqKiO-ukrkCjvwJU0s1EhCsta6VblfWAAwOFoplpkoaGhRehRyX5CEEfZyOSN6IE4bFJClaKg",
                    "types": [
                        "premise",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Ponte Vecchio, Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.76792500000001,
                            "lng": 11.2531435
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7693165302915,
                                "lng": 11.2544564302915
                            },
                            "southwest": {
                                "lat": 43.7666185697085,
                                "lng": 11.2517584697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "868c34d70ec74e2a289068d01e385e4b746a6b6c",
                    "name": "Ponte Vecchio",
                    "photos": [
                        {
                            "height": 2322,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/110440999131703381046/photos\">Tony Napal</a>"
                            ],
                            "photo_reference": "CmRaAAAAsRtuISHEHw9z8ybLhnbqQJL3A0N5ed5pwnLAuUxlCwn8hzdJyfXhhr9ZlsHqo_JOKN0xCUk5IVAYBLXr7eEbX_Zk2_9pTeARNAvDXuAHm0sBq-CNi5W3V8fZbLxBe2IsEhARUd0pGty1TyLkVNOPWyHHGhRSBcCNTqwwZLQYwche4dJBqD7riQ",
                            "width": 4128
                        }
                    ],
                    "place_id": "ChIJZ7bcoqpWKhMR6ALnMOgKMUA",
                    "rating": 4.4,
                    "reference": "CmRRAAAAds6f4flFRjW8YabktZFEaJs_dFBptkLbJIz0IlJ0SM2jKi59inZ5OX0l7aeHqwOIPUdmvnlsrPEZyY70leBEdv0DCaISxZJKRg9NAFcT67tV9aYHSAU8tFOT-wfOOeinEhCT_wrdyo62plzyR8eFXrJBGhTq2taISBsKyWx5CdD1SxZzCj0hjg",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza del Duomo, Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7730912,
                            "lng": 11.2554649
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7745135302915,
                                "lng": 11.2562859302915
                            },
                            "southwest": {
                                "lat": 43.7718155697085,
                                "lng": 11.2535879697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "a6c3c6942c8e7df0a49b8334b4ae55b1a8233388",
                    "name": "Piazza del Duomo",
                    "photos": [
                        {
                            "height": 1360,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/116155377509858103497/photos\">Bregeon Pascal</a>"
                            ],
                            "photo_reference": "CmRaAAAAKID6moX6imMksNu8C6yf50HetV-81kIeznR0edbriAXrRst88A6bh2w3qxtxGw19B755jvZ9m2T8U3ojLA_eVP8-GphuPrDWMPUawHmUHid1efHgXnF729GhSeJIXytBEhBlt4Q6XXjYVVIDzrSNpRzJGhT2wNjvWphPWYwx65UzNqsm0vFGFw",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJb9JLOwJUKhMRrhLYS5q4NI0",
                    "rating": 4.6,
                    "reference": "CmRSAAAAUcM0OfpYuJd_rP2iCGrXzotPtJttotcUb0q9ADxSPSjcKNtsHmmC9s5LvDHCg_ztS-KvqLhLahSWApXgkr6CAPbbOnN3fVEmD9VhRw23K_2wiOnjFiXj9DaEDTiKNf0NEhDkNI2nHkneR1jqXxfnzcFVGhRhXunt_pNCneAlaIDvuicPDkVRJg",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza di Madonna degli Aldobrandini, 6, 50123 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7750913,
                            "lng": 11.2533903
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.77628643029149,
                                "lng": 11.25664085
                            },
                            "southwest": {
                                "lat": 43.7735884697085,
                                "lng": 11.25123985
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
                    "id": "8d6e561f1b7ee05cbfaa2bdb62ff5a3daea81b6e",
                    "name": "Cappelle Medicee",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/109881504255410671302/photos\">Dong Hai Phuong Nguyen</a>"
                            ],
                            "photo_reference": "CmRaAAAArdXdu7-AfdYIGvTfpNB6DWUTfBQDqyvrCYQ_WlpvfBkCv_NDltsdxv_rFg7ITfnFz_skY4yCkHek4BRMcFnMHP-K5RvYEkbPBj9qHEJSlVhP9TMp1YniSVxmwAI_GpO_EhDcOE65LIIR8Xy00EkvXlwiGhQ-zUYZej74_kEMNUpUZE6bh951Ng",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJj_nVhwJUKhMRcHH43IISjnI",
                    "rating": 4.3,
                    "reference": "CmRRAAAAyAvPoYs9Ml32VTaKBvTBZp0PyQuU4mm3v-3fUsAeUz8f4rjf9nCeVT18NrIcvdfJ7AyASy7wjvhKHxKMdO0BfycyVmOnI6wDH0RQhnWs2UsCBFvm66ULAwMtJ7Uhyc3dEhAFPgWhfWdjxiqqcy-luUGyGhR1JXavzwXD-SYvah3c10s4GeFkzg",
                    "types": [
                        "museum",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazzale Michelangelo, 50125 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7629314,
                            "lng": 11.2650561
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.76404253029149,
                                "lng": 11.2663434302915
                            },
                            "southwest": {
                                "lat": 43.7613445697085,
                                "lng": 11.2636454697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "f1c0cb318f82d4949a640a8eacacc5c853e7d255",
                    "name": "Piazzale Michelangelo",
                    "photos": [
                        {
                            "height": 2322,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/117624122618612896237/photos\">Borka Danic</a>"
                            ],
                            "photo_reference": "CmRaAAAAH-TrXSNYNPdCiILvxqDw_gWznz8TfHsSb9ck3ZbS5xsHFkDk3V-ZGzoY3a3BRGF7Q-M2tadQyO33gud9nbaHbDvbbjWzsjbEH6YkGgvYX3uZBk9-EHIMoDSijK3NUGSlEhCfDcQQOtoxgeTb78MEA-bbGhS6XhzUXC0z2FPDtMGEe8ykCxcoKQ",
                            "width": 4128
                        }
                    ],
                    "place_id": "ChIJQzhmQ_dTKhMRGVENguFo97Q",
                    "rating": 4.7,
                    "reference": "CmRSAAAAxB6yM5eCshho11qaqUW8xR897c6UEw6ayJOHGsqEwx_sCWjD7nqVKPT5a0_Myx5MMVUU1DOsLLjZPpXozCYnrNnjMF1FrfCv_vYyTv5qwABxfXM5f8N_qVR_hN255R7YEhAnM_uMd8xiUsgRF_g1jKKxGhS8hKfABQlZzmOZ-TGsjG39ZpTYYA",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza de' Pitti, 1, Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7651533,
                            "lng": 11.2500081
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7667885302915,
                                "lng": 11.2511070802915
                            },
                            "southwest": {
                                "lat": 43.7640905697085,
                                "lng": 11.2484091197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
                    "id": "413ea74228c44bb2b1e270295bd51bc26a15e199",
                    "name": "Pitti Palace",
                    "photos": [
                        {
                            "height": 1440,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/102751890668715730241/photos\">Nicola Pezzoli</a>"
                            ],
                            "photo_reference": "CmRaAAAAA-3QW8oD3YktuUQSmbxJmAOTJdOM6whRQaSbKN_aaxBXiTKxFKxqG52GiXOUcII_0DI8oZCB-sPLkPz3bdcXxosBy4Ct1xB04UAtqgyikss1bl8JFTLcu_eV6ocdbc6fEhB0oeislgCZbyMlIyYMldb3GhTV67YED98tMY299O9OznTppFaMqg",
                            "width": 2560
                        }
                    ],
                    "place_id": "ChIJ8ZnbQVRRKhMRKlDx5uTM0Fw",
                    "rating": 4.3,
                    "reference": "CmRRAAAActrc-O6h2xWVRsMt4fhx2nUJ2nR1ExrvergGkJ2RCJ-B6gURXmY-mfLJ5g6wTrjtD4l-2rS77MmNqBxErXDzB4laES2QDibSun0jTz-05GgYXajv1iwDywM6Opc7n0HaEhBP0DTenH3tEosohh6eL7wUGhTnMNLeGzo3SURjEicMEtGWcU9q5w",
                    "types": [
                        "museum",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza della Signoria, Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7696855,
                            "lng": 11.2556422
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7709574302915,
                                "lng": 11.2571594802915
                            },
                            "southwest": {
                                "lat": 43.7682594697085,
                                "lng": 11.2544615197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "974dd27ec3a3602329f198315c815d11c36f1004",
                    "name": "Piazza della Signoria",
                    "photos": [
                        {
                            "height": 3456,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114642397160693749823/photos\">Emiliano Quiroga</a>"
                            ],
                            "photo_reference": "CmRaAAAANEijKrrGRV9wg9jiToxRB9au8zh25sVHa37HrLtvTKss6WR-oYdIxEBwqR3cHtnCNGFqgUSlqQMX5gaopihcuEtlg434LTBlOjpH3r8BxS2tGHUS53-iZG8Wo5bUr8_TEhCfYucvvr0KsfdTt-OGFT--GhQZZFpDG_1078y2SNjdjMkvg1lxzg",
                            "width": 5184
                        }
                    ],
                    "place_id": "ChIJNa5CIAFUKhMRbZDj-HFpvJ8",
                    "rating": 4.7,
                    "reference": "CmRSAAAAdZaDkBqGwZUnHQGpZuTFmqat0P3zjWoTUyRgOJOBb7pLBLMo3ukMWQAiz-IIWOuMyXCE1FPzIu3iZGRL2tFEfGLzXY2kIzyJsquh6-TA1fCqV-zj6mjN8BBBydv6qVeEEhAn1MVZD2_pA-Zc_22t6InPGhRxKuVu_3pLnYq2qgAQysgu3dRUnQ",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza della Signoria, Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7693012,
                            "lng": 11.2561509
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.77054328029149,
                                "lng": 11.25800555
                            },
                            "southwest": {
                                "lat": 43.76784531970849,
                                "lng": 11.25507815
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
                    "id": "564a1f6a79a69a6603812dd9d343da737a0028d3",
                    "name": "Palazzo Vecchio",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2592,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/112566389303436141651/photos\">Giuseppe Porpiglia</a>"
                            ],
                            "photo_reference": "CmRaAAAAb8NDzNYrpLUDh2Jgij_PtffB5nspkNAuOQuWPN9E-Uon2FMJ__PhspcCXybEj37DsFswSGrabgSqyNuWjw8P_YbV7Km42J2z8X-MF7YJETje1kvUYqzZX4AmE9125NdWEhChCcwVANjOHpJJTgEM5cp-GhTPD_84L14yDfaCS_hPqdx2R6og7A",
                            "width": 3888
                        }
                    ],
                    "place_id": "ChIJ-ZN45QBUKhMRh1fGVOcr4uQ",
                    "rating": 4.6,
                    "reference": "CmRSAAAAGKa9oe_BQuWLiMu_15Q7Q72Pdmu81fecKXYJy6NwmQKFcwVRe0J6vrQxdnx3ROGpoKE4vT5T0eilyhYm2-Dzvel1CeXXj4pZ1FeVofZGnYtD6TXoSTy2WbXp2EJcpkn3EhDqjhUllSFFiUc7CXXWShOpGhTPBuCyS-izhUpn4GClUu966usf5w",
                    "types": [
                        "museum",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza del Duomo, 50122 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7731587,
                            "lng": 11.257014
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7746356802915,
                                "lng": 11.2585462302915
                            },
                            "southwest": {
                                "lat": 43.7719377197085,
                                "lng": 11.2558482697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                    "id": "d674c4f22f1b643bc866434cb1a6af6fbbd0997f",
                    "name": "Brunelleschi's cupola",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3381,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/111479825330653512832/photos\">Rick Schwartz</a>"
                            ],
                            "photo_reference": "CmRaAAAA8S5z_05BTj_L_4EATAxGZeWPQ0__fGMEyeXtzsOKOQwA7wKtdeB9rfwSK5_IK1zT5mP3KFOP0PZLzNZ9Dj5gC-9C76BfPRnX4JpQVNlx60WqnRxrAPerEFIjr3JswimMEhCwtNR_T6GUggCPnYHCdib8GhQAfckVdr1T6BDdF_FjTR0e0Zf86g",
                            "width": 5071
                        }
                    ],
                    "place_id": "ChIJnbhz7ANUKhMRD-fzrt-dp4c",
                    "rating": 4.8,
                    "reference": "CmRSAAAAwl-keuk-75YaoGHV7l9p252uOldBsZpYANzoY5qLy3sDRA1qokgXiWFHAINTsrQoUcHAZysllt747q5Ob-zNDCEUN1bvWL0tSyTBWOy19D6THJ9kQqp-MPL7LCdcif2HEhCmrjgUDNDCTg6r8rtFX5mYGhRuKJrlP81rLn0VyhqBZF109nVPHA",
                    "types": [
                        "point_of_interest",
                        "establishment"
                    ]
                }
            ],
            "status": "OK"
        },
        "hotels": {
            "html_attributions": [],
            "results": [
                {
                    "formatted_address": "Borgo Pinti, 99, 50121 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7770387,
                            "lng": 11.2661952
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7783336302915,
                                "lng": 11.2676602802915
                            },
                            "southwest": {
                                "lat": 43.7756356697085,
                                "lng": 11.2649623197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "8913d707999ffd66aecc3fd7287f575a41f16dd9",
                    "name": "Four Seasons Hotel Firenze",
                    "photos": [
                        {
                            "height": 493,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/117354473368084754776/photos\">Four Seasons Hotel Firenze</a>"
                            ],
                            "photo_reference": "CmRaAAAAUpxzgZYOjjPdyiRrH6ZORomdaUQ0ncqFx8xVxhavcL8fjtyMkFEcboCWSD_29lRbyshDC_tOBGxyJW4bhTyH0MlfdMzZMyB7fKJtqpNPvT5vPxRGIeqWJyy0hbW1OIjMEhCCu9zQvq1XITvtTpfTjKGhGhQfELdHAWTpafQX0PzVU7270k2ayw",
                            "width": 394
                        }
                    ],
                    "place_id": "ChIJeQnHJxBUKhMRqEIwEupVmuk",
                    "price_level": 4,
                    "rating": 4.6,
                    "reference": "CmRSAAAAY-z-9CjtpJroKTFu444iEjq8PNAvZnGBQPWx5j_ISLoLkj4DQXfycU0Pp7S1pXGEQswiP_UzDQDfSsI_hLtR2_jklvXbaJMbsrnzfY-ny__ddHJrnToAcTqffHSoqzE9EhA_ANuaJqiQb2qIGbV4A2qLGhTlZO6UbrADA4s4vZxS1WTQkjpYgg",
                    "types": [
                        "spa",
                        "lodging",
                        "health",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Lungarno degli Acciaiuoli, 4, Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.76878190000001,
                            "lng": 11.2526942
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7701308802915,
                                "lng": 11.2540431802915
                            },
                            "southwest": {
                                "lat": 43.76743291970851,
                                "lng": 11.2513452197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "c8ec0d7ceb0b56c235a3b696b04381f4afab6718",
                    "name": "Portrait Firenze",
                    "photos": [
                        {
                            "height": 800,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/104530109223313513151/photos\">Portrait Firenze</a>"
                            ],
                            "photo_reference": "CmRaAAAAn276A3LFfWN9IKPynnNoG-hT_I78SOwB7H-0FPcNZX__PokSIkWl3oaxLt_TELSpgmQt0_ea9CpPNVfayfgxfz6a8XDuffqxaz-MYAe1lrflDTpEZQzoFx4Ax0TgUNODEhD5i_Aik0_uSQfUOk2GAu3KGhT9BGBD4FB0U2Mko-CS5pld2FWCJg",
                            "width": 1200
                        }
                    ],
                    "place_id": "ChIJF7-wEQBUKhMRd9ErWGgSAPg",
                    "rating": 4.7,
                    "reference": "CmRSAAAAIdm6NLUs-TTpZxzpTYE7bfxETvMaD7OUUjCLsERPvT1LOAwV-WrOm11Ctu54MM2smosAI7NPGHPArMSPygCBMCPeYNA4K3JDxGs8qt7aOujD5uM3wew5Haox0zaRcXfpEhCrGcCnSn28LiE58_Ig6bn6GhRkIRnkjFX1Jo_bt7JEXY5iRjmDrg",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza Ognissanti, 1, 50123 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7725204,
                            "lng": 11.2446117
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7736764302915,
                                "lng": 11.2462424302915
                            },
                            "southwest": {
                                "lat": 43.7709784697085,
                                "lng": 11.2435444697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "f61910b4925fa8ac48631977e52267e58ab6d3bc",
                    "name": "The St. Regis Florence",
                    "photos": [
                        {
                            "height": 2649,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/109417728172349917492/photos\">The St. Regis Florence</a>"
                            ],
                            "photo_reference": "CmRaAAAA35fL_ffCPwuo2D319iZosu5JrMuSDpmJdaI1UTc3afYic6IZjPwtTXsICq7cpEqqUlJ4eaETP_eAfRpEzxqGuqwpWT6XTVJGwBSmzRxAGA8C_Wh4Vi1FfkCxn6U0GN-pEhBbd-O3zjNwnRSGx9zjudv1GhQ2v276q4L3hyRRZrE2YCYyuXKSxQ",
                            "width": 3840
                        }
                    ],
                    "place_id": "ChIJ5wTnN6xWKhMRZHOy_peYE_Q",
                    "rating": 4.7,
                    "reference": "CmRSAAAAKsKL8ySo0-hoy9CDAby_uqlsMWma2_6FCCy6a7bMgmkWxpOAuhqe-pzFfnqaxE_UXFT7spchXFR5ZjHqVI6axF77oahrSIB29p1iw-PXQtBKupI7OEDv-ePts3dpL7ZeEhAuhOYY7CwWfQtsQPMvC5MdGhRoVmEvKJioPgst51Lh3hUYdg5ocQ",
                    "types": [
                        "lodging",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza della Indipendenza, 7, 50129 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7788966,
                            "lng": 11.2538668
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7802640802915,
                                "lng": 11.2551721302915
                            },
                            "southwest": {
                                "lat": 43.7775661197085,
                                "lng": 11.2524741697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "9400f8f82ba23ab0266b816e6480a832d9d3b02d",
                    "name": "Palazzo Castri 1874",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 4912,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/113215016927184211592/photos\">Palazzo Castri 1874</a>"
                            ],
                            "photo_reference": "CmRaAAAACZmJXQtCm67f73cH6NA5GOi3sNQF2edCun2SheI6faegFNO6qgzoRy8DLNvHBj4hXhboZ_N8XGjJN4zQ7I_ls_RhBOnAklAzl5GcJQI-E2MpxPHBeTIVYozzuQtzci9MEhCCaZ3Qwh7J8YgoGoFjglR0GhSSaaBjL0YShsQB9Da_4lejVCKQ1A",
                            "width": 7360
                        }
                    ],
                    "place_id": "ChIJB18wbR1UKhMRm2jV_vscZnA",
                    "rating": 4.7,
                    "reference": "CmRRAAAA1AqSO3_IGlGk3bBrPVq5Na28Sth1HPya5C3Mth5mymCeyCzqTQEZE-__e9zZRIxRsji0ejHiIYQBpKMX60agtcSrUaWNbnIi_V0pl-MGA1rXK5xB7s_Kkt1cSXImE7xZEhBKHicYF718HiTh2LSGKXBFGhTJygesfrwEhKsDS_KH-U5rt80Txg",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Borgo S. Jacopo, 14, 50125 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7680415,
                            "lng": 11.2515577
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7692765802915,
                                "lng": 11.2528530302915
                            },
                            "southwest": {
                                "lat": 43.7665786197085,
                                "lng": 11.2501550697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "8d5d0e9efee695873b4f08fcd30ee2705f2c8bcd",
                    "name": "Hotel Lungarno",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 800,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105220696495432933578/photos\">Hotel Lungarno</a>"
                            ],
                            "photo_reference": "CmRaAAAAz5jFf358bU1LqXmNPItPrvSNaor8inrC6s4DJ9D6bkBZgXFyo8lKDgHInRbKpxxr9W6Vd3fE30ieTnGXpc2UjJgns63EwWQHy0qwAN0pZ1RnwiF1XnhyYATPtWYid1h5EhAMyXAaO2ogBLLACx6ZK-JAGhSkZgK-yYSk7n8pF60JrizW1PwxWQ",
                            "width": 1200
                        }
                    ],
                    "place_id": "ChIJez8bNVVRKhMR6QTW0w89UGo",
                    "price_level": 3,
                    "rating": 4.4,
                    "reference": "CmRRAAAAESC00y9UcOReLieCr8rkqxB19HGmF6X-f_r5qjmJeHrsCRfWOBQz4p-t0jYAns-U64pekIOLyjDNqC9E0_1YIqV2bQTMDg3e6nVVDRv3VqZGfbjCld72uSY9ohgpPIQyEhBB_1JdhnqWgd6Gib6g0LZIGhR7XK0BypXnx-xNhQWXq3qnkQlZDA",
                    "types": [
                        "bar",
                        "lodging",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza della Repubblica, 7, 50123 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7718888,
                            "lng": 11.25456
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.77323913029149,
                                "lng": 11.2558423802915
                            },
                            "southwest": {
                                "lat": 43.77054116970849,
                                "lng": 11.2531444197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "8bd699fac7e467c4d33c1c65ae4ed556e2051846",
                    "name": "Hotel Savoy",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1501,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107744130176253055660/photos\">Hotel Savoy</a>"
                            ],
                            "photo_reference": "CmRaAAAAFAx-urfR_-2IVQEL7ib1PhtGRDEMFTTGTTaLRsjV3hwvAI1j8Vc-vEsLry8VchXqpCKdueH_WMmv8Rz6_5cBlB7rTibHAMRZexF0QrKCB75CS9Yr4DWtMQs-fseys5C5EhCPiLsGayRzqPtw-mOM6r5wGhRlqawP3mJW0Bqv39qVPU3HXZ68zw",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJ6zkxlgFUKhMRMRvVAockH0A",
                    "rating": 4.4,
                    "reference": "CmRRAAAASNjOIsHrTUYPOULQigPkwI0Mj81S4ntXgSjbBrgr7H1Dkz_J6vOOLmPiTfeWqe0zVL8KfBzDbRZNUDP_v_LmHMlu9FYpAJSUrZvjmxmLJ5Rr_dsjz8F2MhBi64MAqdCkEhCHe0iutenLNP1yp-nXYW-JGhSuEtfgiGNX4ZhdpxDS1I3Lw0VLEA",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Il Prato, 42, 50123 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.77589200000001,
                            "lng": 11.242059
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7771844802915,
                                "lng": 11.2432788802915
                            },
                            "southwest": {
                                "lat": 43.7744865197085,
                                "lng": 11.2405809197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "f4c45f272251cbbb40b7600c9efa84673b33b2d3",
                    "name": "Sina Villa Medici",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 800,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/110723660908346222036/photos\">Sina Villa Medici</a>"
                            ],
                            "photo_reference": "CmRaAAAAkSXUzH5HlEAGr5VUTeaTQG_4QzofB26kFkS2JHbZf6ZTJJy6G4wMLqTcaPH6_6RJ6tv7MIv5N-7E_XgnU-ZsCzEEhkd6dgv_Fi3Imu2O-p1qe_ohEZ8piLmOfycClGOxEhCfIl59F9ZghpMlfNjgsRm7GhTKVDNsSRx-Rabe_DsIMC4fRY59fg",
                            "width": 801
                        }
                    ],
                    "place_id": "ChIJ6dJVLa5WKhMRbYjqNXdveuQ",
                    "rating": 4.5,
                    "reference": "CmRSAAAAJXLEVPrqU0x4dXG2CVdZMkR0VAA5jXpIxIh0vL8UNt4747i8amWl1_wv_sgyaTsne_D-AMqwce0wxq7O6Im-gqccTCWZKRiiqVhulHjtrj7ZyNdW9dZ6vevjNrXU9Yx2EhAZjZeh7pZKUvUOeeEUWoA6GhRtlVvN_6tqgXSxuhQLwf_1psjelQ",
                    "types": [
                        "bar",
                        "spa",
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza dell'Unità Italiana, 6, 50123 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.77472100000001,
                            "lng": 11.250687
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.77606658029149,
                                "lng": 11.2520386802915
                            },
                            "southwest": {
                                "lat": 43.77336861970849,
                                "lng": 11.2493407197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "7df43f557380872549af71eb118d680f2a5d8ad3",
                    "name": "Grand Hotel Baglioni",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 669,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/108894913706163836822/photos\">Grand Hotel Baglioni</a>"
                            ],
                            "photo_reference": "CmRaAAAAZZMS8Qv9kkQtcgbCz1iLLvidnEk_xpEMAiGLP9qNz8h-16OJC3L_tV1mXw8RTtgzSvgbM44mk_lPOcHtOZ3boiWxQOKO3jaqD9wGEp9l6GGidf2rNvHxMh0LYDCCgSkLEhDtkJVl8xB84ty-NfgQ9XZ6GhQ4YSsL1eizzS5WBJfiNNeKI6gCDg",
                            "width": 1000
                        }
                    ],
                    "place_id": "ChIJVSY-yqlWKhMRvt1mmq51lB4",
                    "rating": 4.4,
                    "reference": "CmRRAAAAjsjgpQBCn9_kB7J2uaPmW8CyntqfLeyHPvpHgm32FWAwVlb7Qn6Kii3AtnOhXUqYGZ444lXWKaGCselLXIUPO8SS_jsL0sWXWitnAMyOQSXmZ-Q0iFPE5j01NtK4mI1LEhCm1m5_5XLIWXsMtSWsqqSMGhSxSbaWm7gl_prLgg8ItWweNyMNuQ",
                    "types": [
                        "lodging",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Vicolo dell'Oro, 6r, 50123 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7686058,
                            "lng": 11.2533895
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7700441302915,
                                "lng": 11.2546542802915
                            },
                            "southwest": {
                                "lat": 43.7673461697085,
                                "lng": 11.2519563197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "72e2d4a507e6f68e94c0909caa0387de70f23a84",
                    "name": "Continentale",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2000,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/115303938773913731410/photos\">Continentale</a>"
                            ],
                            "photo_reference": "CmRaAAAAy9qL9TFHXdX0AsmmYNcq7kB9HcTY6I19SCxpZIDFb3Xm7Ym7oAHJu7Wxk0L0LB5SUNBauSt2hXc4vvZYzrdf33fZij8v0rvBC4su01dSPiv76UJ1B1Duaapeabt2Yy7VEhD0mHgCvT2zkB0Xtll63AGgGhTioI6TXWkPeqxemZYN4D_CgT5bIA",
                            "width": 3000
                        }
                    ],
                    "place_id": "ChIJAWsTUlVRKhMRijPcdPEIOEc",
                    "rating": 4.3,
                    "reference": "CmRRAAAAUNl-SnpmOHJ6_i1-dytIk7v3MP-MCwmTj3KF5PwumkttwBWSv6ktsebNt7GxRg5mePAU0NAgdwR_IKCpCYTT9E_Ciuxh4e0ikHDgPCuXGE2t41jKu3xffRv2KbR3grD6EhC62Qfbnce6y6XbwzIXhWFjGhTeVbASWOixcK2TG7UC-WmUjdFN4A",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Doccia, 4, 50014 Fiesole FI, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.802776,
                            "lng": 11.298449
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.8039904802915,
                                "lng": 11.2998097802915
                            },
                            "southwest": {
                                "lat": 43.8012925197085,
                                "lng": 11.2971118197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "c3b389a63d172efa301f501281987f012ff82d47",
                    "name": "Belmond Villa San Michele",
                    "photos": [
                        {
                            "height": 867,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/112548214188670211664/photos\">Belmond Villa San Michele</a>"
                            ],
                            "photo_reference": "CmRaAAAAdjjEOaXgxcarGaHyuYPsfduNAdxId6UrY4V8JL5m04g4m3b9xPtdtM_n0hcOvu_70zP72pfGIdaJUDiWgG13yShCbQnZA4pKlYocI2cSETKxFbOmAPdjHpnRjTJoLlZWEhABrD5ZIkC-FT9SZ2QRSme3GhSwhKxYoMRMTg9yhcr7FD_g9AcC6g",
                            "width": 1300
                        }
                    ],
                    "place_id": "ChIJF2z2dABVKhMRPIInRJw7xts",
                    "rating": 4.5,
                    "reference": "CmRSAAAA9GoC7l2yyfHON_0-NNq87dapBhaYCXp0QSduFOYbknGmgWtcfbHBkBIkoENcRm7f2_Om838TjECCiF0Z4IFjdb-2ynnHZvwpLTGxsj7ibwUz7gVP1JTfwQ8usvnEesmUEhCu1QyMJ7q-xvOCvguGXylfGhThRRBHqJKwZTP5lVSVNT6LFd1u2Q",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Vicolo dell'Oro, 5, 50123 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7689538,
                            "lng": 11.2532311
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7702731802915,
                                "lng": 11.2546500802915
                            },
                            "southwest": {
                                "lat": 43.7675752197085,
                                "lng": 11.2519521197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "5932401af1337c10aabb6f3273ee2a93f20e55ef",
                    "name": "Gallery Hotel Art",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 500,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/108809193309157667150/photos\">Gallery Hotel Art</a>"
                            ],
                            "photo_reference": "CmRZAAAA190XhkXTMvEepMkzyC_vPQkmnVneZ5QDhNH5bbstUo49XqDeSA1hbbN_xYWwapd0TWMSi59GCjBKRLtO2oQK0pUZ5kPexHxsscpdduGvs1foFzgxj4vVpE82cnfqw3qFEhAut_6TpPuGSRSwA2aqtG0TGhS-hRd6sGhGxHO-ArAwKYCInDAbNg",
                            "width": 750
                        }
                    ],
                    "place_id": "ChIJqeAmEQBUKhMRvrAmRIBdaok",
                    "rating": 4.4,
                    "reference": "CmRSAAAA6HlkbljAPedoASjw1gN4WoX5YB0_JhbFZIBvqvTBVHhDXLXnSLkyTscPDg5P_swzJBJoILE1u5pTyjuOdhpnQwmxl6jt_6axAV6MW93YHWUQFJHJm98yoQezTvRX5e4oEhClQcN05dKsmnTNyhDfqIbtGhQ-rY0WfTETmVyBL78-TWALH0RwnQ",
                    "types": [
                        "lodging",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                }
            ],
            "status": "OK"
        },
        "restaurants": {
            "html_attributions": [],
            "next_page_token": "CoQC-AAAAO-c-d5ap8BhIlZazTszJl4SNLhmu22fQylVI88xQFw0krOIgqq0rHwy4q780q58PFz8JF5OuD9MemAjRqqoU7DbvMdwBUwfwvSp5WNPghvANmnQ-26HHc-c8MtlTVpXZL440x4SSUXyZismaNj1120UVzYTI4IiQ6nStD00UVEbgjB9_5_10Nw8FsnpUtTZOeN9asBn_GMXeFpsEDPI26dEv97PRcuw-aoWR0kIr89lWEBQ4Pute4A_m8sHibHwN4K65iaxx9J04jCaitwDsaPwimQAoPqXda2_RJRfLLd8J2h9nYRpAV58T6TMd6EQknIAmiO6M70_fMp9MLylbSoSEPpxKbFqAjnu8Gwif0DreM0aFMGEDNwIUyJNWSaDnVhbKC5U9tYk",
            "results": [
                {
                    "formatted_address": "Via dei Georgofili, 11R, 50100 Firenze FI, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.76845,
                            "lng": 11.25483
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7698035802915,
                                "lng": 11.2561627802915
                            },
                            "southwest": {
                                "lat": 43.7671056197085,
                                "lng": 11.2534648197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "13bd34a5e4e750d54e7866d4e438cc2450aab202",
                    "name": "Restaurant Ora d'Aria - Restaurant in Florence",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 682,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/106196686108445822779/photos\">Ristorante Ora d&#39;Aria - Ristorante a Firenze</a>"
                            ],
                            "photo_reference": "CmRaAAAAdrDZNaWkNpImq1d61RokvxPQsauEaPBqWwG-s2-C_HxAAg-ub-0CvMg6PjFdr1yDxX-J7v3wOBP5rPnsT3Voyl-FcttJ_eDtmLv4rZw8FrgQUk5b8l3Mv6t_mRmumPD8EhCfDz40c5xs1c-cWpBrxwmLGhTMg9kubmeVk7yX46ynz3M32At62w",
                            "width": 681
                        }
                    ],
                    "place_id": "ChIJ_b9uZABUKhMRJLP3Z3XkJDk",
                    "rating": 4.2,
                    "reference": "CmRRAAAASwi5s7jrgi721GQnAhYg5Lecar_6gobyeiH2HF3pdgW3tlBTVmcfwVtAthOvhMSgF-gQ5cP8SCqe_jc5CSYOh2sHpE5HS0fJ_erGzTrsU_DY2EmJwQeP7tR_myk6f9GSEhDhH3sSqiwImTj9e7a_I-8-GhRHI4LrRHJK5BqwTq2kv1Oi_3i5rg",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Lungarno Benvenuto Cellini, 69/R, 50125 Firenze FI, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.764739,
                            "lng": 11.266085
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7660702302915,
                                "lng": 11.2674309302915
                            },
                            "southwest": {
                                "lat": 43.7633722697085,
                                "lng": 11.2647329697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "049f8057416ae1f5ba6fdc47f7958f7ae0d31e1a",
                    "name": "La Bottega Del Buon Caffè",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1220,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/118062281557525839809/photos\">La Bottega Del Buon Caffè</a>"
                            ],
                            "photo_reference": "CmRaAAAA_AoAxzrzgBbS1p40qOXE65vfK99UyUWxYzJEediQZQaqo_s-BvRI_yRgmhiiFTDz3_n87pG2Rwof4yLmixSOvmiTLbMLB_d9ZRtmiKD4zXhFulmtsSL6EMGMQ9xWehZYEhAw2NuPfTHEZloClMlffbpGGhTbYjCJ8yuNGctYHpQr3zLFJ1vQ0g",
                            "width": 1830
                        }
                    ],
                    "place_id": "ChIJd4ZPCxVUKhMR9C0yqqlL-rU",
                    "rating": 4.3,
                    "reference": "CmRSAAAAnFm2Wdq5M2h9VqRy-IUGEjTRg-r6WvPicxPJ_zOGkEwtOAv_aaKg4Fcq9Q8DxYRoTZW9aTndjkx5xXwjDrM-ve3zHWYRHu6yQNDhgF6U8muk6AKzvcQAKWUwhkiVbKVjEhAQjjEPVZbdfMOrb_cbI526GhQKmOOd2NJgNLFWW6TDgwZFllrRAQ",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Ghibellina, 87, 50122 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.76997670000001,
                            "lng": 11.2622382
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7713702302915,
                                "lng": 11.2636324802915
                            },
                            "southwest": {
                                "lat": 43.7686722697085,
                                "lng": 11.2609345197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "3c10a9b90fc042b446eac2207e7d0a0f3d8e15d7",
                    "name": "Enoteca Pinchiorri",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 420,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/109624253912002203341/photos\">Enoteca Pinchiorri</a>"
                            ],
                            "photo_reference": "CmRaAAAAV0nZbU7t5OSR6I7BHiLmYbm-2Piy-JIKETX-jKwHmLnNMB2aa6VuT_WR64z49YUMNuKsBP6kxbz8wZK2xmdaZ_4L3Gwk0PHmxDuR-TJBEGr-4RhN64WxAWgOFfDT25VIEhD5c9L0JpSv3odXlsm3UpMuGhRK-xF9Dmqd01_gWA_7iB0ltSievw",
                            "width": 960
                        }
                    ],
                    "place_id": "ChIJJ9GCOAZUKhMRhWUgMfpfvX4",
                    "price_level": 4,
                    "rating": 4.5,
                    "reference": "CmRRAAAAuq0FnR0JF0fJYnbacbbVwYgD56Dzq_Wv7Tzh1fcz6er3Hk0D37WJIGA_aN9cF_LqlW4-uYvW3LvBEJnT0Ubvt-nZmeG-Q_WpKca9AW-wzR5sKWqZiNHTjL8AK0okM9CkEhAELmQOXlC3DZ687Q1tK1fSGhS1T4NkZMv3SeYkiLdZ8klfRAc7xw",
                    "types": [
                        "bar",
                        "liquor_store",
                        "restaurant",
                        "food",
                        "store",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via del Moro, 22, 50123 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.77145600000001,
                            "lng": 11.24862
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7728296802915,
                                "lng": 11.2499287802915
                            },
                            "southwest": {
                                "lat": 43.7701317197085,
                                "lng": 11.2472308197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "239ab6dde7ae7c7996a9b57f9053eec611f74390",
                    "name": "L'Osteria Di Giovanni",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2340,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/110390813460738647338/photos\">L&#39;Osteria Di Giovanni</a>"
                            ],
                            "photo_reference": "CmRaAAAAuagBT0rpx1w24nPF_7p-Wk0jP0R4i-xtik5jSVsiMsAIWAUvLU0VTBK_mJy_gEKKmbIPZnSrD1hn6UvU-xTE8yXKDHE8GZBB7glTwMnIHfGpYkif57f5-kos5T48B-KNEhBe-NnPLD4-cqAQg6fRnJ4FGhS5UM82NmhVXXG2FdfrO-GTLyH8ZA",
                            "width": 4160
                        }
                    ],
                    "place_id": "ChIJ1ftgzKtWKhMREztIPW75Ygo",
                    "price_level": 2,
                    "rating": 4.5,
                    "reference": "CmRRAAAAjSAS3aiDlCNw0UXto7PLOf4VxGjRVpCcDdkEYUqNL1W1rWF2sqJemiedNBVYVqAvAj7Db_5erqeUxZZF5TBFFZx9GVzjk8mCRRKUKZTsMd18AyXHqqvLJICEle6vgsuqEhAvuY89KX0hMmIY5xS_PnBxGhQsByUzt1VUNOLArauoWpcr7ifJBA",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via S. Miniato, 2, 50125 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.76419629999999,
                            "lng": 11.2612948
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7655121302915,
                                "lng": 11.2626689802915
                            },
                            "southwest": {
                                "lat": 43.76281416970851,
                                "lng": 11.2599710197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "e2e229d3c4a8c8153bdd3654999b97080102afaf",
                    "name": "I'Pizzacchiere",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/112106033018690945265/photos\">I&#39;Pizzacchiere</a>"
                            ],
                            "photo_reference": "CmRaAAAAYLGqIFxHwDUCjC6DVFzy5hLdGK0V8tLLfiEjh3MLf6BaFHkGSlCbIu7EKNhC4Tz6ddE9cQeYkWinjFCbs4oRODJ2Xjz-suyhsJBWwn58Pr4jVVoXFXBHtDTWAzDGCkXKEhC-ynCEQ6KR-8yv_HeJWV1MGhTjj7BSQatdx_jjq3ATJYd9mRRpLA",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJu-8YpflTKhMRiTETg4wueIc",
                    "rating": 4.7,
                    "reference": "CmRSAAAAGhD-K1nPOP_ksfUj9FIEmNj_AxOz6_Xkm9X1dEb0BAkbSAzUF-F5XPIy8vqGp8WQQayDJR3SdLQ_EmelaRn5HOCSK3_F-U9EkTjoepdk0vmlohZcBQGoseHuVPALKBOhEhBAOR6IEqMvkSqPULoB823qGhR1wI_DMURDWVDz8VdBLBiyVqmisQ",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via dell'Agnolo, 105/107R, 50122 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7705378,
                            "lng": 11.2626545
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7718988802915,
                                "lng": 11.2640081802915
                            },
                            "southwest": {
                                "lat": 43.7692009197085,
                                "lng": 11.2613102197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "8f37470a72109617fdfa4e0fd50c08ffddc5009c",
                    "name": "Pizza Man",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2340,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107718221025099580166/photos\">טל בר זהר</a>"
                            ],
                            "photo_reference": "CmRaAAAAgZVT7BEgc3kagZ8nV_Pt1KZpihLK3pN0dSlHmUgxShe516d2WJAed0nBtcuDijKmj1hpg8-cXOmqQArjWwokV8dovPgchLd1YQdqFVHS2yOfU5Kq1_QmCfZGfJMSy4yQEhArnWEa2buwAdGZZT_wJ9nBGhQcGIcVEouTtPgCOltknZjYOOOZsw",
                            "width": 4160
                        }
                    ],
                    "place_id": "ChIJARymawZUKhMR3Y12Xx8L-bg",
                    "rating": 4.4,
                    "reference": "CmRSAAAAQ-YVs9Y4g5tydilYP6VudwGcN0y6CikSZitO4piQ2Qz5ci2ovs42obuM6TAVqZXssL1Soiy9A5DGtoRBcgNhY5z0Dpvm6e9rh7oI9GlpZZU_PSxyve8rGadPNUe4MrEqEhBJ9385cKI2gvvcANjAE0aaGhRYGVoU7UP-HHE3Gx5xFruEM6e7MA",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza Ognissanti, 3, 50123 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7720381,
                            "lng": 11.2459117
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7734275802915,
                                "lng": 11.2472020302915
                            },
                            "southwest": {
                                "lat": 43.7707296197085,
                                "lng": 11.2445040697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "221b1364621b7d0af5a19b18f6af9a57c0ade1da",
                    "name": "SE · STO on Arno",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1423,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114191967757616262240/photos\">SE·STO on Arno</a>"
                            ],
                            "photo_reference": "CmRaAAAANp2jEDqVupXm-MUSZVuts27m1sv_N4lDjZgGYm3_o7alLj8VvVGl_OpYgCnZPa3W4KNV-pgQczfnpE0JSjRGYvvgrOSF7H26r62fikJHbqeslTDLFNHC15Wxm_Oue6mIEhDzjbX0k114fAoPkizl-7MQGhTMPJashQzD0mtl4_CpswoqPB3wfQ",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJH0OYbKxWKhMRBmbgoSzKIeQ",
                    "rating": 4.2,
                    "reference": "CmRSAAAAvcKB4Dq8rWrMWYMcdmwSRLXrR5POEwqJi9eTAKRb16gAqgMepguC1Qtfo9anFpgGgdP1NxZJ6S1Vy09YMYSQqjhfi4oPvMWSNoGYmnD4pA0QZCB4e8zzWE6EP-4pf5taEhDfTiTW_DD_MQX1jkmMKyheGhQ2LKPVDg025xbzOVKx0CFr-QVQ1A",
                    "types": [
                        "restaurant",
                        "bar",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via di Santo Spirito, 64/66 r, Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.769087,
                            "lng": 11.2466362
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7704175302915,
                                "lng": 11.2479757802915
                            },
                            "southwest": {
                                "lat": 43.7677195697085,
                                "lng": 11.2452778197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "c0a7086b7f33b8f3f44668f57d7617073bb7253e",
                    "name": "Il Santo Bevitore",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103373619996062493858/photos\">Emma A</a>"
                            ],
                            "photo_reference": "CmRaAAAAkHOtHMETAYOhgGZCfuYqyPG6_5J71nLcmSpK4m-h8w59cH3LvrPzwNw3Dy9jd9rxgZXNaznskGJV5eA6JW4pbaPvZ2VR9ItXpSphoL4izUN38s2QEqKoNvLFI0Y8Gf2OEhBJG76Xqev6nl-ktUvqWZ4VGhSCcvhmqOmbIoHQWiUmyn10wAndNQ",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJWdMUV6tWKhMROxsW3gM8GNA",
                    "price_level": 2,
                    "rating": 4.4,
                    "reference": "CmRSAAAA72XkXUzywb9yxmosElponevp4cve3d5tRhpq0l2Wspu3OfVYkiY4Gg67PX-OPxZ_ONhQdFn7qoDCgaeg5GKqd8StkBiN4NIkrEQoZHwBiMXyVKSdTstM9sL3iowVA7kSEhAJi2R6untuhzqYSMg5nz1ZGhS_SExkJpH9bSfVFMhWIMCHG0AbEw",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza Dei Rossi, 1R, 50125 Firenze FI, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.76699869999999,
                            "lng": 11.2528281
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7683476802915,
                                "lng": 11.2541770802915
                            },
                            "southwest": {
                                "lat": 43.7656497197085,
                                "lng": 11.2514791197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "910e54889dab01ed228a8456f12ddd3a6971c5ed",
                    "name": "Le Volpi e l'Uva",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 4032,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/110579524105217882774/photos\">Fadi Bassil</a>"
                            ],
                            "photo_reference": "CmRaAAAAqoSFulStPWutIuf_r72ck92_5DwRVnxMDk_GXxQgM8i7D8MHgtQJ4N_1ZMpxGCE3nVc5ElPJ3rWjSV0pO7WY7Ub4jaqR7N8BMe8ut0BNL03q4cmPGmilSi1Wm8R-Ij-hEhAR-0SWUpetiSwmqOgF1j-AGhTkS2Oa98MRauDvB_-WpCq256i8EQ",
                            "width": 2268
                        }
                    ],
                    "place_id": "ChIJhdGJ5v9TKhMR6vnWEbNOYwU",
                    "rating": 4.6,
                    "reference": "CmRRAAAAzHei5hZa_uT_KVUANK4s1r_x9lULZfZh9LB54lae8KXpsmnREulRMDyLv4x92BnMIFemIbNBLcSY3GqY3zdSDg2F7cQLPodb9STfh_i5cstjVkrziVgi9c0PFjCx21V_EhC8wrLPrm4FlwfHSLYQvQIQGhRXcGeOqUiwf57oSpDZSRLW39p7YQ",
                    "types": [
                        "restaurant",
                        "bar",
                        "liquor_store",
                        "food",
                        "store",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza Santo Spirito, 16/R, 50125 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7665581,
                            "lng": 11.2467519
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.76788278029149,
                                "lng": 11.2481860802915
                            },
                            "southwest": {
                                "lat": 43.76518481970849,
                                "lng": 11.2454881197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "2b15aafc2e9f81862e5f0170d35cc47a4aecd9e0",
                    "name": "Osteria Santo Spirito",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114989395398892593510/photos\">Özlem YURTERİ</a>"
                            ],
                            "photo_reference": "CmRaAAAAcCGJu_3lp1UP-6aTQ4FziQkwep7KPJrjrsUu_FwDNC_MnuhQ7Ybp7Z_kgLUSzE9R_c-tyA4h8AA_rqkdGrT0Tdz2mXuVBu0cvU8mISYwS8wZLapWEPnbv-yf5_ndqBkoEhCdIYyDgK7rhDxQnQ7viJ1bGhQz96b4MJ4wFY-EXIPl8cyO2iHKcQ",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJS3aUglRRKhMR46SfGOlv13k",
                    "rating": 4.3,
                    "reference": "CmRRAAAAn1GnbLNpsDmw2IgMAm8vakkf0iOrcZhtjKX-7ok-pKIpyPXGPgfIDJdWa5Ao3oj7KTY47pboeVz4lNVBgtxzwOQAKIzYh3KJ9ZbdhCccj9ym3jR4cLWZ1pI_r9wSYps2EhBomJuZi5rfiqUELYwrvg-NGhTGDC3AdZhZdxhLP_LyQVkeH7fEsw",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Borgo S. Jacopo, 57/r, 50125 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7681122,
                            "lng": 11.2499861
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.76945088029149,
                                "lng": 11.2513320302915
                            },
                            "southwest": {
                                "lat": 43.76675291970849,
                                "lng": 11.2486340697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "66650b4be236ed9fe0291c08daaed2418ff9067a",
                    "name": "Trattoria Cammillo",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 4032,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/113654722359943630565/photos\">Paul Barnes</a>"
                            ],
                            "photo_reference": "CmRaAAAAjHktJv2kOpGiecqYXNe3R3EluZPQSDhtBwXglgl9ijJnPNug58RdOO8u1wS9mGDmLXpuADu-t7n7gmKxZrcKyPI4qIuz4Ktjc9KulR-ejsKH7QstvQgeQYjYqygfPdxKEhB5c43H1rpbjKkLRFiA92ZPGhRqXodN5B4P3lGghbL9UgIow8xTyA",
                            "width": 3024
                        }
                    ],
                    "place_id": "ChIJLRNpLVVRKhMRG4c6pltQEhE",
                    "price_level": 4,
                    "rating": 4.3,
                    "reference": "CmRRAAAAwzf9Ax4O3hAGNu5VGeEgrhmnWMw-f93T7FQoRlHFfmqgZBctBGX9TpBNNPYltuG0cOB7EEo-XoJZ1TxA7tVKinSGXuHikfWyiIwhZAd7PmXpadqEUsPIBh8io08KVxk6EhDsGDFwQbm2_FyeBMLreoK8GhS7WjbVyLn27Z22LlDRcbvUiepK1A",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via S. Gallo, 3, 50129 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.77716400000001,
                            "lng": 11.256195
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7785209302915,
                                "lng": 11.2575242802915
                            },
                            "southwest": {
                                "lat": 43.7758229697085,
                                "lng": 11.2548263197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "bd83ce645cdffbb0ea2303764e7b4c0c3cd74fa5",
                    "name": "SandwiChic",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3024,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/116758086004475413616/photos\">Rj Li</a>"
                            ],
                            "photo_reference": "CmRaAAAAX-9zsUXE_cQFf_eP-9VYuEyMsDRf4f2wUhVF8vf9CNL3F-hRb9eUanF1tFj9GdVztF66XqRDdrqipzBvqAwTBZlgUfq4U7wIlrI_S5zOn5ouo4xqvAb2L4n_XGtYHYn2EhCs-uGMTl611tMk8mmZdsZHGhSSlVVbht5Vi36w4cn-lbcxtyRifg",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJZ5__yxxUKhMREPEF7R2HGwU",
                    "rating": 4.7,
                    "reference": "CmRRAAAAAAYvjYxpUUerqSj-uGyhuR1U8Jw5xPEEgwYuLGv2dc_fGTChZAfuA0mrpuz9PFr-DOOQFmwv9_MjIJWSHM0sbPfAfARK_6Tno5lH0GXKSfFpNxrXmlX3NnNJUhDC-0fOEhCNuTcEDdenoi0-FN4Hq0d-GhTPqeAkjfoWoNc27nRAiS_FM8L71w",
                    "types": [
                        "meal_takeaway",
                        "liquor_store",
                        "restaurant",
                        "food",
                        "store",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Antonio Pacinotti, 32/R, 50131 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7837077,
                            "lng": 11.2725298
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.78513948029149,
                                "lng": 11.2739176302915
                            },
                            "southwest": {
                                "lat": 43.78244151970849,
                                "lng": 11.2712196697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "1e27a7cd6d6c0faec74b9733a6ee64a132fb34cc",
                    "name": "Osteria Three Benches",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2992,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/118378841812311199211/photos\">Misha Strunin</a>"
                            ],
                            "photo_reference": "CmRaAAAAbT-gnahxemRuf4Sw7aSsAXM8-XbwIl0IBcQR1hcdxdskAVA_LSbIelxwGMZkkQa48UmRkFyU4_TcgSN2uk_kNIevNpg95l6gm6hhYBQwDvkGDn1wOMGR9bjVZp1z1KP9EhBI5LHlXPLEOgmqUt1XEJ9CGhQwNc3tX6dzuyhTO3emTA-i43O1Zg",
                            "width": 4000
                        }
                    ],
                    "place_id": "ChIJkSF6cBVUKhMRhWz9opGQgZg",
                    "rating": 4.7,
                    "reference": "CmRSAAAA6MJAUcq2m0zQ3oHj1wRJsZObd-cQI6qCIsEFEBW6h80bEj97nyovWT4-tBTeOWQpnDu7WmhtHA0Jo9FJtzGzTnJFz-_TBjFFU1FrdkjqGwUHCIughgN63-NfAtSxu9MNEhBS3l39A7r18r1MA2PutA9AGhTvbEZZu-JtZfsqKWmvS3x6RGkT2g",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "via de' federighi 37 r, 50122 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.77187499999999,
                            "lng": 11.24953
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7732239802915,
                                "lng": 11.2508789802915
                            },
                            "southwest": {
                                "lat": 43.7705260197085,
                                "lng": 11.2481810197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "2e9510b71ce9690b0c075d537523f922ec111b3d",
                    "name": "I'Tuscani 2",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1363,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/102570011709024511158/photos\">I&#39;Tuscani2</a>"
                            ],
                            "photo_reference": "CmRaAAAAwMCXgUGuQSQerLV4Q07Tf_4kbzNVAn-AZT5BGwivlaLZx1klaFfzczzvS0aRRsYaWftSiTUvuSOO2Ghvs4M30eJ2XFaQJyL8QUnj78ZsCqnzHiheQw4hJd-YZEUoXMRmEhBablEcxwuCYa8bAgq4-0s3GhRHxdrvOsMng5i5EtkKkZxoQYdunQ",
                            "width": 1366
                        }
                    ],
                    "place_id": "ChIJG14rNapWKhMRYtustLo4AM8",
                    "rating": 4.7,
                    "reference": "CmRSAAAA4ElZVntj5O-Wna6HTUu4lsP2pvAgIYteM8DopWqhmq3GjGapmg2I95elZ8GAWGgwiUCrsq8vmpMbCfclgeKm2x6BtZyGvyUWT0lDT-Or61Q5uKMGkrZE3RAheTc0_BHQEhDtnUwJQnlaoiN1SsEDvKbCGhSmJX158jh364XHw0d9oEw_-NLvOg",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Luigi Alamanni, 3/5r, 50100 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.77597780000001,
                            "lng": 11.2468594
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7773449802915,
                                "lng": 11.2482358302915
                            },
                            "southwest": {
                                "lat": 43.7746470197085,
                                "lng": 11.2455378697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "006f0dd6fe2e493085015124c23d671a9dbb7525",
                    "name": "Trattoria Dall'Oste",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2345,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/118029983758624008985/photos\">Trattoria Dall&#39;Oste</a>"
                            ],
                            "photo_reference": "CmRaAAAAKfL9zAUGkjb2HQzSLjO6mwNIKo8fZqQ4r9HTdgFCuW2bEaPsylTeydYZcWbyF0wZVPgE10_gJsFrGZzdct80knPKyxW82uZoG1W_jxapYdy8TI6JuvSGU3jGpIgq2NjXEhCm5EyQw8232aCu7a1DSbPxGhSjFWnInZW1nzfCpZxi7nJVzdKHtw",
                            "width": 3518
                        }
                    ],
                    "place_id": "ChIJzVYdM69WKhMRG-i6CaGebno",
                    "rating": 4.6,
                    "reference": "CmRRAAAA7Rv7QNhSca4T3KkLUjebkPvmc2PX6YznFMw0A6MnLolrr3RqoB2XyB5GZRU9VnM0URKPE0WC9lYIQQdtSDPuHtNFDQC79FCuHZKdiUgjMuGoV2uavughgcrnpJ2bLsKLEhCyDHo0WcP4YoP5a67_8feQGhQWFfVT7a5K9J--e9DALst3Q4P-WA",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "store",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Viale Edmondo de Amicis, 47/r, 50137 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.77446279999999,
                            "lng": 11.2862712
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.77578233029149,
                                "lng": 11.2876750302915
                            },
                            "southwest": {
                                "lat": 43.7730843697085,
                                "lng": 11.2849770697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "1cdab3f7a3fa2843e340ea864666d205812afcd2",
                    "name": "Pizza Man",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3120,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/117835634015793441876/photos\">Vasilis Kapnas</a>"
                            ],
                            "photo_reference": "CmRaAAAAf3BPAmRHZ88iD68Gz62Y4puAI8MUz14MbdCAJLYVyX1J0KaCwHiOUL888aKvwdloXPMRT-mq2csjkCrCP436SCGtwRBElXeoIai7Um6QiW6oq8YoSgUePi8XFjje6aPvEhBKl3iYEIaTLwv9VWf0HZ-6GhSny-AkASGML7D0ttjfnEVV0Ft-0w",
                            "width": 4160
                        }
                    ],
                    "place_id": "ChIJ1fV-WWVUKhMRQJTuQJqPhxU",
                    "rating": 4.6,
                    "reference": "CmRRAAAAoy7td2hZJgzrSf3Fy2LCXJNOoZnp3NgrFPC55f7gZuN-B_WLD_hGmHMVzguYJKhksYyRrSKwLLASpmWXKdg4UBw-qB40fEf17xIRs5Xt9jEcYxYWA6HU-FybfUINmFAFEhDheoN4DrHgUwPT0CgFDSFDGhRiQRO9JkZX6EkX0o9sNHPA0eEzkw",
                    "types": [
                        "meal_takeaway",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Piazza degli Scarlatti, 50124 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.769181,
                            "lng": 11.248068
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7705299802915,
                                "lng": 11.2494169802915
                            },
                            "southwest": {
                                "lat": 43.7678320197085,
                                "lng": 11.2467190197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "8586a8c439b049c6339b26c14c93d8ec3d711a71",
                    "name": "Lungarno Bistrot",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2048,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/101338972088902144258/photos\">Lungarno Bistrot</a>"
                            ],
                            "photo_reference": "CmRaAAAAwwUUFpi5mBYihLAc5FKuPDhjhnUe64KmpqWeJeTbGsOH3-hdHTvaTmUpwPjU2P7_IFTwNYM8BZ7s9NWknCGD99nWzbLD9reaPBLm6zakH64dvvO1wehm6ZvMqvWRRcmBEhCOMgwLPe7aIetpv41pDqbaGhQnRUZ6Owem24CKOkTkaT2IOPFk6w",
                            "width": 1536
                        }
                    ],
                    "place_id": "ChIJX-QhR6tWKhMRMkAnZDoYWv4",
                    "rating": 4.5,
                    "reference": "CmRSAAAAhdPFwgjCb2QusZs0VFLs6yQEp4A9d9Gyi3kObDh-dYoKP3Mm154EJ9UMdYB37jgwtswpfdPufp60ZbJ7t9jKf4ssDofFojKiTneHsYEUm22mEUP5-a7sgIXStJtcnj_LEhCUhBuw99a1REXVcU-8clsjGhQOcvvjoYKD7AR2_6MsxRstwMGcrw",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via Guelfa, 58/red, 50123 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7775025,
                            "lng": 11.2553282
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.7788337302915,
                                "lng": 11.2566458302915
                            },
                            "southwest": {
                                "lat": 43.7761357697085,
                                "lng": 11.2539478697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "b9a060304be3b99bcdefdfe656ce1d3816311d53",
                    "name": "Il Vezzo",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 5312,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/116082646547718456755/photos\">Federica Agosti</a>"
                            ],
                            "photo_reference": "CmRaAAAA_dtyYSYg4WrtWNRX8HhDnGxOfLjg0FeeHrSe7a2XylhvLpNr03dI8ZRK7xOjMNVBGauNI3SuEXHhevYMEMi9jcTu7wVPF8YWuTSN0cGnX4iA_LgXhyibgrtscTE3EgeCEhCKVybdjJ2QjkI_CT7-oFMRGhSknq7yHPr0srFYUHWW7mqy_Bf3CQ",
                            "width": 2988
                        }
                    ],
                    "place_id": "ChIJkzJr1hxUKhMRunUidQoV0mk",
                    "rating": 4.6,
                    "reference": "CmRRAAAA-lNuSDmzvydUBaOVHgnUbcNLVyYVwPpjPIsmu_q9pp_xFUvEzrXXJa0TSsrUBCTN51jXHH0KMskSaIHIf_tnojZvbtMH3U1MsE_FQtbpXkyuIUS8yG51irdWtIR6X7n4EhBhN0nl3XE91ZPmctcoRiGfGhQr5kBiucSk_nH2ha95__AArKcU3w",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via dell'Anguillara, 48R, 50122 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7698155,
                            "lng": 11.2583864
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.77117233029151,
                                "lng": 11.2597391302915
                            },
                            "southwest": {
                                "lat": 43.76847436970851,
                                "lng": 11.2570411697085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "268bc128dba3076f00b617ee431bca0e41094265",
                    "name": "The Buffalo Trippone",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1428,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/118219121842947383162/photos\">Il Bufalo Trippone</a>"
                            ],
                            "photo_reference": "CmRaAAAAwGGp2pGhbABTcPmOkIGJLncv0tV_J46eU5MneW_1AiGoRRsggSHsEjttamAzzw3-dO4hHpt2WUYfw1AR2woW1l0Cy-HttEA-74ssGkpQYrF9JgNy-LlGzT9bqEt1EVt1EhDJRRNCu8TwsHOsm2cBt0qyGhS_dF2HID96WzLA5xdy8CrJB4jP9A",
                            "width": 1412
                        }
                    ],
                    "place_id": "ChIJhyTU1QZUKhMR3U2mVSHjohc",
                    "rating": 4.8,
                    "reference": "CmRRAAAAshLMWy3ex5tAkjCRL859L6fo48ps9oRYYB8B48Vze8WoDZ3JWog3hJi_Qaar96j-dQnFcnzWfoT-6yh8H3Sx5RQp5yaIkQSC7gTlSg7ftX8D5rX3XrHOfkr87m-JFC0HEhCyBvuvUWRtBnwYIxC1OKQEGhR8MrwZLYYK3WUlzIOeHLm9yWTGuw",
                    "types": [
                        "bar",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "Via dell'Orto, 49a, 50124 Firenze, Italy",
                    "geometry": {
                        "location": {
                            "lat": 43.7690881,
                            "lng": 11.2403742
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 43.77043783029149,
                                "lng": 11.2417235802915
                            },
                            "southwest": {
                                "lat": 43.7677398697085,
                                "lng": 11.2390256197085
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "c7f0ce2f30795fc40af92e40d82c5f2582b98d24",
                    "name": "Il Guscio",
                    "opening_hours": {
                        "open_now": false,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2988,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/109072428855140123556/photos\">Puneet Sharma</a>"
                            ],
                            "photo_reference": "CmRaAAAAPRTn25SgB3TwQyFQdF1RJJDOn35XQIjoTz9ta7eJkrDCGGuepVrvnnknmbDEzmOl-UGYT7P-Zc2MVAT26LUS6xTmLWnLCiPNdH6Hcep4hwnZdH4EqcFobn8V-Sxi_bEwEhAImU6RqNv2wSUoSGD_4HtfGhTadYQU62VG9UgHC-ArY3lbQoWe_Q",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJOax-rFJRKhMRAuc9qCeuSAg",
                    "rating": 4.5,
                    "reference": "CmRRAAAAOO0aXcHNp3PsKyId32fBuHDAK1I39uuazLI5ajS7xVjt9ocja6eCo9TUQ6EjDeh2hUxpiti_rz8jl3Z32tsW65mhsPYQYQ4Y7vvfC-OLCrNIi_wFaxvbhSCDH1klFgnlEhAsymFCxyseqGhgxCycLpNQGhSUePdj5VJQRs2b4DXeqfBORW4ZiA",
                    "types": [
                        "bar",
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
            "city": "New York, New York",
            "city_id": 1,
            "lat": 40.7128,
            "long": -74.0059,
            "summary": "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.",
            "visits": 18,
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
                            "photo_reference": "CmRZAAAAraVGMjdyZKtFXNOyTkPJm_wNDreBszUgG7YV7-KhyQSSf0z-v2F1h_yIKRRwM2hnIJFpHQiFV7NdH3IR_7UAunVlLwKY1ueaWhKGar-nrOm-GMFOVvgsu8Dx4-Q0zoS5EhDdPLzLlt9wyIym0HiBDCPUGhRRajIbhNyuOA83pXQ6LtqW8TdAnQ",
                            "width": 4000
                        }
                    ],
                    "place_id": "ChIJb8Jg9pZYwokR-qHGtvSkLzs",
                    "rating": 4.7,
                    "reference": "CmRRAAAAINo2-F0EjQYMAiMZRVT7yYqhhXcHTybZtV6EgX0tvx1wPUeBaDugvYcedd3S69suXGy2VsM3F7M1LVzWiAUn4CZ_cTuSIVNNLqqk3Z6uTNs9lVoJY9HLGvnPgIfytnHEEhBQc4-_YH35OR4tXPeqGH_QGhQ9kVICgN5Dm4Jv31PzDuhtxjFwHw",
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
                            "photo_reference": "CmRaAAAAa_5VO5zG9PlQBoYy8pIq5GyNUONSE-zIc4LWIeCPTNzyfjflGLxMxoBDQWjgAfzxzbozRTh4VYxxDzZM6Xf_vocoi_PAdAjpeNI5MbB0tImg3PjiNS50Tzqbu4bGADPfEhCCY0ibKCjVdLw3ArAnAOp_GhSZO7kItyWjy5Y84vLvl3ZSEGsooA",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJaXQRs6lZwokRY6EFpJnhNNE",
                    "rating": 4.6,
                    "reference": "CmRSAAAAoldMU9SrnaFsx3YE_PHrMuTCSKBfAjxzD28tJNw1W76gi3EJII21zPfr-90r3Hhlj_DXv3APodRpSH5Xi8CB6aWUujnM60nwyCz91o2JMK1YdrEfTnW4s2UaFWEQ9OgdEhAs0tIHVLnbe0fHw6-evSScGhQi8xjBgBOpADwETResCBO-Cb4wmg",
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
                            "photo_reference": "CmRaAAAAIGVGizCTthWvzdrKLuY7fjXBIvSzvBEhc5LlBujISbPChaF7XubvJMl2VsfvGO3Dkkmt50Jhfge90chbJFrqYZzZJzabG6RZoJsqQi77SRwTSLBubP4mKwD2CawTPkD5EhDQOrnZZLoGKMW0raHh8737GhTpsXoTXYwOz6-V83Gi22lXS-0ybw",
                            "width": 4224
                        }
                    ],
                    "place_id": "ChIJPTacEpBQwokRKwIlDXelxkA",
                    "rating": 4.5,
                    "reference": "CmRRAAAAgcbMc_lXgnzMcrZK7RZlyrR_08OO2Ojp1-fckg17DuAnh9QX6f-E-nsnA3m0wgqYQbxyGLl8XE6qw2EWpPtPMMNEPHtfRpyRerw44p9UtZ5K488GYHf1anMBCQJN4ECiEhANFkQN0F38eHdEFuDaK5QvGhTEApn5h5ws1-4jxxhJ3lSgTulk-A",
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
                            "photo_reference": "CmRaAAAAM9GvbPi4XRCYgB0z3pDdh4It8VLOFWLpYB7coL4Sy6SxNkz7gUXvNwXg9-n94oTATNgA15jMW4lN-tY1cw4C4aUG0oZrFeW-3ztDhhcPoEmu7pYi9MIGNAqtLInxHN86EhDnII1wGHg8pkAk1JurEVnNGhR5M4Bhls1SRNoreKyST4hyzvzFmQ",
                            "width": 5472
                        }
                    ],
                    "place_id": "ChIJRcvoOxpawokR7R4dQMXMMPQ",
                    "rating": 4.7,
                    "reference": "CmRSAAAApCoJn7hhb4Hz_lUOf7RpECYCU15rky2OW-j04MGJTU2wzl7mzAV71XXeHQ0WaSi34j5k83DY931U_YlHJ79WBvMkNWzjaWkuwtWwgr_pxzpYWFYQJWozUQXMd_NhN1YzEhCx8l6iTRKZcUMRlBnU28e1GhTRPflSSRqDDgmbhaLbo9sWMQXP1g",
                    "types": [
                        "park",
                        "museum",
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
                            "photo_reference": "CmRaAAAAVYXkH8SSJfL2HdHp4gPYMGPXs7ZrkzPPe3z2znfGhQGDpnAz-yMc7hd_6SipNFP84ZbbE3HR3YVFtuCDPdn73Ix6QnydgNCLorZkj2YxHbPmAMovcOopZXBKwN-CieIhEhDwcpDKR-94dLUr2GvX9s2RGhTHZGjN--Kp93XOEMvsQgE_s_onTw",
                            "width": 3879
                        }
                    ],
                    "place_id": "ChIJeWPFRwJZwokRGD60OOo74RU",
                    "rating": 4.6,
                    "reference": "CmRRAAAAz7f6sTJN5OxdUJ9IWcVy_DIiPrAI72xCPWKYTQ0t2Dy4FvAQvt5Lk0pO-oS_MpzGYOsV8TB_M5r4F56eif_QJBSap_ee7MFlXj6V4FOZgRWE9T0F2bcGrbrpBt--DlTaEhDFLZPYxOUJ04j2dZIMtKJBGhRdfVALfbkGlspcw09fn1289gC7UQ",
                    "types": [
                        "premise",
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
                            "photo_reference": "CmRaAAAAwQVSwgyuUlBL9ETdcPKLiCm1a-L2LlWk-BdFZbN4lzyBAlVeEwq4NwSrkcea-eyg46HMfQ3Zsg-IhjFnhqnhLhG8Glu2Q1T13M82bUzWCPL314Jfl6YN7gwO8mOB_5pAEhAJT6-lPbTPijnQykXGRVANGhTc2ZO0gBrTTF946IysNHfKf67tiA",
                            "width": 1000
                        }
                    ],
                    "place_id": "ChIJ5bQPhMdZwokRkTwKhVxhP1g",
                    "rating": 4.7,
                    "reference": "CmRRAAAAE2Me28IyIldPLX3OW1Toaq6uOwV009emUy5eT-dGwoShPPbkJpGiKZuuPLk7XcXhSSDRAbQLJRJlwa0mXHganYwbJ0E1bsDaayV14tt-hsAZuYT7XL9aQ0X-3qK5BX1vEhA5KizUJsT-iWH8t3FLMRKoGhRffWNupEqcJ98N9o6urTp3PaXOnQ",
                    "types": [
                        "park",
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
                            "photo_reference": "CmRZAAAAO7o2mTwkWIoHoof3ObPcgjbyZxBuR_vqJWWKu3VMNYHpnYZnInjSnLdyf3iLGv-no0eeQ72jnw--ISVBC6ef6jgqGtdL1tBBIbKi98bf0AqhbDQVDE1gudhF3U1hAJA5EhB_OPc8VPF-kvSqsWh335vQGhSsmmhA5tX6ptG1rKx_X87zW4JhzQ",
                            "width": 4288
                        }
                    ],
                    "place_id": "ChIJ4zGFAZpYwokRGUGph3Mf37k",
                    "rating": 4.7,
                    "reference": "CmRSAAAApHpErzpoA2qhPg1vfIN0-qXwRCHeZV_TmptrgaFABo00-dLNlZHyOUusr_uCsF-YI5SEtYdwwadpffXwPjcKc8AkbnatCv8qHAW3KJPFRKejTwvi5OAVVKlgVF01FbpWEhAYJIekKD4fD2yK1mVxK8eaGhRYZC5tY82vdDMGObOsQ-7kAimpYg",
                    "types": [
                        "park",
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
                            "photo_reference": "CmRaAAAA7qEUhrw0JLqupp5l7zIFj5ZGjs3daKOqMHjn9EbLYH5FBy8_6LKSWroP_r1JJ-DcW5RlW4KC5oL7pb2iMEt-kgPWiJItIbOtYMZXtWs7raZeQvIqfpHcnhTN6HRL77fbEhBfPc9tHay-WW0nhESGKFu8GhRW_SCV_9Wznrj63cD8Y02d4AtpKw",
                            "width": 1920
                        }
                    ],
                    "place_id": "ChIJe7vKMf9YwokRIMYfDz7iF9o",
                    "rating": 4.7,
                    "reference": "CmRSAAAAkWtWBaMtm30Y5o_XfLK9SxH1b8wzt5-yltmS6jHfQ_szt-W7v2K_29cpm7JmAhEHapueyPGp1A8K8aRy6Frp60Z-rFNqHAqKVrs481SDhZfiwuicP2oEUgYZX1K2ELQFEhDh9eNToXuwLWje6PKkj0pAGhSJJZgCd2O8IMLrU3Ao_ANZfGAQpw",
                    "types": [
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
                            "photo_reference": "CmRaAAAAn20SmPpKgTOGWR0YtgoZg_FgGGZCVEYAsmrMJvCBGfvzgzNFjUFaa-gEapZmnxqD_kOZuzb86LjGyQMgqj2hsTVphO5zBBCTMqjKxedgDWCJtGFZ2x3ov9ItYUSqKO9JEhBKnEve9JrpsCRjNYeycHUVGhQxUMBNtmHizrzFLkalB2ksBO2eoA",
                            "width": 1600
                        }
                    ],
                    "place_id": "ChIJPS8b1vhYwokRldqq2YHmxJI",
                    "rating": 4.3,
                    "reference": "CmRSAAAAG1ZNmyEZbsRCOWAtX8KYq496ZLv68Azv3gl8PmhWIwXf9H3GcX52GyjKUvmjCy1H-TbTjrwIreqgh0OMV_vzhazUapWSIMz1pwTk0xsexEKrNRq3_fvDC9VsCXDgXPEZEhANh49x_5Bz6_TF_CTbULVNGhQCMQnUfn4Zu4J5SJV4heUfce8o0A",
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
                            "photo_reference": "CmRaAAAA9INGz-VVlIWKtnvF1RaQAKlXJxxrKb5mgtQ04a0k6mQg-7DyJF0q3Cv6x2NwtZU6AE4se77nEtqqUTFtUSmRxti7kwYNBEQxcjv6tuknWoIk23mo9XLUhV4y1WUDEEUnEhC6Ub_qKSbQa71VA81bju6FGhRHR9_r7e1dAGzpJFFbyt47grGIqA",
                            "width": 863
                        }
                    ],
                    "place_id": "ChIJUW4vEPxYwokRW6o24DU0YIg",
                    "price_level": 0,
                    "rating": 4.6,
                    "reference": "CmRSAAAAzYEnkDAQ4U8-Yc8OBBXJMeRKYwGaoRmHBWFxUvtXWDFGJnWgGgPyRrSHc56i48YYlDcfz3SRQYKFW8cHT0qpixImwW-G1lDP3R5ycPl89Xgk8kN3A5MAFD3Rdom_phThEhDV2Jyw50xYmeGZ6v5NJ7aAGhTGPPlc-6WSjDdk6oRycGM0PZv4OA",
                    "types": [
                        "church",
                        "place_of_worship",
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
                            "photo_reference": "CmRaAAAA3sx8xPeRBJtxZ0av8zTBTKDabGNqQ2la9Gig9weNv9G0WYRdn67ywzyKjQxzoBPp8Rmc5uZpl1pqoWCGj96WaHqSSNA1SzH-KMsMfnqvG_4i2N1p9cfK-4xscOPhH_yzEhD9mn-Kvb9Ayi5buBzepWPCGhQ4VDGOu8QDlC8en1au3IwyIU-rjw",
                            "width": 4160
                        }
                    ],
                    "place_id": "ChIJCXoPsPRYwokRsV1MYnKBfaI",
                    "rating": 4.5,
                    "reference": "CmRSAAAA6rxshLqO61UNBnenlv5jiE-Gb6ifHTAE_QMFQOYL1-Y8qPLwPXHuTCwoLZtPtxsk73gi-7YzzT-5ainXikOFU2cGp2bMhrQr8enfGqIXu7hp0eiOHxFJoIiFkVi7nXDNEhCZd9dluGOGNuuFWKeT_hzzGhQLRmwsKRb9rDeAlUsTIMNhx1h5SA",
                    "types": [
                        "museum",
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
                            "photo_reference": "CmRaAAAAKFdzxvQPcPw1P2RdhKAJa4Tg4yhNmkUmn4fz8k_DaBFxO4YogdyEFM5Q6azoqMPLrB9C7G_so2EPj6CQD6A0KMWPgZQQKDLG9-6gz7NWKTClUYmAJJ3KqzPh5s85VoSfEhB7OZTg2aLXdCOMXoilCJ7kGhT06sQZxN2Dn67bnfZjuUMvpYhLKQ",
                            "width": 3264
                        }
                    ],
                    "place_id": "ChIJTWE_0BtawokRVJNGH5RS448",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRSAAAAHcSepvq2SzMGDoyrPgHBU6UYuR8SkXj0BoujH5dH-D_oUxBAvj_dViP6h2FNReEGNbeRIUOlPh4U3mmaN-zGz4xnP-45AwtaZxmE1xEhGO4_Evwm33PI58MREQLF_Cm8EhB7RJb6LvSlLr4Zec4dR_EgGhRBZG2a-5dniYLXdWAr-gdm_pjheQ",
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
            "next_page_token": "CoQC9gAAAFBEPW3t_cutYHIKodRm05xOQhRynmNZB9njvVDP1q9YoqoFPUdDVymZCu3L_vpSMSSV4HjwvJyZN3H8i_sTdZWri6M4oG95IhpO78gTW_qQzO15HkqFFSqgUq97mX8GuwpNxFEWkFYd9mw8wBiSk1aznX3XTIxMn2ym40KDRf9dAuejT1K76flgmeJYFWMTxUyJZlceVTJgVIjnyjXerVCApmGP-kYvsQ_hWHAEvUBDVd5-VdcPT5TUC7XFEykVuEAv6Iu0u2kx6Pq_czgUpDeN4er1UaajWTCyzNkFymbrAuAZ1umemaDE1_BS6I9DZnDaaiedOyZDPrmw1I5ckUYSEKs7KzeqnYfTAq610Gtr3tsaFIN7u6g16KAU9MmQ8_gqeKpFt3Rn",
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
                            "photo_reference": "CmRaAAAASdYpEK5piY_RVWe37yOB6f_jfzl1xBkg1FmwvPXDdLhiyyFIKaynxhJSz8wVM0mbgSqmJHx6xEWh8ZVtPgDyIkVHZbvD8naEbzq0lt7L2XvmjuE01ej7a1acPFvj-ddtEhBGBedUc50Az9vLB8QBuIZ_GhQB9BYboi2jGHz9Y8Jyr8huKjHW9Q",
                            "width": 5184
                        }
                    ],
                    "place_id": "ChIJb9nOTe5YwokR5og3CprlOX4",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRRAAAA6q-PLmjxWJeUHIyynulNrkGNQenhGFUIJ3AjdECwQqtBp-04Hei3eoTV43RNhi-lD1ktz3QrADbhxsYvL7OKiHocaXajOSCPgbytwGS6LGcj508_N0-8PVy7mjn-SIWKEhBUVSlwA8A3Bnet6L9VhztPGhQH-Gp6X0DQJ3YKtO3x2J_CNsPdPw",
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
                            "photo_reference": "CmRaAAAAnU1I5P_q0UJ4eqohuiTEZfYZxxJ49o1i4fTIYHTQN4wUzMfohqxpgsz90KnTj6jEbtCtyvXKG2COOW4nuxiTqwGp_gzTKJakOWp37ixXthXMkiK9FngHLItJ49UP_rOREhDFS9lqvkPVbdLHVTkzbZdSGhTAt-oWclcJLl_u9E9DwdIzx_GfOg",
                            "width": 1500
                        }
                    ],
                    "place_id": "ChIJ613balVYwokR2Sd7fEqauZs",
                    "rating": 4.7,
                    "reference": "CmRSAAAALatf_RtOtq3W1iOWN6N4LhyP4c5JZGhUeftjZltjDiiF0d_M--ugPPM1OpCG5thtvjPc8I9w9_XHlOCRdMsN5rNlju122jzXLSecdLh_33kmuovTdBN3XKqz_R_H1RaZEhCKQDO7YSl_jexlj3akEm1IGhTafttckxzaqhpJFToakYQstISKWg",
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
                            "photo_reference": "CmRaAAAA7SkhOkr6mAsMbAogplNqcs_rcMNP8u1SDAJPixL5V8HcYRXt0DISWzXBY00xjVCIiNaMcvRlpOS-a4zTzNo3lbf78KiUPPDInYoWNnv0KkoONw-_43wjjLvBtitdSSQFEhD4ZAq6nlT7KXN4VEK4CYZjGhSXhz5pZ9lZtZwGbE90HF9vIdCrQw",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJHb72rfBYwokRRhrgUWHTlLs",
                    "rating": 4.6,
                    "reference": "CmRSAAAAaivKMo9T-WsXj7iN_AZnlJmeT2h2gwJCBb0Xoqmo9HQtvhS-hr4fzeDKhZhUXvxhiRqdnFLkRl0BGN0yGhgTsFcohrlI9v9dkDN07UBpXvqCVZxsU-kywOCDJ1ygN1NWEhALE0CucwODdsHC9HwlXHfDGhTYLJ1UJ-Aoxt95tDFnR3w6p6nfDA",
                    "types": [
                        "lodging",
                        "restaurant",
                        "food",
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
                            "photo_reference": "CmRaAAAA8-6I7gVZpqDhmYdDcpm__tw3LK5e1jvSk34dKGZZFKnGFRataYz82Cq5VhuHjjcvHBixtIeZXNt33agGTBi-v3YgL8b-zZqWiFHl-NAI1C6s_ciwT6dmai4N2g5cOQA7EhBWPZ2Aibh_TshT4CTI2lxoGhTisQJ14Ku3NoCV_E3LFNlICXQXxA",
                            "width": 4608
                        }
                    ],
                    "place_id": "ChIJl6r9TqpZwokRqsh-zI3NRs0",
                    "rating": 4.4,
                    "reference": "CmRSAAAANeHMkbJttHa7GBiv3S23O6TcRskyMGHKCKOsR1Z6S9afQGsWToHhk1APVSg2Uo7RUACsN0WO1dVIN4NPekYPF-dDG8Fs0tYHD9NvID_c6e0vmzUJFSLcN9_nStAYSJvqEhBUX1zPgFZE5qqBYIMMs1ReGhT9_pVMpF1oPjYFNoxCObj9FPd7hQ",
                    "types": [
                        "lodging",
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
                            "photo_reference": "CmRaAAAA73Rc4C0aCllq3BrgjyQRQhHfE-DCGPa58-H5angieg6ZIKoS5aaenT2LjeDKvcp7upbBXhjXpG5ym68ThQlx-vra5AIsQgOVkFGAj2AkJAbh0MidEqi2AGdO21J6aEGeEhCsx3LKos1kHpixye-IS8r2GhTTXrRqiQwGMzfLFqsJyCNNQelc7w",
                            "width": 3715
                        }
                    ],
                    "place_id": "ChIJC0Xwu-9YwokRDQBat_jlgQ4",
                    "rating": 4.4,
                    "reference": "CmRRAAAAbOpu_JL_rLnPIo3EX3tm_Y78mnue43ubs3Pt-IIeEK2zjZL_YEHojYDFnpa8V1XdGJ5oOlStRxtO9MfhawBD2aGvNZreZzi-CFfFc0OL0YgA_4lsGojApOawG0mkvOKMEhDrYeljzrRZz6gRulj8AJIBGhSZpzyscT1WUKblAkh21LPAYcgE3Q",
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
                            "photo_reference": "CmRaAAAAVdtxJ8TDUDXXJEacZIbcOEc8i-GtyP5K3gkr4Av3xJw2-xuJ8PBccTaM3kiWoIEjQh3y_vEaH6vrY0UFHRjudW3tx6TVMoOvAScQMsGPXo9L0bjgxOuXTwpQMmUb8cyjEhD_RqDypaak3xn-PtU8A0RyGhSJOmuMFt4S-c_fjfUPgXDfsxGtPA",
                            "width": 1027
                        }
                    ],
                    "place_id": "ChIJT_kaUvpYwokRJ-Sl4G4kZ_Q",
                    "rating": 4.6,
                    "reference": "CmRSAAAAuIQhnSGto64D3W9iiw_7DejSP2afKN7-YcIE_lFSbp2KtlDNJPxVb1mkzVpdIwjbNw-hB0B-bwCwpC8vjL6rt78nnXPoeIfgFnYBPmc7tz9KqkiX1zPy-4TKm7A7bnJ2EhA4d3N62Aot-hT_MS2e1AnFGhQAu8-PVne-sRIa5QA5GP4mFj5V-Q",
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
                            "photo_reference": "CmRaAAAAff2NGdVoKaCEYK3jVDdm_K-IdQD17rJI0MkCOjUJr-iQ7wuImKOlYa8TFtwjbsjkmHR02sD-7amsdsSxNiBK7RnqCow8_oPXt9Ou8a0ZOGnP48xk90pWqjdHoWs3KXgMEhC1FNn0KZPHc2kn2_wnf_msGhSws5qPq6vP4PjMBSnN4wdGlLBNnw",
                            "width": 1365
                        }
                    ],
                    "place_id": "ChIJBxesOvBYwokR519Koj1ulDY",
                    "rating": 4.6,
                    "reference": "CmRRAAAAmG6czoPdC070rtuJI3gvtXHKBFFsGI10zRozZwpQYJ7PZYj5d3JsmYRjmosR0XOkgXA6MJwF3riwO9Y-D-bJOVlluMgx0M5LI7yVjBsrisfmz1veVxZ7_rdmFwL3z8g4EhAKQSeCJMiFzR-mYBlsYWqLGhQMkZD_HrWzMcFZf6MNJKkR2Zj0kg",
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
                            "photo_reference": "CmRaAAAALefQT9kuhhb0anJVUmob2MieMfBHmvCvCEh4rSnLPtoj71viMhYOwjaijiNne_bjxJPL8rz33ZkJcuR5ooiNwK6wWaSJOaZYN7jkyANrR2KydllBaYS3c80JekUMixxHEhC0myrFS_eXupkh-D-lUa-BGhRqFEoH6QrxAwSbz4XZFC7kI3tDoA",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJi0E5YvlYwokRp4w4kH4Av-A",
                    "rating": 4.6,
                    "reference": "CmRSAAAA2ziGoxnZkoWdkJ0GD_iZvG7XTb5kzjWyRL8-8Slc6IPPCUEysZ_LiF0GnHtwIG_JQ2YomWid0oly8ReEIEeglbym9XMwX-2Nt-yxeaEZ_RuvY5UmtvnKP6hMJCvLhQfGEhAUNX6oYYxspKLp6tKFUErRGhTdGvcj95-LQu9khknZujDuf-DIeg",
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
                            "photo_reference": "CmRaAAAAHA5dF7Yo8PqlpyqFiyCV7esMTLdi9PGtGpu6ffuw2zX5uWOBpW6lYSYrfF44Un5IK-euJGHOLeNd0TJR2AGo_o_IarIIoeOOkwQUerBQVFauB_2-9L_FW9DJkQ1XQDPDEhAz1MrqIHV2gxTu1jThNESJGhSRl6hZ5DUZN5B0PG4PgrynEwN5yw",
                            "width": 542
                        }
                    ],
                    "place_id": "ChIJebujAAFZwokRKeKF6sJ0lNQ",
                    "rating": 4.5,
                    "reference": "CmRSAAAApLq2Yx7ka1yUUylqNxFbXDYfecfiKWMelMh6nirsvLynbum3Jt7h6Hsw8cONrOsmSM3u1OzGmNq5Ez_8Mx2fKOYY_JUu0qP4olqy6P7vOaSV91T-D9eoFCApP5y0daLqEhBpmNrHDnOFx2cNmNfIlIONGhTXIUm3IlWa42YCO4B3y75650EQXQ",
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
                            "photo_reference": "CmRaAAAAfSEeT2mV-yTHrax9Kvst1qX5UxfvL9lV7APYKTUC0TStXVLJIJlbPkiHtKmmEDMFoiS8D7ICSNQSnYOrL_8hEexW_NsrUODMEjr4qFaLf9_gcu-J1sg8nM-KNd6WfUZKEhBKcgB2E1csJf36-woJtMiuGhSjVwdxxblKIdqNKWvJLhYzXe8T1A",
                            "width": 5472
                        }
                    ],
                    "place_id": "ChIJpQr2a_dYwokRoYDzhaXxroc",
                    "rating": 4.7,
                    "reference": "CmRSAAAA4YSG6Ofn1wOtoXo3UYV7_rgKmYyvuU2ZcqCKWnFr46rmrb7oYujMllhKebHcflxMhhGmmdtgdefbL6Q7FrVNCvHDRkL17zgxEM_bER4DsWCkWLNFddN_lN6nS8wtWJ-TEhA1wDKt8uj09aimafTZnxNLGhTGv5fsXJSntos8xdrljmGxkl2wbA",
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
                            "photo_reference": "CmRaAAAAXzcFbNyMZ2cjIPGhbuW08tOeI8naEml27flvTFDcZiGIWMS7wg-aiuthpalfpCnyBQfbGehk7Ij1E7gJa5ycAwrREULJkKyVCWCXs0Q57wZw2tC2AYymftZunqvrwt4aEhCHWIeFCaZtepwvKzw91QPPGhT0gFqmxnuYaDuImhlemM8vwikHWA",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJpYIgKY9ZwokRMt2wXGRZ1fg",
                    "rating": 4.6,
                    "reference": "CmRSAAAAmaU7EYQj5esk_SJW1nAIMFUhd6mVSAgquqCe3x91nQRjlUlXx1_z4nmruA8sPBn_kG7VaVRN-B9u_Qznu2M6aJ_-IkMkIK8cLEDY3effFJlZmtY87XovVIe_DyElFmM7EhDgYP9Hg1M23nOtER2xGP92GhSCdCZDtKsHHUzAZ9Rn7XEXAaGimg",
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
                            "photo_reference": "CmRaAAAA2LHlpQb93PiwCsQROh7dmJ0jOfHcCWGTNcQX4SnUaHMEM6Z16zpMqJRntyii9pTGDphDutHiCPey7hIYgSlq9Spre-V_vs-ik4Y1oaape90k4hO80XMl-iqzj3TamhCLEhDnAKoinCsf3DTQmeKuLFYAGhSltkAEUcvH39cVXylIMctyncFTdQ",
                            "width": 700
                        }
                    ],
                    "place_id": "ChIJL83lHfZYwokRnd7wA8PLD1E",
                    "price_level": 4,
                    "rating": 4.4,
                    "reference": "CmRRAAAA_nEO0M69hkIAAkoJzER7azCB1lu89clGa7TWSBGS5XiBtd983r5Gx_MOy17oLaWYNA2ZMamzQdxt8qS2MWgrNd3dxaEucAww5b_C4Uk6kjmDUFtXUwp2NuNxuRGXLkkkEhAgsZlrXSJv9kGlkGeDYO12GhSoNbOyRy4MRf621NRly8OTlRvmGQ",
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
                            "photo_reference": "CmRaAAAAAsdw4Hae27nkLPrxqLPOCGDYTUsLjD8LoLsilctbtcSc4l1bQFGM2hswzLR6SqSGz8OamTMvRjjNc9G4D_0kxKCZjd26MJq57pGgyc0FO0hVLrHLHJ1wfEBGhPj14KyLEhD4F3VcFo3vWnqK24kd2xVpGhROL9_sFVfwplT2TLUqxqYH7-rsVg",
                            "width": 867
                        }
                    ],
                    "place_id": "ChIJ-eorCqZZwokRU-91WeuBj6w",
                    "rating": 4.6,
                    "reference": "CmRSAAAAFOZnT_tIYkibrNlxAK59KHwIhMmPJaLWxN46_wYG97Po43OscYoKLGfUdP5hSC8tLvu5GYTlNInqXmUgSiCb_0oJwwM3YmaoEQNfi-YtOkeJFtwkri2we4mVsmHj-viWEhBLzZpeaslLzYjr5YjEboKAGhQLPnF5rAt6zsaUHm1a0vbYvfe-vA",
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
                            "photo_reference": "CmRaAAAADAylbx2TrJP-PfbwwU4Ypxm3g6gjrXsQh83VByvJrZtVgPZUuAjumY6IVgCnAuTyiIATAt6PWSTN3nKBIknHPVYxsc_FGdmQl1_GVx-Iu8vY99bK1egQ3BU9IKn3kRN_EhCI7LyOYYkJZrFTd6hWhu2aGhS-uaQdVV-6reAOPCfUUpi7Ag0S6w",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJu6kY43RawokRnmczCmSH-_s",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRSAAAA1w7DdCa2Ro4G5vuSj3TYayu7rvjfwTnHt5doLMVsP-QKV1FfGzPMFCZEf-1mmRhQ3-O9mJ58KNidaScI5ElICCBydGlexSL13IVoDmG1uyCxajQqqVBRX9-kfK-mKgi0EhB0b1v9_BoyNrSD1wuoMw1_GhT-GdAcqrKge5yRE8Tdp9Xz0A600g",
                    "types": [
                        "lodging",
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
                            "photo_reference": "CmRaAAAAyJva0agB-P1FXrtVrcZj49BHoWloVgeXWo11Jtsx1-NHDnwjo4IOZFs2VwTojbrDWDI-u2W4-VyRGvh3L_K41GfDIwUsCC8CQ1mO6WWT88QHrG5gERW9X45FhdNtY4acEhBOZEkVv_mkv61MYx4_O6hKGhQa1_JpyUZSnXV6U1dn4VpyYwxVEQ",
                            "width": 3024
                        }
                    ],
                    "place_id": "ChIJq6r-exhawokRKgBzzPkn57U",
                    "rating": 4.6,
                    "reference": "CmRSAAAApayPQVPIEdnrt0gAJPyGwXVYrmm80rYqSpeVkCH59IOxzkaJajo_ZckhJp62OZBKcrVBwWM0tICJ1A_E5JEe1HRVs79kS_ntjyYEz-05bfP6rn4cx0xhPvJdWyyJUFPwEhDDM2__iKmT-SFPewqFgm0YGhR3Aw0jBoIkgq7xJfXLsMtn2kRkkQ",
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
                            "photo_reference": "CmRaAAAAVDUkB_N9vJQEV0ZLhDfn8yyRVwfvccfb1WySc1yDg1xD47yS-IivebbQDcODgmQW3OjOOjKWiZXuzGVpQF6fX7iAqfowYD_26BLHuDyo52FzJZ2MLs9iOq8bhsqmMs0ZEhBvsFNiB1HS0qCHaGtlCRNWGhTHjNhO8eY4-fk7vlA3_9Yx-JNwrQ",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJD7NlQVZYwokRUIDluhjtu94",
                    "rating": 4.7,
                    "reference": "CmRSAAAAoWasObjktMwE39Gf90kAczUGaUfBHeE0sPsTUpGAXQo9983GEoC8mADv1nIJYZm_wS8widYNWnD_VhuZpjJ4SaL-FK9kIJ3hnunO_pwWKRpBOh3nfs8JOZKByhgl7XfZEhB9qI9zco2HZORA9YAF764DGhSbfoilmTWfbngh_pIg0deGKGR8RA",
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
                            "photo_reference": "CmRaAAAARZSIDZk96ulMYA5Z51mA6iMr7VlFOUjotsxFBDXgMeNXqmw7dTQvWdElqHaQGilI36KCBIfISrNSqYdDTFu65Eo7yhyrPxqrmprD5fj_-GbPFygpKwAv-xrgBoYL85WCEhDJetJTEJM4tlsrUmDGT2THGhT3GAybk5PxoQRoBATZr8YRohItOQ",
                            "width": 2988
                        }
                    ],
                    "place_id": "ChIJiz9V4xhawokRorqq7eXaNxM",
                    "rating": 4.6,
                    "reference": "CmRRAAAA_gjiAe5X86U71LXLtBNYrBN8oLyL7fXLNY-MoeAZvegRe5EPvNhyBIAv4lsyp1IMUIlyhsiFvQR75nVAEuJt4LspsyGFPDz8Jk8NOqperPGbgaCMlkbz3qWcFQS-qtjiEhAzUZVAH-S7QYixQLodkToaGhTrFdbEKCrTjK0orpoowbcEOI0BKw",
                    "types": [
                        "spa",
                        "lodging",
                        "health",
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
                            "photo_reference": "CmRaAAAAB3shvzAxdIptmOMnoLmvuLUzqszRFNTDSl0SI4z9alIPTt3oaMmko8eVEwtNFW9j2-Kiqy1z6fpaJxuOACJpXrehrLYs-6-fuf15HcagK0mNkVi5FSJNbBy7U0XzgQwhEhBplZOVTS1tfIJTfImFC4FCGhR5uZ3Gpm0CzF1hSuL5I36bGmk5Ow",
                            "width": 1441
                        }
                    ],
                    "place_id": "ChIJhwBD1VNYwokR7eKcshuz914",
                    "rating": 4.7,
                    "reference": "CmRRAAAAfW54OtYuGkHvbPnk7p8PY0Je4JX1L1_CFW57bqm8th_AjJm97VknbzQoqVIVLMQgR_L40ZzPArEJLV0u0afJy7Is4fbNF1W-B7ijH3N5qaxOMpu7XHM9iMFOX7ul3RUqEhCYeUj_JdGX2UApNHgEaCcGGhQwwIk7pqtXgXJTM_Ee0xUDaagpsA",
                    "types": [
                        "lodging",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "365 Park Ave S, New York, NY 10016, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7421174,
                            "lng": -73.984741
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.7434897802915,
                                "lng": -73.9834479197085
                            },
                            "southwest": {
                                "lat": 40.74079181970851,
                                "lng": -73.98614588029152
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
                    "id": "909426657695b91b01008891edf4b91afaf8cd70",
                    "name": "Hotel Giraffe",
                    "photos": [
                        {
                            "height": 1149,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/101235464408598435335/photos\">Hotel Giraffe</a>"
                            ],
                            "photo_reference": "CmRaAAAApehXsp91ftwsMMvTZrqqIjeOEqkKw19r30gf2Oji7zkax-pKrjQeFkJDATJC9V_v_Vtvz0gTP2I5J19lrvJNgN3-aYSO3DyrQs-c213pGEgOfj8Giq7CTSyWSrmVUZnBEhD9ExTsz2bU3l7gHveAcGWWGhQGTbdf7KqxBTixtqcH_Ogh9GX8kA",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJPS6wE6dZwokR9SZxhHay_FI",
                    "rating": 4.5,
                    "reference": "CmRRAAAAePWV9i7f1JP6p5xxHadvpUjUJysgvU2utFufCkrhx0ERmAOBUmtCelW2U4NZXU6EjB4NXtO4r7aBBBDoCDfrA5lUkx7swP0IoMz-3GbFGo_TG9Ds3H_YaMJC8fO3K5cJEhD1IBFr-Ck5RPwY6SmVd25aGhRMiQrkxMhvwckaK7PSl31O5GjRrQ",
                    "types": [
                        "lodging",
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
                            "photo_reference": "CmRaAAAA15BQYQkidPGqd46X6QK0cpip1OCJ-3GB7BfBQSxjL-NRvjyilnSBy9Xe1DoNE3ZgdQ5w8RNadpjCNIZxdLuzjbq0rKjIGPjmk_4mmsmU4Zn3X7yvLv3MO1tlICN-YnreEhD73PnS5CLjzKhUPNdAkNG6GhRSJu-tp1gqPL1my-GdVXSZZ_WCpA",
                            "width": 507
                        }
                    ],
                    "place_id": "ChIJb2q-m_hYwokRFLZdzzJP3mo",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRRAAAAbzJ4x1-hGoA5MdiMaE-oHul8faaPNOz7A0x3iCSHH5CpjM9Ces6hbFi-uOp8jm3CSTJskbsFLQNAl7lv-z6Ynk_mAlSdncRxJo7iKmL_VIMBR7KHgkFVu6t6SzhB53NZEhBGPCW6eXokyjiKJumfSu6vGhS4KI1Ic_oFPnDezI14KeVbUyXc4w",
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
            "next_page_token": "CoQC-wAAAPmSgzy_oT2p5_r3DUvXk7IokqU_i7Ot2VlqNhBJi8AbMyK7-_E-JwaiebRc4vEWxcPCXu2dVIPpnHTLmgkdzBPufx8xip1EZs5YMuzkLddCivJRPoebuAQT_fNnnavkDbP2gb1OHGHSpNNzVCOekvoRn_pco9pg3mNyEzWEbZfILnvdMXOr5xpBhQylFS1gAKxGhmpOV-VmY92JiJFO2C_Lny8PnxmIQ3ueTg9sX2nZiUpBmCpF7uca4vr251JmAKQfYUGgYtqXIR4RTM88IdiowlzbWxkkSLPSlYcF_MUY6wTrnFmceXYqgr3O-C7ILeGaKLQeF1QXqBk8-_O2jTkSEBwqvLD-0p7Ux2cJE9x1XS8aFPKFMYi8WlI7J0HMPZTAjzKZ0GF8",
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
                            "photo_reference": "CmRZAAAAoCxEKPfA0u3B9onTPlpQSLTIoh_QjkUDfKbUYPf3xXbUn_QYhrn7M_Bp_w2vo_ACxYn7VoHk2FW5Km7JevjAPVmqGU7FHcn0tIn1rxT0-HPGvV67sN6zK_QG0LhmbCvKEhBPj4AgzR86SEKhrArGYyDbGhT1RdBBSah_HYALEkHEZI4gCLDrDA",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJ8aQDcJZYwokRyPVIfqjkazY",
                    "price_level": 2,
                    "rating": 3.2,
                    "reference": "CmRRAAAAiJj9RjGI-Pjt-pcqO0xpuVuuhy7AOEc2tPlvm4xLDNtZZReY8VndF_1ysVyyqhZ5F0ntOvgKSRQuU6kQd0oJxnyyUxwl7r5V1NioDVkA1ZEt13qyg6bj5uTlO5Q-AF-TEhC1Y0hpjRa_xeiynpnTPevBGhSy5jdWWNSoaQSWAz_Fk0M5LUtiew",
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
                            "photo_reference": "CmRaAAAA9mZCDONMOZYJnp4odC7Icxd2LPqNuPXr8jVIJHtha0yGYgMMyE85hOG-JqAwLUoDxKBMTDuerw7po2QSGW6NcBaLPn12hy-r2kIiKM2IOfm2wzSbLgAEjUutupbL9yAMEhDpayN8zJD9_BQHUd1VbXRYGhRyrJlrHEne_tFdgUPJi9uvdfxb0A",
                            "width": 851
                        }
                    ],
                    "place_id": "ChIJvSQIgqFZwokRFYQbJdzceSs",
                    "price_level": 4,
                    "rating": 4.6,
                    "reference": "CmRRAAAA3b4SmpdtXWAn_vEMF_crUhUr8-9_gR46MozuqJokqLB5BQNFrxPPWmY26-N6Tq-1iYEkLYQ1iqIBIRTXSpAeqq5Mv9nFoNF0NmZcplsSomMh7DNJEH37JCkj-IOtSxjBEhBR_ckSg0NR3g698pNrc2IRGhSFmgTHL0h5C8yEpdaN57kNWdmq9A",
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
                            "photo_reference": "CmRaAAAAAjMU9pPS4FaCSIM9lQh_4fHroby5eRT3PYC-6LY_r1JV3mZgC4vxtmZQaHRmgvIKV5nI4Z00rS2m4wIoiA7Zx9rp6kBiOntaGUWThMbdxKgZbwChZzif4Sie03u9eXYHEhBYXLaqw9F9O5xvugp6QnOMGhQFJbuxcRDeVtzEPfATVryor2IaVQ",
                            "width": 1520
                        }
                    ],
                    "place_id": "ChIJ09ZGju5YwokRXOcNC23JRwk",
                    "price_level": 4,
                    "rating": 4.6,
                    "reference": "CmRRAAAAs59P5Nvqm7K1lDh-ykWSEymFytJfEUgE_-r4wKOAWChNbO_pCP9D72UY44BuH03CzUk-FS6rhsV6QRKl57nKSbn-Vj6kcn9I_xQS0Lr8lK8GJKvcp1laGBG6PrZXdXMmEhAh8M48bjDDn4m2OBWEjNQ4GhTrs8eN4dtLm7KbFhaevH3SWb8GzA",
                    "types": [
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
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 640,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/103565644244028407440/photos\">World&#39;s Leading Restaurants</a>"
                            ],
                            "photo_reference": "CmRaAAAAP_OMEIYbD6v7Tzf8PXprLxD6p2jgXamCL_yU9fFRJ3AEjcwVKXXqqXbeKQmLVlY1zmeBpBQZVYGZfRCna0Gg1eF8ycVtcOuEHlEGl_qk1k0OcfCEoPyZPgwqYIcMrsPpEhCKBTzy8bgDsaOKyRyEz7uIGhSgrQqN9i4SUE3ul6rcg8sIpsLBpQ",
                            "width": 960
                        }
                    ],
                    "place_id": "ChIJVSKXkPhYwokRVgXdrRfFxh0",
                    "price_level": 4,
                    "rating": 4.6,
                    "reference": "CmRRAAAAZfF-UF1M4tEFZTYcoR1ppRkt9kaR342V8qwtgDxSU8lMg8LHBwfhZDvvyfjdlFWDP5OgVw-LLVmzRTZ-UYxOoOfsQymP0rM60xYuXAdnevSL2VfIbqSt87vxx1ysY_WkEhA6zHCx2uAa06I1vgVROkLxGhQvQmoWFMVR5ZE9ZoeGGWlGIenNTA",
                    "types": [
                        "bar",
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
                            "photo_reference": "CmRaAAAAnq--CRFGSioO8Axb_1WD6IsPb83ty8CvKxaz4R3WwaVvcl1VHMD2nJdPBILDYct4Y1NF3Wi7DXW23yUZ6BljCaQQS6w9p2T504W0-viCWIQ9dQGtMtlc92A_0eKOH7LUEhCHrDlJsZ4ISsaVnwqiu4otGhTbar5BVROpbc_qWpO2r4Vamqplpg",
                            "width": 1242
                        }
                    ],
                    "place_id": "ChIJR_bK295bwokR8gM6QgEdmkY",
                    "price_level": 4,
                    "rating": 4.3,
                    "reference": "CmRRAAAAkavEFrd1N14Il9KXRWaL_YnBIfr3FA0e1gAtXjql11YYcz5w2ZrUpyX4XpGADpeFCDk_Odjd-KVF6aQ6_JogYFqIk1vNKUaA85c5ikirXOrHUcxPuFyh0OwOywaxfZdcEhAB_AbuByGV1U0QEWpbPVimGhSaRgmhX8LG8TX7Zg2jzVlNknvRog",
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
                            "photo_reference": "CmRaAAAAFOtd_rZc2nAbeV9KmnKm4kMgN8mCym2qY-dPS96eEY6EOM8s9HKkrjtKU2y4ZgnvFPN8tm1peNe41ddfPMKU1ryjtF3XHO1V_jz-q-JhvQgw9617CmNdYuf47nzlEhlaEhBK58hAUQVZkmc0OmPgSslsGhTZsMhID5K2nvhjHtpI_tphPXTRdw",
                            "width": 8520
                        }
                    ],
                    "place_id": "ChIJp3PsL_ZYwokRZYqs_40RJF4",
                    "price_level": 4,
                    "rating": 4.6,
                    "reference": "CmRRAAAAJAhm7ydtsQeCSVF1cMVza5GcgaA4Xh4H3toe2vNKtXaZgYOu__nvuwqpSlWAeRfE-Uud7zqr-9s_p_m3D6cNlKsfzjw_8f4NHUWuFXoQWLy-PKOFvWkPg61tlk1isiLrEhDQpUrgF8PkG9RvABUgcuviGhRK917qIWDHiA5XwkwBsoG5t9JRBw",
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
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 3024,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/105563121448815745365/photos\">Kevin Guzewich</a>"
                            ],
                            "photo_reference": "CmRaAAAAAljZWgISawGScri2GETXwJ_WZ-ZxYyLhgSqXd7OvLTvhb4TM0hZpbaTHWXr2yJIPFxm4hsWO-n-3VvNA6YyvwqdyL50O_x3NB8zhL17tTpGiW-6JUH0VEbgVVyfVd1isEhB9mplud8OCFeURWVcabIcXGhTDIFwpG1yZysmKHE2tWP4Oj-TIgw",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJZ72FzplZwokRmcA7CQzDMj0",
                    "price_level": 4,
                    "rating": 4.5,
                    "reference": "CmRRAAAA15Tro46-xa1RoFePbJ85YUH2jl9t6kufqezHJoG6wPSki7WzHgCPDMnNa1j7jPggnMP8iC2OsGR_Z1-EPqVY3pVWYzm4xEEhFhVf9wXajwZfciQhnQ27HZLnxIMNACQeEhBsI44U5nK7unVPTZ55NH1RGhTErhJYze3O1o3OlrPfnDaCWjtpKQ",
                    "types": [
                        "bar",
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
                            "photo_reference": "CmRaAAAApZ8cT0Y-6ZNkBiSTxW9u3czPIsO69iAIvBY8LxkueF_OwrkO6yo6jOQaOTUKYOkmNaRP0Z043aKLLnwF6aX4m092izwbemCHuJ-2a0OEqt7x0nyGAh90_T4RY5VlC5bKEhCqz1SGhzqPg0v5WIl39mvOGhQuY198RWgCtzt53CfUDe10ANw_FQ",
                            "width": 1367
                        }
                    ],
                    "place_id": "ChIJMW-gxPtYwokRzDlnsRgq9rA",
                    "price_level": 4,
                    "rating": 4.5,
                    "reference": "CmRSAAAAmJZBGasu5ggnXnEtYhcsGvPpDBXs1qlaZyJB-bTH3dXYk-5QogJYKWOlwBmVGmxzbiIODGhigD91z7pyZqCxxv16en4LAvvgNbBw7GS5eLKpQxPR4hUTbjisrAf9C6PfEhByAyaa2OahcaSSslx2_JHGGhRZYMyLzoVvYOksZ7QhY_p9BQ3T5g",
                    "types": [
                        "bar",
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
                            "photo_reference": "CmRaAAAAOBS-zS331ACFUo_vlaipGd-gpUXaqg71tW2yTgoDM512K8lPrrAnIsi7M5Yxf6oZV3vSI0_5qvY9eHGsb3jEcwaQVbFYgPEuJJp6CVBiMWtAXGoYrksOEe1pXxJe1H4NEhCMwJChduOA4yDPtabZBReGGhT5-Pzd7LrHTLQA9nFlHpjlypJsSA",
                            "width": 4608
                        }
                    ],
                    "place_id": "ChIJhWkA1eVYwokRPKlaxy81SAY",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRRAAAAzEZQTFTFhSW2Y3UJQC0neXAQFNYMCUN8-iAriQsOq-Ug6ys8geFFoLyHUuWgWh3Liy54xW88rvk-FgRlu_72vSnOjczrvS22KnnB5G_jQctqKymxPYeOIvNU64QdEhU0EhC7skwlC5JWpKVz42EmXC7EGhT1dIIZG68qIFBdYanLerTyOKnTWw",
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
                            "photo_reference": "CmRaAAAApf_A_zdh7yinSTJARhmKEd5jI1hwXSG4IKrZUYX1losIpee-Ff-QCLXiQPeLCXImuOvTwCOevQKfFSXJH7u6bWsIkk4BtkOv-Z8q8KBMW0FtY1SI5UPg8QukYlrNtbFiEhAdaYoCgbK3cFBNwnrX_wKsGhSEUPqbvWhsZ3T_alzBTCvyXR8pqQ",
                            "width": 5312
                        }
                    ],
                    "place_id": "ChIJBWhERBX2wokRAkCnvxPY9lw",
                    "price_level": 2,
                    "rating": 4.3,
                    "reference": "CmRRAAAANXJrxzeQDQlUWWKE9YIjvU_StgtTGjeIj5PZQQQ4vfwZkJT6FozuwvxdqOXRCf0oL0FRAD3Uj4AvwbqTf80XdOLJyjAmcp2Nc4ULSIzyfwHsdj5fhncicM7ymMbXvAc8EhAvIS77PdUQ3ZoeAAt9pd9JGhRn50S2wy1vOThJiWH0893_5-kHNg",
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
                            "photo_reference": "CmRaAAAAYhlDOJru7027cw-5rEo12FnjHxmLJJWS1DsCO9G_rJ-lgcaX5Ffq0K7ZG-NqqZOa1gh14OV3cK0ETyS24AVvoJXaEzGncNAQIhqHJMl18CA2JKz-8yt6a9cdLHZDVywYEhAUuvWAUkH_WbC7hcwfoYeyGhSptcuiiiKzo34uMBimrWRIqQe61Q",
                            "width": 357
                        }
                    ],
                    "place_id": "ChIJ53yq2oZZwokRqIHSP4qZT3o",
                    "price_level": 2,
                    "rating": 4.6,
                    "reference": "CmRRAAAAeNknBAMpI4JMAOwM4oE0R5ScqPoiHBhFWga1gUDhsyJddX4tf2icCi3rbr9geHHhnCHIxZ6ktOLa76Gmp4PkarD41B_el0099_r5VE86hCDNBvOWanSB2MpN7ZqLEeruEhAue8JY0wJ1xjN9WB2KVT2dGhRgWn0xl2ALbgIWE_-SvM2CW_i4Fw",
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
                            "photo_reference": "CmRaAAAABNCi4L80nmBm3hfr3t5uIR0XnbVxzuVQpLQcJCRjsyKqNeWE-Ta7BghPXuE7SE1FV4udzsS_CYoSRYMEZdOUsZ3f_OQmNU_N95wMQUIkaE9PO9O4a0a2i8gNC8Kn5HQEEhCP2WZrgOcYNz2kFORgFXa_GhRp844R46eAOdw878qXnB4uLn62iw",
                            "width": 1800
                        }
                    ],
                    "place_id": "ChIJEWbXz6ZZwokRLKmKrtPfVFY",
                    "price_level": 4,
                    "rating": 4.6,
                    "reference": "CmRRAAAArHbPhyaKiNToP4nWR7uLZw2J67s0ZAz51tAwJ4S13i5Jf8YJdcfFNsqJis-n-JsnHZgi3VfsuSaloHo8ibTFRQQKqD1lQqspQJb4bi0U5kumL2M-8pOW0_BA-0j__dnAEhCig_m_iTL2cozQAkaFYEkEGhQYp9exA4MP20Ec8oNzw68iMwyvzQ",
                    "types": [
                        "restaurant",
                        "food",
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
                            "photo_reference": "CmRaAAAAI-spwKb20XSwW9LwJYMXmF9L8Qt3n1PzuPnbmmJGmc04Fy5h-elmBv0ZiGiUlRYvSnk41Jhsx6-bkDP_nHomofOPrvpH6w6wi8ugxu90X3SN5SZxFWNVznBxBZPOTq70EhA5DaOil27EgG4WrQYQS4zLGhSIk2HUaN5oz-E2qMPXVDDnRNyH-w",
                            "width": 2867
                        }
                    ],
                    "place_id": "ChIJfZsx0ClawokRCNMYMdZ_smg",
                    "price_level": 2,
                    "rating": 4.4,
                    "reference": "CmRRAAAA6eZF1u7WO86qTOUr-NU8B4DZ-OgQU9KzIczJXTDafdrFXyo06RvjksqFEbJoUT9OAWRVeRnyzm5B7OjHqM8UW_mtRPodjJQcclR1xKrxmLcuXJ_PAxRU3MXmdL6WOBhkEhAwaE9atb7DP-yionjm0UvYGhQgCf51YaTjnSem6FPcjyIkFzwaMA",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "205 E Houston St, New York, NY 10002, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.722233,
                            "lng": -73.98742899999999
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.72370093029151,
                                "lng": -73.9859878697085
                            },
                            "southwest": {
                                "lat": 40.72100296970851,
                                "lng": -73.9886858302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "655de0777779660e4d45431510e7fad4f9dd9f0b",
                    "name": "Katz's Delicatessen",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 676,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/115067158004730200049/photos\">Katz&#39;s Delicatessen</a>"
                            ],
                            "photo_reference": "CmRaAAAAVobWfMvqrwJH8I1VigfEgO2RopSakGW-GpdT-7b4cKP83kqFrUDOl9OmGceI6Tjvs3rZ83j_bmTfgzZKZwhXdaKv-8-Hk8Yk8Phao5a-Rl0yodIvSZRmqS5zGytvFaVkEhDCmwXp8bUTLDFVkZaKYmmNGhRg_ku0hPVbBfUC-_pzIoOHNcU3vA",
                            "width": 676
                        }
                    ],
                    "place_id": "ChIJCar0f49ZwokR6ozLV-dHNTE",
                    "price_level": 2,
                    "rating": 4.2,
                    "reference": "CmRRAAAAMlj1LU9FfFFVwc-uSUC2p00fD0e3zEQmSP9UBnCjuONubNb-SwBpbyi0JYhHk01w1xHsh4EydcFl9CSG_-FWyBkAm-lABdSSHR6TBRO7FuSV0wM053yESrVNSWXah33nEhBzhILCMDP0z8ZZQ0Ey3qmZGhSU-dy7BQIDgRDGlkUMALzsQbXC_w",
                    "types": [
                        "meal_takeaway",
                        "restaurant",
                        "food",
                        "store",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "72 W 36th St, New York, NY 10018, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.7507809,
                            "lng": -73.9864439
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.75217548029149,
                                "lng": -73.98504651970849
                            },
                            "southwest": {
                                "lat": 40.7494775197085,
                                "lng": -73.98774448029151
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "9095426e7922bb517291e58ca8e66e1f9f6c6cf1",
                    "name": "Keens Steakhouse",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 501,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/106536161216920689890/photos\">Keens Steakhouse</a>"
                            ],
                            "photo_reference": "CmRaAAAALieNirtcUDuKGWJFty0FaGeLnYnbKMzmSOG3a5l8by0w6vu2iS0ptxJ4PfDcMluQ6qto7yDvDQP3Q9Ty8xtbFO3GEmXEpB2MspGQfRF-yKgbcKnsmuI8ipXwmJYwbBWUEhA2uAUc80eQsGt1uuAZk_wzGhTAXqMZZS-Lsi-I1nU6lssWjhZiIQ",
                            "width": 640
                        }
                    ],
                    "place_id": "ChIJ5804KalZwokRzGll2Rm7nag",
                    "price_level": 3,
                    "rating": 4.5,
                    "reference": "CmRSAAAAVE94OjkW8OPB7UJkvHIUIfbpFmsh9BgcOAAxffWg75LbZb6DnBUWKd4oaQGJ9ucebxoiASo3tqRoJ3WEtZtcyfNkzJG9e_MAQOMzgLWjLsu_-axuAmdNqJoRpE059CFUEhAX2RAxpS6zryQP3elYTW_pGhQb7C96CUtbag3XK7NAmr1vVgTcrA",
                    "types": [
                        "bar",
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
                            "photo_reference": "CmRZAAAAESja9YMusQEraroSzrqiiMJ0pDj84izfE8nykg7bAT3CBiAs9WOw3CvtcWxHoLsJW1j9KOIK-0qer7agF95DTJV1XKfprokOI_5bXp4QQZiVsdEjAKCHK0jEqumRaCMyEhAfeskhPRwa3rIkAtf4GOtKGhSI9VS1qIxPAFK1i4YrZ6qWJTy-LA",
                            "width": 1313
                        }
                    ],
                    "place_id": "ChIJ9_VJHp1ZwokRRhe-9rLmBb8",
                    "price_level": 3,
                    "rating": 4.4,
                    "reference": "CmRSAAAAN6cif34hiIpt1gfr7Y_4ShFwsrYvsCPaFDyfeRiqwojzUSKfBxXcg4j8Y6GMIJDEr6h3An8OVAxdtMeHGXby3w1MqgFRHjgzeYMqqlG_O0UGM-LPIaFZ_pECWuEGQ926EhBKaUW4ajPhO6oQjtmP9wVOGhTD4xp3W5fWSCuzt36Gw7l7K7x-Jw",
                    "types": [
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address": "3 E 52nd St, New York, NY 10022, United States",
                    "geometry": {
                        "location": {
                            "lat": 40.75965900000001,
                            "lng": -73.975597
                        },
                        "viewport": {
                            "northeast": {
                                "lat": 40.76094803029151,
                                "lng": -73.9742922697085
                            },
                            "southwest": {
                                "lat": 40.75825006970851,
                                "lng": -73.9769902302915
                            }
                        }
                    },
                    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id": "f67b35ccae0c10031e8bcd364b95159d7fdcbc34",
                    "name": "La Grenouille",
                    "opening_hours": {
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 2000,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/114683273267173141121/photos\">La Grenouille</a>"
                            ],
                            "photo_reference": "CmRaAAAAVXcexEozb0mwJQUtoFLDEUndXTjqGiqlkfLUrJt59VSKftjcmCyXU_xLFK51vEBlbzeuxHhMfIMUewICi_jkzhPO555tOMac--fnZ2HnSeV0ko73Ggw5DhzJg9Zmb55LEhCuekm9BbtO_zWwpIFHslW8GhRXuW6w5H4IOdsSXOcDqIgTzsJybQ",
                            "width": 3000
                        }
                    ],
                    "place_id": "ChIJY6LmkvtYwokRF9f8cvuztK4",
                    "price_level": 4,
                    "rating": 4.6,
                    "reference": "CmRSAAAAJ5ZK9WHmkAiT7LfmVMOO-0ZAXsZCewbdVdAPEhgsjIPO1IQoj9LtGpW0FrYB6-5dBzu6KpgHzBUy9Es-VBDwtmjRVTrJBHMTwEmBACXDntDwYP-x4xPK3CYd_sAt5acbEhBKQyiKiseK7tNWEcy0k6v4GhRC6_bMj--chKpfTgFAa1iKIQB86A",
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
                            "photo_reference": "CmRaAAAAvEGTIHQoUZGyb9DrvbRubrxhqeq-EUm45cafGt5RiFOsawoizf4_mgVAyYcRiHiHhAsIi-b-Ge4p2buiJZVozphiKvare0YNb6bxNiA_fjbetplcMTzKsrop3n3bnZ7eEhCu4XMA3KHyzRTeA7jeUl2jGhS7gDg4HQWZDy-OI4pQiwkwae8t2g",
                            "width": 2048
                        }
                    ],
                    "place_id": "ChIJc3Sn6BNewokR_RkenZvQhlM",
                    "price_level": 2,
                    "rating": 4.5,
                    "reference": "CmRRAAAAuIvkgtONmHwJSEb9DlbSf5ZzMm7jN4HVjGtzzPNDJQFQ07r6sSVzgaLAiI51kGc0RngROrsxEOmkXGIqrxwiKJnAD2jzhQbWwzrWQ7D42_seU5KM8YCTDH1qpic7TsIhEhAgbfv1a-LXEI-XLF27F4XVGhRv4GkXOcK4DI7YlY79TmftbVo6cg",
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
                            "photo_reference": "CmRaAAAAadDut-kyoDQNKtouwpVlUtWzNwJEZTCuSlWhP3yVdbyTOqU9QHTZW9hrbnQkxGf-A4zHVMeRlegwzfxIuMcjwcAOs9FeZu_ewoQUAt3dS_3YDSdtDG8fn6I-rVGqbVawEhCjiaPmQnvsidoQpdi7IkOGGhRZ97R6B_QpnLHGG6NMg98VRDnorQ",
                            "width": 4032
                        }
                    ],
                    "place_id": "ChIJrXXKn5NZwokR78g0ipCnY60",
                    "price_level": 1,
                    "rating": 4.2,
                    "reference": "CmRSAAAAER878EcudcXZXLtx6TZvCEwQil-cr-Tvy-9Mpx7vYQPYCG1C8ZphfnvJqH59igqSJcTNUdgcaarHgJd_nwPXQZ9kFZcdVZ8D53c_DQBXAKPx3_AE_lYZSJ5K50Y1KZwQEhCUezU-mXODzYw0ZTjGQb09GhQLbMNFbbD-R8L4p8-kGRrd0UAzuQ",
                    "types": [
                        "meal_delivery",
                        "meal_takeaway",
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
                        "open_now": true,
                        "weekday_text": []
                    },
                    "photos": [
                        {
                            "height": 1365,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/107389134674463250002/photos\">Gabriel Kreuther</a>"
                            ],
                            "photo_reference": "CmRaAAAAOR4RoHWKsKuNrgZ1EZ6iGGfXMkZfz9g3sKxB0Ic34cAGOuGACD77KhiI-GvIZ7Yd29UDFzeFNz7OlpvwXEPUYNh49E9wZ-c5L3Ohs2-gbBtQp86Y6c72sJI_5Gt3CIbGEhDoqKmbezK1gFyJRBEGXfybGhS-DreBj6fCUmrAqO053BAlvyqO2g",
                            "width": 1369
                        }
                    ],
                    "place_id": "ChIJw_TGEwBZwokR-zLts543O-4",
                    "price_level": 3,
                    "rating": 4.6,
                    "reference": "CmRSAAAADQkGB48iQAp24oN1wtGqKVnB4vA-bM-gvjJVMW3AUzZ1d3gZyt4UbP08kUgEGA3XmVlTMVcPV9CATkkoaZt6Eu2pfNTrkUT464ViK7ih3mOlINYTbEODjFluw8QNgOBuEhDYsdnocB1TmHbMfsylLw5cGhRUi3RbMLqOMdndeqeRVpHubXV9bw",
                    "types": [
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
]

//<ResultTabs destinations={this.props.results}/>
// var testArray = [
//     {
//         "city": {
//             "city": "New York, New York",
//             "city_id": 1,
//             "lat": 40.7128,
//             "long": -74.0059,
//             "visits": 17,
//             "key": "1"
//         },
//         "tourism": {
//             "html_attributions": [],
//             "results": [
//                 {
//                     "formatted_address": "1000 5th Ave, New York, NY 10028, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7794366,
//                             "lng": -73.963244
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7802527302915,
//                                 "lng": -73.9613772197085
//                             },
//                             "southwest": {
//                                 "lat": 40.7775547697085,
//                                 "lng": -73.9640751802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
//                     "id": "f732f202150af1f14ae8a057a1014ceea6b33fc4",
//                     "name": "The Metropolitan Museum of Art",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3000,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/114083495869686301956/photos\">Steve Raby</a>"
//                             ],
//                             "photo_reference": "CmRZAAAACcJsFqdfJDMy9o_S4O6scrx7bxHirB18F2ytv_ne_5CdbYcxDJ_-aF6-0-U9nBv2BBSDp7gDYEUvh3M_jz55B8l3_Zfg7BJ2Yjs3FYK3vUPmkux0Cs82sG3msLYfeTzJEhD3BZFPIKXtYR49gxiOG6v4GhRzxXXxO0eW4Oa31LeGdBTalQQa0w",
//                             "width": 4000
//                         }
//                     ],
//                     "place_id": "ChIJb8Jg9pZYwokR-qHGtvSkLzs",
//                     "rating": 4.7,
//                     "reference": "CmRRAAAApXn1jGJENjIY8xlg0eExJqp17z4G15ZPxvo0OBFpm0MFoB-2MMAd9UX2ehmrBiSp_wdAMhWWxPyARUAl8F29KB9rbiJbZjkQW5JfQldEGF-EbN17Fe1tuBjXhAQmbMaTEhAde9skYalEjI4A00XhVgdTGhSKc1HNOMpbnaecrx8Vyh1bUNGHNQ",
//                     "types": [
//                         "art_gallery",
//                         "museum",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "350 5th Ave, New York, NY 10118, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7484405,
//                             "lng": -73.98566439999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7497074302915,
//                                 "lng": -73.98392536970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7470094697085,
//                                 "lng": -73.98662333029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
//                     "id": "bc232d2422e7068b2a2ffb314f02e3733dd47796",
//                     "name": "Empire State Building",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 2988,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/103456530252801066707/photos\">Bobby Davis</a>"
//                             ],
//                             "photo_reference": "CmRaAAAATO0FJwRg8oRL78unWhaAI33Xaj-OTVx-VE9DT-WgQC85O9n9eJmmKTzSfN_NXraDatE-W11uYJj_d_sZvYGf85iZHE82d8cqpOTeej6LWIEiVE3ioVO18UBXFmbqSmtjEhCzY824hpvJ9ykoGxc93A-tGhRzyd2n3UPMqUuh_itLNrjDdtvmyA",
//                             "width": 5312
//                         }
//                     ],
//                     "place_id": "ChIJaXQRs6lZwokRY6EFpJnhNNE",
//                     "rating": 4.6,
//                     "reference": "CmRSAAAAAEHQa4FrQIqxRHiftsuo6aztlJvKP7EmR4n2dJFG18ZCBKcUKSotFS32e3HoGZebFFK-Zmv7tvjSuDUDRyCPQu3xR1IxmGW29UC9yjxsnPkqsP3LZBurp4zFyESz49NYEhDO8kjbYDUZXc4Mf1f40TsfGhQiPqRGBRAJTaJcvkVDxy_OwiymbQ",
//                     "types": [
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "New York, NY, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.6892494,
//                             "lng": -74.04450039999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.71823,
//                                 "lng": -73.99872490000001
//                             },
//                             "southwest": {
//                                 "lat": 40.6795892,
//                                 "lng": -74.05975889999998
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
//                     "id": "5a0d7e67078e35af0c456a277df9ffba7c1e4da6",
//                     "name": "Statue of Liberty National Monument",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 2368,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/102768924365449147760/photos\">David Edwards</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAs-IvLtUTYoeR-5Qd4BN7h6SYxX2Bbork9T1Jlb1bC_ExgMaEnF2RC3QzM7v3oKipUwV12JZAYoi0LLWcluqztIMjMOhyvbfMs0qk8aGEBPGTYPGxVMtQHBJTcgilYruaEhBTQFDldHHH6zJt9Qkm33LeGhTXP157PRSBF18S8XhrSAwYmwhMIA",
//                             "width": 4224
//                         }
//                     ],
//                     "place_id": "ChIJPTacEpBQwokRKwIlDXelxkA",
//                     "rating": 4.5,
//                     "reference": "CmRRAAAA-w6hEnAH2c9hs_u7XJp02D0i0K8YhR6Nb9EiOmMwf1eXmJOAQk3adMPhpWAhGQf2iDDjUg9JW0BL9yajVVHHG7kWOj08sChlklyfZ54DHDo2uNGRQEnQenoSOCzGljHfEhBZmXk5FoSDDTIqA7AM0_k6GhQ2dIjZmlJ3phk9oXSYlJi7KOxv7w",
//                     "types": [
//                         "park",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "180 Greenwich St, New York, NY 10007, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7114836,
//                             "lng": -74.0127254
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7123200802915,
//                                 "lng": -74.0104553
//                             },
//                             "southwest": {
//                                 "lat": 40.7096221197085,
//                                 "lng": -74.01348209999999
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
//                     "id": "375f41aa9a1bff7c3766d2f5d80f21bd56487236",
//                     "name": "9/11 Memorial",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3648,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/103145373467458643970/photos\">YOURI ANTENOR-HABAZAC</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA3w1hz0ycBkL9K5ToItSw_vHm6QA4hFGhpiZlB06YuqCar8L2gyE-9Gdc9WrMMuTlSEWYqALo7nabR2G8yKy9fsFniAgLPyv9Pp3CqDoWl6vloFsJ9piRKaA0fLO_3ZVcEhAVq0sdXYGK-sqMJP_l7ZTkGhSx1wOy9TypT0BfKZ7xNqUCfqQdeQ",
//                             "width": 5472
//                         }
//                     ],
//                     "place_id": "ChIJRcvoOxpawokR7R4dQMXMMPQ",
//                     "rating": 4.7,
//                     "reference": "CmRSAAAAiSJ5m5XnnxfvcA3g9fIEmmcrCsG_zo2J1WQft46mJ4jVe8CW8Z8-OkRThT_TiNatpXddNRRnLKMo7UnvrsJ1uMw9hxEq1SrdzMqZh-U3fieLMVjaCSeCtsTVTxwdddelEhCtpjyKnZI9YXrt-m1sL9fiGhQTldh8I1cJ-5qxB0x43E8zIC7WrQ",
//                     "types": [
//                         "park",
//                         "museum",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "New York, NY, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7479925,
//                             "lng": -74.0047649
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7588822,
//                                 "lng": -73.9986873
//                             },
//                             "southwest": {
//                                 "lat": 40.73290899999999,
//                                 "lng": -74.01141530000002
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
//                     "id": "72dc79d023feec77725d7336e7c46fee27805319",
//                     "name": "The High Line",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 667,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/109002135839164232632/photos\">The High Line</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAZ-zOh9-bdBiYmY82TMHQK4E7sdKqwv8y2fPlo3tl2W034NGZMkla_2ubXPeZS3aS-Hqc12mGc5PyO77otENLPu8eJq5Wa4TWsMfVwDIAKVLrJ-L-ajPICkrbD-JY0EyUEhBvfyKAouNZS9Cih11teJpzGhRvsWo4aQfXb3yF5aOfcRZ5Ji9JbQ",
//                             "width": 1000
//                         }
//                     ],
//                     "place_id": "ChIJ5bQPhMdZwokRkTwKhVxhP1g",
//                     "rating": 4.7,
//                     "reference": "CmRRAAAADf1eAqNkPhFyFKRdf2turfk6nvKFBNh850g8817Q8RAF01_23XTMAU0qcOMnjpUwcAtXdWHrsObnA4Agbe_vQzRolO0b81sOEh-QXHK80VBoaER0uotpnm5-REXkUQoMEhDIUXNa4zaob-iBMoxFl2ThGhSvOor1xXpQf2SwqlMC_7u-0EOvMQ",
//                     "types": [
//                         "park",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "405 Lexington Ave, New York, NY 10174, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7516208,
//                             "lng": -73.97550199999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.75289618029149,
//                                 "lng": -73.9743004197085
//                             },
//                             "southwest": {
//                                 "lat": 40.75019821970849,
//                                 "lng": -73.9769983802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
//                     "id": "3457c605bb2ffc2b82b6b2fb097df9169c4e61b9",
//                     "name": "Chrysler Building",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3883,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/105837059446969736756/photos\">Dmitry Burstein</a>"
//                             ],
//                             "photo_reference": "CmRaAAAASoBqiC3Xee1clCRKkXjSSLB9gkmt7WKCF-ecqaWmkkaVIOfCqRhRO44txsBXbhcK1vvnZEazOOggX0L_5Qa7sZRzi35x4Dr0hdDnIM2HktIjPLI3lFyxg0uSFbDky6s4EhDkh_Vkt6BBS9W7zJ8wvMMfGhSdir0WmNXOMF6htOhZ7GBvxbFdDA",
//                             "width": 3879
//                         }
//                     ],
//                     "place_id": "ChIJeWPFRwJZwokRGD60OOo74RU",
//                     "rating": 4.6,
//                     "reference": "CmRRAAAAjaOOu3V3R3pryEFPCDP3A80K7yMub-ga3RYsb_hLKig7aHpGmTlBBbvu3lG1roDRSj2m7Xo1pCGx79hXl80pdXzuz0SDd_MCwGfW1ajk7NiboySGd4MPdKht1ZtV6epNEhDKZ6gkZ-IZNxj6Rc3Md5K_GhRJ40COGbZRfqtkh5XmirkV2Wp7SQ",
//                     "types": [
//                         "premise",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "Central Park West & 79th St, New York, NY 10024, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.78132409999999,
//                             "lng": -73.9739882
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.78391664999999,
//                                 "lng": -73.97120815
//                             },
//                             "southwest": {
//                                 "lat": 40.77880165,
//                                 "lng": -73.97695955
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
//                     "id": "d9dd2c58ebb5c5cb4d00b28db933b7e220a34b5a",
//                     "name": "American Museum of Natural History",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 2340,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/102790079208893657393/photos\">Jerame Cramer</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA5tzBiA9dvH9qd18nakeYxk1WgLtlhvODB_cMNbOdYs1Z-uutk6EL2spK2GBJvl3Hedb0X_K_c1jmblcX-eFAgZ69dQ0jfp1ffd7y3oZr1CEN9Cs7sw1pzwJK62Nu0Q6VEhD73T1Rt6vkDmz_JHlqfjGuGhStompxJLWjEpPU0NUPLQGc-elDew",
//                             "width": 4160
//                         }
//                     ],
//                     "place_id": "ChIJCXoPsPRYwokRsV1MYnKBfaI",
//                     "rating": 4.5,
//                     "reference": "CmRSAAAAgh7foxqwuvepamKs3MlhF9TMio6ZyosK_JUTg8pJaatvLENUwOlFQUs6ZXpvhzF6dbFG6Or2K11nB-YHWZ9T2nLHDDrN23aWtI6k95Vu2f8LtXIb8OUt-fAfWQtkc0bCEhAoIwZhTvZ9tLqBpTm4oomkGhSMT40gVomyfgGl1FX5xt2r0DB6Vg",
//                     "types": [
//                         "museum",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "30 Rockefeller Plaza, New York, NY 10020, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.758951,
//                             "lng": -73.9795189
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.76051758029149,
//                                 "lng": -73.97801536970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7578196197085,
//                                 "lng": -73.9807133302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
//                     "id": "e05462d15e6f301386934e30734e0c6d39636b95",
//                     "name": "Top of The Rock",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1280,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/111582420314532905532/photos\">Sergio Tumminello</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAH5jgCOHh3kq-fRhntSrspnSgmApuP83dhM06w88A6OYLUh8qz9I_NJRDVSVvcVC1YCW9EPx8PyeVvwqWZVsjmsL4b1TP82DoFFUcrwcB2JgislxqemS35hzY5FwrxarQEhC8YKeXdOTtv1nWaaJfuJ08GhSDTAMoM-Q03TfDxz1zLGn0zhHb3w",
//                             "width": 1920
//                         }
//                     ],
//                     "place_id": "ChIJe7vKMf9YwokRIMYfDz7iF9o",
//                     "rating": 4.7,
//                     "reference": "CmRSAAAAYDU8zrq_3OVGdOSHqF_Q2Lyg2pDrcKGwMGylnI3H7XznjRSjPdLohO9dRta95U9U2ukv_Q-WbBuUFi1OaHVRqX8F4OW13NR12jjYuS6RseOXSZNjJPfIEXJVV991y5U0EhDICCtx61tRBmT75Cd3gXf0GhQnBOU0WL05ZPmZL2KYNcxD1AtTOw",
//                     "types": [
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "New York, NY, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7828647,
//                             "lng": -73.9653551
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.81804399999999,
//                                 "lng": -73.9339825
//                             },
//                             "southwest": {
//                                 "lat": 40.74734159999999,
//                                 "lng": -73.9970305
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
//                     "id": "c9bcef33f0cc85eda31f1c7444e9b1a3b82c9a9f",
//                     "name": "Central Park",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 2848,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/114158126016582693529/photos\">Jean-Baptiste Jean-Baptiste</a>"
//                             ],
//                             "photo_reference": "CmRZAAAAGt7rCQWPh0sik2BWniTrGtikgOjzDfRgHYV2FF8bgx1MuFz4jFXWcFx7GSp-j25mU9Z64Xa0uSPJSq-j5f_ui18NURv6vES0yfArC0sd8Wk-OyDi5aCucFBlHpRjSnZpEhBQVWeFR8J7UA-SbNv8hPoYGhRvOFrUFlUxF51g8vLUGac0cjnSzw",
//                             "width": 4288
//                         }
//                     ],
//                     "place_id": "ChIJ4zGFAZpYwokRGUGph3Mf37k",
//                     "rating": 4.7,
//                     "reference": "CmRSAAAAhlGP4HDuIcB5scM4sehdnphe84MokIgXHPp7ElVrrDOiCIfCbMQ08iFTcQlxK1R35RtnjMOolTr99Sb4jvyjY_h4c85fTsmYmr2Sq2oOkRSTMTRqginc3VAujqP0-OtfEhAdvB1Jb0A0bGhlu2CHfBCxGhR6n5tIwUWc5ufTBy6xx30vixciVQ",
//                     "types": [
//                         "park",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "1260 6th Ave, New York, NY 10020, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.75997599999999,
//                             "lng": -73.9799772
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7612802802915,
//                                 "lng": -73.97879046970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7585823197085,
//                                 "lng": -73.9814884302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
//                     "id": "89dd7f0c82efc14f18954f8abf2925515037927a",
//                     "name": "Radio City Music Hall",
//                     "photos": [
//                         {
//                             "height": 1200,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/111235470750488528791/photos\">Mike Somerset</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA00fzt2Vru8VGGNP3QXaN6BCYBlge60FopHzhkPdKVoE2mRenLGkjmhZlMgWrvwHHvJZEq3QTU7Dl8SHz-wKWIisLgD6NzhGaev2ceSij3yB0SOStzuW0TU3coi13UKUjEhCjCPYTJcxitMYTqZh0N9CAGhRHVxgJDbpYqMXxqmDU-T4_PHHGgg",
//                             "width": 1600
//                         }
//                     ],
//                     "place_id": "ChIJPS8b1vhYwokRldqq2YHmxJI",
//                     "rating": 4.3,
//                     "reference": "CmRSAAAA88rBgGDduqg7QeXY2LNLgHAouoOwSsxKvH5VrxIVx7ZJcdl6xTfz9XfXKqgcUT6HA3B4Wa-KlVGe4Ckis0dXPVdsKuvoheyCk74blDqIuwW6702nNpQjmy9s7mHP-ro8EhDur455KAmV10fAOLJc-tAsGhREq2kEL0emIBkILMRRnceaP6nmOw",
//                     "types": [
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "5th Ave, New York, NY 10022, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7584653,
//                             "lng": -73.97599269999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.75987823029149,
//                                 "lng": -73.97453295
//                             },
//                             "southwest": {
//                                 "lat": 40.7571802697085,
//                                 "lng": -73.97777435
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
//                     "id": "acf24f96362bdabb64807f6c17cba8bb1d5b738a",
//                     "name": "St. Patrick's Cathedral",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1150,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/109259847616931570223/photos\">Iljoo Lee</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAQYvSyIX979z3g6tm9nCFEOkqGOb_BIi8yOKTZCbA5YhPKog4WeHKjPDLtEYzIcKzrnaZZr1Vu9suw5kSQ_nVtApGWtGqrrvjFfflxrBJ3LIs2Cb-AqeIV2ohcUgEPkxEEhDexQdJgqJiuSqEk_ccS50yGhTbYgW8rxqmK0MhzVgdj-Iqoj6PWw",
//                             "width": 863
//                         }
//                     ],
//                     "place_id": "ChIJUW4vEPxYwokRW6o24DU0YIg",
//                     "price_level": 0,
//                     "rating": 4.6,
//                     "reference": "CmRSAAAA_UbP_1L1soGhTZE8X3taoqYJCxzbj5cCBWBurNSN70MmDPk_OorVAXpxysWSCkhtNjUPOFOLqH3OVuUbnhindzeK7jFZhJoTs5lcOIr-FVHAV-oUzf7sTL66tnPEBywNEhDPwNazVl_M36OlTxviPvU-GhQWZkHifzrMt4QF9FqbpPS5gfsBLQ",
//                     "types": [
//                         "church",
//                         "place_of_worship",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "285 Fulton St, New York, NY 10006, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7133444,
//                             "lng": -74.0133677
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7143633302915,
//                                 "lng": -74.01215566970848
//                             },
//                             "southwest": {
//                                 "lat": 40.71166536970851,
//                                 "lng": -74.0148536302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
//                     "id": "48cd459142d91a750ab1ac00141e799d2a7c1bfb",
//                     "name": "One World Observatory",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 2448,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/116088260092237923598/photos\">Dani Rojo Gama</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA5j9qKXjpOZFYyiL-fM62YF7PvMTH2OcRBaz7741EkGRVx7BtvNb6E2SMA49Q6tPzpAgPvxqTtrBBdOIHMguRnqpCVC5-1qOyA8czRBQ-NxsKZsrDJ-qL_I98NWLzZ3pEEhAdNQFWIQmmSuKPXNIP33phGhRYVoF0GV88BspdervEQMVJvJsN_w",
//                             "width": 3264
//                         }
//                     ],
//                     "place_id": "ChIJTWE_0BtawokRVJNGH5RS448",
//                     "price_level": 3,
//                     "rating": 4.5,
//                     "reference": "CmRSAAAA7xWkVdJhlJe3eh3lfHWq_LlHVcaPEoA0qNQJQwnwW6LWlBmtbkQ0acQ8qBz5T3wSv8DvH8-7u1oLwdcR_LStFTO4n_SnTAVg5WQ9tA9loO_iKM_6dwvgq3TktHp53QSREhDMF6ax3J1k-aHttcZjwWOmGhRkfZ_BJSZecQajYfan1rYx4FpY_Q",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 }
//             ],
//             "status": "OK"
//         },
//         "hotels": {
//             "html_attributions": [],
//             "next_page_token": "CoQC9gAAAKgEX8vQ0If1v0ULCHG28FY63UoehPCDNXQNywXuVvLlWOxSaxALvXEigK95ilOhcmnqy2FyyjVaMkuj_Q_Y9vxEJRePeTffYFPZwvE_mdM9UGDIulY_BiOdINKpjD67MeNEtenTx9Qc9RSfAGha0dmSkqStFwtmHiFjAiDbrmfdAT46bB51Rm8IK9-zKhmALHKVUfKV7T_YBO3y06WGdHpFIA8DMLOr4Z_1PyFxTOXbs0A2KfoKPtOKfs--6vERJjIi93rV0cHCGCoZhgLoiCDvLiL8OuAFyJK75vbeL5Ag51jqrFvAjOryUUE9fvyd6eR-FNWL2nSjg5ixcZA9rgsSELmrZaMDQpqrgHS54H29sboaFB80D2p6uSzB6YxgBscH9I9_zVNr",
//             "results": [
//                 {
//                     "formatted_address": "28 East 63rd Street, at Madison Ave, New York, NY 10065, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7657089,
//                             "lng": -73.9692386
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7670578802915,
//                                 "lng": -73.96788961970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7643599197085,
//                                 "lng": -73.9705875802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "c688e55a6b1383b9bb4bceecfcfdc1afe384da93",
//                     "name": "The Lowell Hotel",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3456,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/109242289716376687889/photos\">The Lowell Hotel</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAXhRAHwnyQGwgkgRQeEThuncYYEtzi-cZUsZlmhMqa1Sah9IKtE8uuaU0Io6IDLp35svBDbcUUvlHTwEcdwgFs8NOSqTfu6mNQi0sqO7kSMWUD9_u_iyB8TwrV-SrPYbHEhD0rjzCRa3TE0d6SVruGuE1GhQfAtfuUmayAps8v_aj0XFa9KyMYA",
//                             "width": 5184
//                         }
//                     ],
//                     "place_id": "ChIJb9nOTe5YwokR5og3CprlOX4",
//                     "price_level": 3,
//                     "rating": 4.5,
//                     "reference": "CmRRAAAAzgY0_Zgso6rYe-lDDSJemfGs0yAxgyVFbAPowSCdxVcZZVykX1A1ZejQgnihQ1DvSQHtimMszkxNvIBsWAR8PQ8CQgqlH-f-50blxThnkGUEYuKShqVT6A-MhxHTfDSEEhChcOIvsi6SekaT-hJ6qSsqGhQYdT3ieRWNDrjV8fFbQdkVkneIFg",
//                     "types": [
//                         "lodging",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "130 W 44th St, New York, NY 10036, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.75645919999999,
//                             "lng": -73.9845479
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7579083302915,
//                                 "lng": -73.9831238197085
//                             },
//                             "southwest": {
//                                 "lat": 40.7552103697085,
//                                 "lng": -73.9858217802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "3512b942b934633e89bc74d023fe44112b07d669",
//                     "name": "The Chatwal, a Luxury Collection Hotel, New York City",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1144,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/102410255199938987362/photos\">The Chatwal, a Luxury Collection Hotel, New York City</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAD-saiR8PUaCG5mc6YfAU0aA6oopg-85v3wIV3vB-ZIPgEIQLJNQDWPlBlXcSxf1oWrRJZEo8qWKC3jeYE_W3C3Rz3WvZ402lrnjoYoRlU9zs5OexnQ8Bhkk8MOr3EPEfEhC5mSqucPDdq9SVfbx147k4GhTIMx_0Yg9-aVngdFediJHqhOu_YQ",
//                             "width": 1500
//                         }
//                     ],
//                     "place_id": "ChIJ613balVYwokR2Sd7fEqauZs",
//                     "rating": 4.7,
//                     "reference": "CmRSAAAAraAAdBy1wXhRU8wJpZT0cxOgC-810-LeeLFTsX9CpPP60bBL95BSbmY_tQn7w9qiPZtkwE-AniGNn-0wFI1fJD1UgJqLclM8Ah1wZQap6vifSAcJmcg_-alPUF_lXVwsEhAxfOMBnAWFFgxVcHMInE_MGhSTEbjHHtqQBGrMy-HUduvq66QaxQ",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "1414 6th Ave, New York, NY 10019, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.764816,
//                             "lng": -73.97654
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7662118302915,
//                                 "lng": -73.9752586197085
//                             },
//                             "southwest": {
//                                 "lat": 40.7635138697085,
//                                 "lng": -73.9779565802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "bb41cfd248100408e7b046ce91596de6390bf930",
//                     "name": "1 Hotel Central Park",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1547,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/101250783625777815020/photos\">1 Hotel Central Park</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA1TzCpFDphXdrLb4VLpfBlGLL8OlitYU_eDWI-h3jH25j0TLwR09b6BlLTA4nhqLWkMCcTXA_m1FtRcCax8mpxQMp5WTiafb92MUSTG-DzpU7_8rjO1dsRipf3REr1AKCEhC8BtmeFr-rBj3533-pY7wJGhTiOeIRkUbSz6vhjl7GueDljXpGDQ",
//                             "width": 2048
//                         }
//                     ],
//                     "place_id": "ChIJHb72rfBYwokRRhrgUWHTlLs",
//                     "rating": 4.6,
//                     "reference": "CmRSAAAAqK-Q9p43ZLBEGUzIuEVdZnPEm3DHTDggaAxLXLRDbQ06FWpv3E-3Crzc8hxnJUBCQgL4aswsxZno2l4MAv1GVo_DbP1TUZ2NBn7u0Mm2lECcPnrhqwIjRagVmMbQFrdEEhDP9DxZ12tBzFJjrX7RawJtGhRoVAYJV2Tu07pfZuQZo4h3XCGBVA",
//                     "types": [
//                         "lodging",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "540 Park Ave, New York, NY 10065, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7645047,
//                             "lng": -73.96916709999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.76581658029149,
//                                 "lng": -73.96764696970848
//                             },
//                             "southwest": {
//                                 "lat": 40.76311861970849,
//                                 "lng": -73.9703449302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "545296bbc9cafce15027b1bdb3bed73a969c7797",
//                     "name": "Loews Regency New York",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3397,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/114212735480305564741/photos\">Loews Regency New York</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAs3lCOJkox0FGswokNH15C5FDQaOtPw3PFrID8FPPmK4ENFOxNBp8bF-Yp13mbSn-ElAv1KbsSMEqj_W5AZrvFwYcHQQDp6cCNnCqjn2s_er5L2ucswY53pX18wfm4aYpEhCkrhq2tmznxGcyRJ5h_ylZGhTT1laupg4A739Hx4AxW_Ce4ulxhQ",
//                             "width": 3715
//                         }
//                     ],
//                     "place_id": "ChIJC0Xwu-9YwokRDQBat_jlgQ4",
//                     "rating": 4.4,
//                     "reference": "CmRRAAAACloln96dHGDJ3pyVCwR3KMlLSlMXIxCzxfWRREJTA9hzQrCRNXlopcG8JsfVUpddro_R80i6Ox0D78d30ww0GlSVD38P5Dz6QR9iJnjB0dyu7sFBYjUTWwXoP1xoTtM3EhAs2OOH8MluttDKJ3V_XuTCGhQPDoDwUf-UV3XAdN11oWIX_wTjvg",
//                     "types": [
//                         "bar",
//                         "night_club",
//                         "spa",
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "63 W 38th St, New York, NY 10018, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7522068,
//                             "lng": -73.9853708
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7535063802915,
//                                 "lng": -73.98406351970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7508084197085,
//                                 "lng": -73.9867614802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "c1b316163824a94cfd4c3f8d2f21e6c04cd130a6",
//                     "name": "Refinery Hotel",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 2592,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/108826836482178101148/photos\">Emilio Garcia</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAbeaBdd0I8_d1uE4j3_XfXijHUsF5Xyx4tBiYA9fMO9JNb49XPSZbnGrTn6_4GnKJpjBHmY7Oiz6znumJhXjDOW1ASF2_CZvY5p6xfBxO43KCez0NPmzaTPWzU36pLeePEhA7sBQ5sI9VQJDM9nXa1lCYGhTzfQ_m0InpwsMgnNuf00vpRib59g",
//                             "width": 4608
//                         }
//                     ],
//                     "place_id": "ChIJl6r9TqpZwokRqsh-zI3NRs0",
//                     "rating": 4.4,
//                     "reference": "CmRSAAAAPVMdL6pI0O5Fmm2q44yh35LCA1iCvQz_Qt6Eel28g6bmrrU1UrPBe0juwxea9bgAeRUC8cj1eJ2lByeJXvytAqSrvjzwn-BM4qQzRzK1HcY1c6ZMUfSAZ0aloNAN_ay0EhAqCdlYKGPHjV8Ps4C3KqFnGhTs1O11YFgkho3qWsUEHMHoCnrfCw",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "2 E 61st St, New York, NY 10065, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7652431,
//                             "lng": -73.972003
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.76658928029151,
//                                 "lng": -73.97058721970849
//                             },
//                             "southwest": {
//                                 "lat": 40.76389131970851,
//                                 "lng": -73.9732851802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "2c4ac10fc7d6efa48fce6e07580729b86241739f",
//                     "name": "The Pierre, A Taj Hotel, New York",
//                     "photos": [
//                         {
//                             "height": 1372,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/103795444667262596243/photos\">The Pierre, A Taj Hotel, New York</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAed4DdRbJ65nLdny1KzBt82CYHotJOQGsnUxbRI3g7Oc8nQLki_USX1hMX3_F1pDdxsA4Hpp-AohCeCvBR7Z_s6Qr50ynnH_P-PdvThoOsT8h8PG1_saPWWJb5zRMRzWCEhCqkNUXRutH1yvapi0TYOSOGhTytAndkpPdal_D8LLShOYIbSvwjw",
//                             "width": 1365
//                         }
//                     ],
//                     "place_id": "ChIJBxesOvBYwokR519Koj1ulDY",
//                     "rating": 4.6,
//                     "reference": "CmRRAAAADgt0__1MVkRjVVbUTCYlcSgLIeRh5NLc3csLx_dcmhn8mquYKUsNKVjRdxiRoKPCNwBT04gHHJEhevXwM4FzQE71JLuM1d2XbgEhnCpW6UE9ZbwbnLWppnR5SRBN7csREhC4FT1AHqiuslDqsl5_otiwGhRicUD7wi3MsgGs9k5AwrbW3jgaFA",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "79 Crosby St, New York, NY 10012, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7230126,
//                             "lng": -73.997417
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7244160802915,
//                                 "lng": -73.9961563197085
//                             },
//                             "southwest": {
//                                 "lat": 40.7217181197085,
//                                 "lng": -73.99885428029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "ea50675441b2417f2c6eb94893e19fe5d6083e77",
//                     "name": "Crosby Street Hotel",
//                     "photos": [
//                         {
//                             "height": 3024,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/107359684834766993542/photos\">Thomas Julin</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAj8SXySU6JJcFBVtYSuXIy4Jj-cDbPnPBh46bvrou4QIQHPvFMZy0GMXu8CZUVp2l_g-hioSXXFdVb5XfmwEBK1H1uojLBtZW1BFwhwrZ7apmizTZ9sHH2bglCX5YiWWmEhCspT8RR4WsJ3b_J8frk2yiGhTI5bcCVCZ-4Zq7ynMdlzVekGHlxg",
//                             "width": 4032
//                         }
//                     ],
//                     "place_id": "ChIJpYIgKY9ZwokRMt2wXGRZ1fg",
//                     "rating": 4.6,
//                     "reference": "CmRSAAAAD9ymq0b04d4BPoHeG4AZe1uUX2OAKYdlagyQJaLC50lzzAfhr6dOOUeK4-M0GQT4641nCYnvFEUyLVqYfwHdqNjptGwYOjdgLjVQdYZLrr0Rxpel-aR662uase8NSbF1EhCzTRvuX8E7Sd-6oNO9CR1uGhQYOh2eSVPlUXv9uUn_Jr7g9LvELQ",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "28 W 53rd St, New York, NY 10019, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7608918,
//                             "lng": -73.9774011
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7623123302915,
//                                 "lng": -73.97599961970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7596143697085,
//                                 "lng": -73.97869758029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "93ddd9711135ba466a4b1f3a9553a3d9103dcb5f",
//                     "name": "Baccarat Hotel & Residences New York",
//                     "photos": [
//                         {
//                             "height": 1327,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/102738290005557096512/photos\">Baccarat Hotel &amp; Residences New York</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA3YZ3GFq-XTQB_s5HP6NJAAQlzPrKv7TG1byJ4Wrl4hIm6BZ56ywNwXaEt6WHnmifYzp5RaRzhELz8ZrfOSmCW7hG1tNNOrJa7_CKkellN7orFrpCAOty2aqC9l2_sbWbEhB4uN5XB9yDOqXct1fqsYYmGhT-G1zbl-w92SYfgmBWaLTOOMMs0g",
//                             "width": 2048
//                         }
//                     ],
//                     "place_id": "ChIJi0E5YvlYwokRp4w4kH4Av-A",
//                     "rating": 4.6,
//                     "reference": "CmRSAAAA98bDYp2y4Z82Ri0jJ_erRQlFEV0JtBh1w1HpJZcstyQLZMzJzEsWZMcwLKspp-4aJUxJdYKdRcve9wntsw0C7fXOl8vd7YunDD6TLQgDVMoetAhTRM4WPBrdUhuCUYx-EhCnk52JmBBup9I0-VGMHHlCGhTrH8UkzN7vAd-YFIt9A526ZOgm9A",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "153 W 57th St, New York, NY 10019, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7653771,
//                             "lng": -73.97907219999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7666283302915,
//                                 "lng": -73.97777731970848
//                             },
//                             "southwest": {
//                                 "lat": 40.7639303697085,
//                                 "lng": -73.9804752802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "96226aa2bdc8961eec42c1ef5df5661446e9eea1",
//                     "name": "Park Hyatt New York",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3080,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/108334015335617733618/photos\">Jimmy Sylakowski</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAcB9vVBW08nppguDiswSpQHQysCJ95-fQhv4NIdyRK07hOWQTB-qe1O-DBjcUVeASdr6CCO1OUJ-2TWgx-nzhex2mqo3bKIaPAHI3QT0JjQeIlxbJvv0kPncTteXcMiM0EhAOWkbBXaQ-TQ6TPHKp6IK3GhSiTQNgMV1sWREIodQNCjpabmzJ4Q",
//                             "width": 5472
//                         }
//                     ],
//                     "place_id": "ChIJpQr2a_dYwokRoYDzhaXxroc",
//                     "rating": 4.7,
//                     "reference": "CmRSAAAAGBrT2QsYxAq0ODuVrHl2GgkUqzzND4iebupnckAIYvgdCECIvXbqjoH8GAW9Rd82VLr4FkJZWPBPchEoRNzrBR1XlMYC928d4Bedw8l2nTToRjx6F_hyb5WgJ4d3z_iJEhBZrWxz5NylVvdUh-5xPJPcGhQc4YgY5NXDZ1s2BajQlk5Djxm5Xg",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "455 Madison Ave, New York, NY 10022, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.75801999999999,
//                             "lng": -73.9749775
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7591687302915,
//                                 "lng": -73.97365336970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7564707697085,
//                                 "lng": -73.9763513302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "6f58d9b4a4f4148ec3ae34f5fcbf609c53de78d7",
//                     "name": "Lotte New York Palace",
//                     "photos": [
//                         {
//                             "height": 3024,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/117650888548196368054/photos\">Vijay Sondhi</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAvJ3G586ZDFs8_Mt81eMsvIras1WMRWVD_UuNLLNFEQRs_KidguSbtvC02kZbW29WN-MYq7FCdwmjXXtmxw384dbGdURur7AHho740fkt9SqFihsp9DfjSwGi2hdwfiqbEhB2MDWOEu4sH10dP4vxTND8GhQcSLUmNQY4SCBIN0bHcqxNFX5Gcw",
//                             "width": 4032
//                         }
//                     ],
//                     "place_id": "ChIJu6kY43RawokRnmczCmSH-_s",
//                     "price_level": 3,
//                     "rating": 4.5,
//                     "reference": "CmRSAAAALqPH818Ds03ARELzxr4JEfUy-HLoRYU0bGf-gF0VpZpwEYaTmRRK_h1Oe7_rp40xFxxEzszwbOaD2wP2kiYTDOR-KHfZZ_MFT_KUSZXOX36L75Q4AnD2qDxAUB5RkzydEhCrnheIRJIhsGADoDSa9aslGhQNaEefH60gK3-fGOH5f9p-pJ0KFg",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "2 E 55th St, New York, NY 10022, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7614222,
//                             "lng": -73.9747694
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7627912302915,
//                                 "lng": -73.97326366970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7600932697085,
//                                 "lng": -73.97596163029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "4043ee03ff77910e3ed2c1370ae6ef45452451d2",
//                     "name": "The St. Regis New York",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1500,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/100682632239373146271/photos\">The St. Regis New York</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA7xy1ru4yK5GN-CEl7bpuS-yCozLVEOUgRBrYSrKmMidqrcv6Yq3rpKA4QbCXYc4gl5WfQwRTYX7Os47J0h_grETetEuPS-T4y6iZmUZioZ80Gx4s0Wdcf6pLzj6ARpYgEhAidcZj96REOKH-bPO4DocdGhRkma_vqF004II678EFPk2E83U36Q",
//                             "width": 1027
//                         }
//                     ],
//                     "place_id": "ChIJT_kaUvpYwokRJ-Sl4G4kZ_Q",
//                     "rating": 4.6,
//                     "reference": "CmRSAAAAUvnUOq3FtBs_Ys6Zg0Ms8Hvesxr0ppvL0O5sh6W4NJ9yRhNggv9oc8TBGAPqX5ytbGHHw0Te_DVtktr63TsGinnOgznSFyb9RhPTwNSq4LUW46FlwZPTlvI-MQRzFzHjEhDhy5CFNxAzNRwDycZwBjrHGhQdFqOYN2zoeRIHNshZZGPBXqIM9Q",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "299 Madison Ave, New York, NY 10017, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7521911,
//                             "lng": -73.97949470000002
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7534640802915,
//                                 "lng": -73.97828001970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7507661197085,
//                                 "lng": -73.9809779802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "1f856665787bb91f06790cb5ecfca0bc94ad9ab5",
//                     "name": "Library Hotel",
//                     "photos": [
//                         {
//                             "height": 700,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/105494787689478068331/photos\">Library Hotel</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA4j4k4ec-q7A8DgrN6ZXX8MfiGWfT7UPPv1GPCzgleFKZMj96e8kYpaK8MOxTe_07fiYgmxIvqNAzgIjWLbuUD4dBn5F1Jm-7M8nXQv96YSbe4XG5Kn9P18VqIapHkUjAEhA1Q3QWdEk018OXQL7Apsa0GhTZpa_1PJmoUGQPQpBsxiQ7rpfC6A",
//                             "width": 542
//                         }
//                     ],
//                     "place_id": "ChIJebujAAFZwokRKeKF6sJ0lNQ",
//                     "rating": 4.5,
//                     "reference": "CmRSAAAAn18MDqGAyWa6kI-pvrUYsfrH01cqBVK_iB04-RF4rS-V88jrfwk8Kg9Jy4ACEu2IeMzxwMK4vshzHjcHqMkpriBzL5x55DtE9Xk8V5AEqOZXm9bCj6PBScxxEkjbh8STEhDs25dhHyRbNpJxTnwlCybIGhQwrSRcQuB-OoMCXT-yTsNF1M7ESA",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "80 Columbus Cir, New York, NY 10023, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7688844,
//                             "lng": -73.98304399999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.77044403029149,
//                                 "lng": -73.98159596970851
//                             },
//                             "southwest": {
//                                 "lat": 40.7677460697085,
//                                 "lng": -73.98429393029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "c561b4b600e0038648deeb1ebc1e2d2a343986bc",
//                     "name": "Mandarin Oriental, New York",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 467,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/107750642314223413387/photos\">Mandarin Oriental, New York</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAN3fKBRkLmZeauaMU48bvc-BC6omQt6sl4cVQ4CBi32Rw3vvN1Xum0nJn6FbEvHy3mr-1Lh86TKGW4xejx3KmsfA1jalbRZHXtT5kJpQ7u2CMsKAgpss5m7Xu09DKPlCnEhA421F2koN_OYLOg2hW-9OxGhT1qf3lKeco5MnGDVPRDBeox0e7nQ",
//                             "width": 700
//                         }
//                     ],
//                     "place_id": "ChIJL83lHfZYwokRnd7wA8PLD1E",
//                     "price_level": 4,
//                     "rating": 4.4,
//                     "reference": "CmRRAAAAlHhPvxT7s2nQJEWi5k-xrNVD3tjm0i5YxF9NhfVq64vaf3teE4eyfvW-Q5iOfeTf96Qo_bd607xiRZklM_I2Q4zyLZdwZLjlo7f4-JgOPmnh--Sh8Za5GkwzKOVq1brREhBpwJWXaA9eXLQ50gL4Y5iRGhSkiyH-kZadTmhog3mII_Ran_HeSA",
//                     "types": [
//                         "spa",
//                         "lodging",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "1170 Broadway, New York, NY 10001, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7449631,
//                             "lng": -73.98854930000002
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7463378802915,
//                                 "lng": -73.98733511970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7436399197085,
//                                 "lng": -73.99003308029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "c6c24f6061f4f2267fe7b70a5406bfaf7771248c",
//                     "name": "The Nomad Hotel",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 866,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/106766407137652164568/photos\">The Nomad Hotel</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAnre1OIUz_osNGquRt6zjnVQzUJvM_d2W_sxAzA8k4Fbw7aBeBI_aavwYfmjXkLW07CP9JjfvszQMSkmhZhEk0E_TxsfzKqB_fN4HNyeUNd-oFPUeu0-XMS_CP6mCdZAhEhDvMc9S16cpi7EBOdZnSN1FGhQlwECc08VXn0xdlV1_1wv4xe88mg",
//                             "width": 867
//                         }
//                     ],
//                     "place_id": "ChIJ-eorCqZZwokRU-91WeuBj6w",
//                     "rating": 4.6,
//                     "reference": "CmRSAAAAm7pY1ew0--GZ3vuFls1LGuej5JFa4Rs7FJNnv9nK-3VmMqpEXfVzNc54oHcMAjpwVh18LmsjUoDY1OOMmvpkqA4CIVwuF8vHXQVkpb1jAsav0Le-20XTIK9quWYESUsBEhBxRrxb1rjnDGZqFb-LJAVAGhRGjKnkwwSsB38YoYGc_QOacL8Amw",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "27 Barclay St, New York, NY 10007, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7124701,
//                             "lng": -74.00908559999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.71383068029149,
//                                 "lng": -74.0077273197085
//                             },
//                             "southwest": {
//                                 "lat": 40.7111327197085,
//                                 "lng": -74.0104252802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "56ac081281eb9d58541dbfb75b45173d35b0590f",
//                     "name": "Four Seasons Hotel New York Downtown",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 5312,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/105675882692320109205/photos\">Maria Cona</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAE2_zakfW7uthZTni0o53-LlVqYZgE-b2OLjxzSwlbkPY-aoafOpE-pGEzfTX39gt7CA40jxwCtK7Q8KLBZWh7d2nezDyxHOMHxwRq327AypbihdhCmBlUfbuuZ2nLRoiEhDZ-52sLduHbNPI7JFfrVK6GhR1wtaG6cFx51GNoFGmmDPt9idTFQ",
//                             "width": 2988
//                         }
//                     ],
//                     "place_id": "ChIJiz9V4xhawokRorqq7eXaNxM",
//                     "rating": 4.6,
//                     "reference": "CmRRAAAAnyPnarPVv0EgTM-UGd_2w46ncPe1w9CMj3Yd7a08-2PvX7shTp3LHYszSRf2G8b_Mud865HXkxHKe4xHV0nzCgjd9reEM3ntOL_LU5Tm29bCwAJXEyW3BNziWoDjFFmWEhBvfw9pIZyfW1abmMH1q_UcGhQOemD3IZc5r469jZri0t9bCytdYQ",
//                     "types": [
//                         "spa",
//                         "lodging",
//                         "health",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "123 Nassau St, New York, NY 10038, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.71123350000001,
//                             "lng": -74.006745
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.71253403029149,
//                                 "lng": -74.00533491970849
//                             },
//                             "southwest": {
//                                 "lat": 40.70983606970849,
//                                 "lng": -74.0080328802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "36f91933da11e021d389793d2a9f1abfdf2434ca",
//                     "name": "The Beekman, a Thompson Hotel",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3779,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/100637454022597038865/photos\">The Beekman, a Thompson Hotel</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAZT6HL4Hvuph08OADgi1Z5uc3tO7JOF0zj6_mGHm2CsvG87toDq3740LWE32EYNj4KxVMYllw5B-MUktP0juL9KWNQGTHM5O_jHcTWF_qQiK2A7S8Q1kmtbLcjqZoK50vEhC0SE_XrdKkpgZMgdQlUdapGhQ-ahbPF_4IyhQrDXzzpAC0km7sNw",
//                             "width": 3024
//                         }
//                     ],
//                     "place_id": "ChIJq6r-exhawokRKgBzzPkn57U",
//                     "rating": 4.6,
//                     "reference": "CmRSAAAANf43vKdRfxjTbE8xThWtp_imOY5PkNfhOFZE6yZHJR-WgGlVm3Ghjne3ejw_4FwWlLMT6hh_JeqZIdLYcpbOVWjQBRDSWoqrDHiiRL22Hr1eL8i99YAVzJkZJqG6-3i8EhBQ_dWcpDrR3p46t7fW4W9cGhTOeHVay_0973aOJd0ubOsDHupQ-g",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "414 W 46th St, New York, NY 10036, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.761291,
//                             "lng": -73.991736
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.76267783029149,
//                                 "lng": -73.99035576970849
//                             },
//                             "southwest": {
//                                 "lat": 40.75997986970849,
//                                 "lng": -73.9930537302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "453a14393e69abc039312d4ba71d86165f660ffe",
//                     "name": "414 Hotel",
//                     "photos": [
//                         {
//                             "height": 2048,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/114986206626718888907/photos\">414 Hotel</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAteavbJxBJQJhqZOwwCNM1m9XVkhWQkC2Q6Q__8Gq0zXNEGuaIbq9Ub6YUq478KPlmgGExTWwYavJg0spgDfv2kBrAQmZVc9TZLmG8UIf8bSsuuCPCNIawQq8YwIQqdRFEhBqPyCNDUtxmJxOyQxD1spdGhRarRMKhtyp_g_XoZo6ptko0GTBBQ",
//                             "width": 1441
//                         }
//                     ],
//                     "place_id": "ChIJhwBD1VNYwokR7eKcshuz914",
//                     "rating": 4.7,
//                     "reference": "CmRRAAAArX3Eyz4Kh08VjfIXTLk3Pa1oZv-qgonrEebQjF2vi0tkYkhX1rA5F-xg6hr7Sn_kmqLlQ3jI5xqMe4DYdKJJEoobtShH832_an0ieJKT23NqQZ76ParYswO4FUHtoOKbEhDNWz7NSjhd6fpSZi0xf7e_GhQyMM2X8RKXP7lCygJ_JCE5UZEXPw",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "218 W 50th St, New York, NY 10019, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7615112,
//                             "lng": -73.98495249999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7629785302915,
//                                 "lng": -73.9835366697085
//                             },
//                             "southwest": {
//                                 "lat": 40.7602805697085,
//                                 "lng": -73.9862346302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "6a56d64e141b69d2d6727d6bb41e92e52ca16eeb",
//                     "name": "citizenM New York Times Square hotel",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1365,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/114246030817058217396/photos\">citizenM New York Times Square hotel</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAome5JlSttxkO04TjC1oZsgflE6j-JWBKEf9zkRdVPy_q_Uo9lAFkkcxVh8_23nBUksYhc5l1aNr9MzL1JYf5jHkfM2EjtMhu31Ke_YK6VUQ30wIHeqMsiUWOBrILjs85EhCqWcw2JOG5Rk9Ub53BSjffGhSU-sy1r-8GRYROOu2yzUpkFaE0nQ",
//                             "width": 2048
//                         }
//                     ],
//                     "place_id": "ChIJD7NlQVZYwokRUIDluhjtu94",
//                     "rating": 4.7,
//                     "reference": "CmRSAAAAQGQ6biXrMJKnNTcZrBSAoOmjjo80zc3uPXSzCgHcoT6Es0qv0H54eHgma2dWGnctYhFPMlGs4Cm9iOttev-4dxa51jjwp9qm34qgr-FpvhBjbBA5x8Njjak8WhfRIvXwEhDDqdCI8JsV1G9D0AlNu_lfGhSkDo83zbfNVvWYZgZ7QMgX2nFl5Q",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "25 E 77th St, New York, NY 10075, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7752738,
//                             "lng": -73.96339429999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7765727302915,
//                                 "lng": -73.96208236970848
//                             },
//                             "southwest": {
//                                 "lat": 40.77387476970851,
//                                 "lng": -73.96478033029149
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "b763e7f0f6ebbb322baf797ca8bd88c4fd04c674",
//                     "name": "The Mark",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 864,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/104489417862747578827/photos\">The Mark</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAQiR-I9t037XulZq1wFhaCVBJOpdIcymmr8kVz6fe7BwjtHcXNzxTCwRkEH9xMOSXTjcCutDtw9k-xsN3SSyvSY81Vk1UB8ddG_Ubcyqql72lCBJXofterNT64Dra9RVSEhChAsP7-go3CMqp7XusO36cGhQRhIcLqOrC_N5i99FgAmXSmzYtKg",
//                             "width": 865
//                         }
//                     ],
//                     "place_id": "ChIJXYOiRJRYwokRm1i3c9R6WDA",
//                     "rating": 4.5,
//                     "reference": "CmRRAAAAjwnOmvV1wJTJdO0ByCyEFdfm9MmQVyhAKdJ_X9gH7FaDH-z6m4ZSuTxubAxIQhhw8xDPGXBVdhIePS62N_qT0uLwkBthxqSPi5bRmcmXR3Bu-XziJn_3quyYwPIXAbxxEhAtW-Wti7sMyEmC33gq823JGhSvkUKIVHC4qevDclK3lRg51aEfzg",
//                     "types": [
//                         "lodging",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "152 W 51st St, New York, NY 10019, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7614289,
//                             "lng": -73.982458
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7628723802915,
//                                 "lng": -73.98116736970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7601744197085,
//                                 "lng": -73.98386533029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "ecde55dbed8632de25e6ccaa839f2818c1a4063f",
//                     "name": "The Michelangelo",
//                     "photos": [
//                         {
//                             "height": 508,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/116054554057797543543/photos\">The Michelangelo</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAi8XERHMy4waXszkXyGMXey0M9MhlMMHKdo2ZDKOFF2SYzqncInKoeUElEMDGoUAMnic6W4JkdPvCO7LFcZVo1v4zDwlvA7FJoZ_J6n9nuoO8vmoaQ0RDr2aGTFquykFGEhAsD6L21yvTB_nqjmqxQEO3GhR_0PPPdRboKi1Xe8GTwKmlifVQUw",
//                             "width": 507
//                         }
//                     ],
//                     "place_id": "ChIJb2q-m_hYwokRFLZdzzJP3mo",
//                     "price_level": 3,
//                     "rating": 4.5,
//                     "reference": "CmRRAAAAVJ7lOv469ZS95mX_UC2BtgfHOvUIEQ4TcKAbE_yQhzEgP3B31uR5mzyhEDaSDAMsWXty5QAqtNNqrRMg4VZe2JCla0Fv-5EdMiws4W9vcrL8r3u5fikasjeECM6i3f1REhBCcVd9qMQhUUyaO6albm-vGhTpPhMNnFVdKfYAScUUCYkksghMQw",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 }
//             ],
//             "status": "OK"
//         },
//         "restaurants": {
//             "html_attributions": [],
//             "next_page_token": "CoQC-wAAAIY85MQlZIUpuXKuo_3omQMR8Nqf0ME7bqNc7G8FK84t_aMBQELOWylmLlbGXjRHOg37TAhZ5UmTbeSOWFfXG_xNRgu60vlkwAbWK1Osj3pWxTvd9kHvXYp8nezL0I0lpbhy7s7Cf9JRRyRDmfDcoE-qZK2kT1QFAYXhA3gBauCI6dd-I6mGXMVhKDOJTO2BjgiqeHtZ5lAall31-8DAkYQNnuvsPgsVNbyBMvjqNzkmoNnO8iaViwg3ULSTcc0bbpzK98y4Aw5mMhowyz3HXz4WyytYylqAG-9W95DCxeAsOBvmRppMbuZi44t-P7gWTcqJm1sPLlGyDs5Rhc4-uCwSEBKQhGgSgODwFhhvfLKgaZsaFJ4dwEgppUFA3JkComfAN2KI5b_B",
//             "results": [
//                 {
//                     "formatted_address": "1064 Madison Ave, New York, NY 10028, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.777365,
//                             "lng": -73.9616659
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7786649302915,
//                                 "lng": -73.9601981197085
//                             },
//                             "southwest": {
//                                 "lat": 40.7759669697085,
//                                 "lng": -73.9628960802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "0d64df0c84acb57aa64c715ca9db61c921f885a9",
//                     "name": "E.A.T.",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 2988,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/107476303447076480406/photos\">Renée Avallone</a>"
//                             ],
//                             "photo_reference": "CmRZAAAAFpy8g8vCbLL8dbTRyPBxigxYK_UC3I3OWqgQrrSwXvLPzdibSmMG84E8mYmWtm-CSG8Idc63uu9p4GPjf7yULhIcejgx5JvkPCaJ753es_oQ3B5EDJH0w78MWjPoOjAGEhBdmDCe5FCDq0GPdlvqg12FGhSusa7Rb_qLYjyvuU9JObKUASu5fQ",
//                             "width": 5312
//                         }
//                     ],
//                     "place_id": "ChIJ8aQDcJZYwokRyPVIfqjkazY",
//                     "price_level": 2,
//                     "rating": 3.2,
//                     "reference": "CmRRAAAAnevpPr28mhTbG4fCQa0QQUkHt6yWKpifbb1hjm6KUwoq98LR8dMz21I-6RjqlrdZiVQGtFu0Gyq6fzukXNIVtIxg2aLIa1SbFy314hLUxqI6UTWtJx3Rli2jklqybl8hEhBhKqKualZlpJ8TP0IvMfsiGhTdXxBgsUTn20pzdEFFpZ9S9yG5gg",
//                     "types": [
//                         "cafe",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "42 E 20th St, New York, NY 10003, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7384555,
//                             "lng": -73.98850639999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.73987218029151,
//                                 "lng": -73.98709791970848
//                             },
//                             "southwest": {
//                                 "lat": 40.73717421970851,
//                                 "lng": -73.9897958802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "1f003ef829cecac6974e677cd495b3aa9d54594e",
//                     "name": "Gramercy Tavern",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 850,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/114166979717103053811/photos\">Gramercy Tavern</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAPIKYaFBLHtq_WSC9smllrPefuu5iOPvn6i7XcRrbvHZEq3fq37SUe7YACMbcL1YZ193LIKZATL7TIsyMFdIfLHR7tfqrlmSVqv-6fd9vzv8v8z3RXCBsEt1JuM_RIB-lEhD1Ch0d6p5oK6XilVBIwWHlGhSCn78LWIKGiiNb73PLw9UlmgOIfQ",
//                             "width": 851
//                         }
//                     ],
//                     "place_id": "ChIJvSQIgqFZwokRFYQbJdzceSs",
//                     "price_level": 4,
//                     "rating": 4.6,
//                     "reference": "CmRRAAAA4KgJXOg5FPU8nb_OqGp7gmWaTb2W4oABsA0VjmgNN4eCoFNs25XsPHRAf4WxQ6PXdYdoX2x7UoBoi4pkf7hEqXxIbgrCSCLINBctyHnmsTPCC6kkwJiwju7-GyFaHCGyEhAFyZtj43wcqdYboWofXOkgGhRDdIOHZQ3nMCWQ_W7O9OsB-uzzwA",
//                     "types": [
//                         "bar",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "155 W 51st St, New York, NY 10019, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7615691,
//                             "lng": -73.98180479999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7627827802915,
//                                 "lng": -73.98044491970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7600848197085,
//                                 "lng": -73.9831428802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "ad0a76f04ef4567ae3420ffa1881057b1f8180a7",
//                     "name": "Le Bernardin",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 640,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/103565644244028407440/photos\">World&#39;s Leading Restaurants</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAKGOCPzEu6Y5IvEFExMlWTNYKYat1-gUENAfc1hkNeoLwf0VtmZTRFIqoXaSlnWmWF0Tv3f6tGLbTS3nR-h7IXm2Mw5uaR--h3k_acHtclZzTGEuuwNncOQHtThZjHIvhEhAB5svKRccO37OoYVXhjcOxGhR7kNNMYBpxsCii1u2ECWEXAy28gg",
//                             "width": 960
//                         }
//                     ],
//                     "place_id": "ChIJVSKXkPhYwokRVgXdrRfFxh0",
//                     "price_level": 4,
//                     "rating": 4.6,
//                     "reference": "CmRRAAAANH3jIrtTWs5V-ioGCeXfmAtnCjjAqbnmhlNI3fIZD5JnTZehdUr_k-LnFlrz8gJCZ7NG-pbF228XcXrAo0jCeEoFf8kDZ3JsxF7V4voxR1HORP8qdfRsS5eiEYAJQEziEhCBXghNqLSY2XUXSZnSVkGdGhRGnlUk3H2fNPfC5o8WcdxlGvxcJA",
//                     "types": [
//                         "bar",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "60 E 65th St, New York, NY 10065, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.76677379999999,
//                             "lng": -73.96760220000002
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.76816568029149,
//                                 "lng": -73.96620736970851
//                             },
//                             "southwest": {
//                                 "lat": 40.7654677197085,
//                                 "lng": -73.96890533029152
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "0fcae36cae92d503d097a515746e4700e021995a",
//                     "name": "Daniel",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1520,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/111192969447456401878/photos\">Daniel</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAc25U2F-QHN2x5TD5dMAFDswcrEpOPawTDA0CVLvhHADBTei2PEZUSlvkJRI8zXcTjdOIAWWpJfTIlUx2cPcmZGd3Z4xAQtNLFeoptrrldB0dCbiCK6WrxcvRzGjBLRUUEhBhKbK4O22z1njMa2CqAWhuGhR9x7cIc0Qt9quE6ybbYFQM4ySsCw",
//                             "width": 1520
//                         }
//                     ],
//                     "place_id": "ChIJ09ZGju5YwokRXOcNC23JRwk",
//                     "price_level": 4,
//                     "rating": 4.6,
//                     "reference": "CmRRAAAAXFNkrU-YuuX-ZparJ7X78fDXsGo2iytVI5iCvJIge7ZPS0qOzo8AQ71NL-WUjW5KkxRBroJ28thR7_Stvl0J17YhAcLxl0OEoWDZkRR7Rbd9OKYcOrdroRhfb4Z4PYrhEhCEGhq7YJBH11b85GMp7_HDGhSmzcejwgJoUBGsHeZuta5ZEkAh_w",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "4th Floor, Time Warner Center, 10 Columbus Cir, New York, NY 10023, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.76822689999999,
//                             "lng": -73.9828591
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7695244302915,
//                                 "lng": -73.98126351970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7668264697085,
//                                 "lng": -73.98396148029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "37c516575be01a32ba25362a2ca116578eca3ef0",
//                     "name": "Per Se",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3726,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/113256681836649808083/photos\">Keira Chu</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAghv_odjFDfGdC61W50DObT6qrT4okSSYqX4bHdwGmtRupHf3oXynNGdNAhRvhOqoTnIyKgf4ALQN8Ol2PWdglflWpByWbbG_yLtfDI8HhYiOD3P9WbSfIKjoB-JI_x82EhBioAnfdfd9nFxdS7BhpVLKGhQ3lRRy6lxvyQUtg_w6-PQCvOK24g",
//                             "width": 8520
//                         }
//                     ],
//                     "place_id": "ChIJp3PsL_ZYwokRZYqs_40RJF4",
//                     "price_level": 4,
//                     "rating": 4.6,
//                     "reference": "CmRRAAAAvRHUmI39DILmr5BmMgqrgqMDdp9R-pjfPN3JMlep_PKFcz0dY60l9WlJLeRFhguHnOPuvUlVCVdHdWJyQbYERBM8qlfflge50rC-xpcfj02FXL_7w8pfxZ_4V-DL_CZ7EhBHKZoLkQXdPBkKirBgmXJhGhQI4ImiwPGimJ3yGmSyUhh21P3uGw",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "12 E 12th St, New York, NY 10003, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.734207,
//                             "lng": -73.99369899999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7355884802915,
//                                 "lng": -73.99232571970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7328905197085,
//                                 "lng": -73.99502368029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "343b062c1a8af2bd222c4aedad863f3f91391b0a",
//                     "name": "Gotham Bar and Grill",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3024,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/105563121448815745365/photos\">Kevin Guzewich</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAClJCkjdbb677ilV8-5GKTwv4ONvzL_PKAgTSXouMxni_RMROb4LCZwEQqaDRHEnb1pfWyzi7RFZkYnndpvAK7fPX9OXAyPWKPjT9A377FJpmvuciDK9fIoSoFwEd7SNtEhDmSJmmB3RrruSwE3rmD7QFGhRM0nyQU2sbKWnexqFU6wLuG5D6rQ",
//                             "width": 4032
//                         }
//                     ],
//                     "place_id": "ChIJZ72FzplZwokRmcA7CQzDMj0",
//                     "price_level": 4,
//                     "rating": 4.5,
//                     "reference": "CmRRAAAAx9pyQyoaKOy-hqZ9qfpDlfw2t5Y-UvX9WoEG17DXEekEN39S7iC7wiCMlWHFKwxe4FoYNpUyPdMn1eU3Yx1hhNeEbk1VO6fVk8UyOB8alyPDMViwU1dN4fWlLxLpM3xSEhDq8j8JN5tnEqzFdjY14FqFGhTFTut_GDUwg2LDRns35-FEKbGSHw",
//                     "types": [
//                         "bar",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "Metropolitan Life North Building, 11 Madison Ave, New York, NY 10010, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.741726,
//                             "lng": -73.987173
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7429459302915,
//                                 "lng": -73.98593171970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7402479697085,
//                                 "lng": -73.9886296802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "f758e0d7f68c659682afdb4b1c0749e7d3623839",
//                     "name": "Eleven Madison Park",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1200,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/102127816559576392189/photos\">Tammy Liu</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAhIwh9JJiBdd1oEg6br7zubqVaKYmtzWyEOmaNrexTkAv49FaUwav9BSGE2CaBCE8sbMH_KMrEW1hFepmig89ryHe9ARwlwplPWMBlRpdCxdWjx6u6OvqwMVx7PbVOPzMEhAFFXkQPX_eNpIwxbdea7PcGhQSJR1GzuPyROZU85Msxl2ExnSTKg",
//                             "width": 1800
//                         }
//                     ],
//                     "place_id": "ChIJEWbXz6ZZwokRLKmKrtPfVFY",
//                     "price_level": 4,
//                     "rating": 4.6,
//                     "reference": "CmRRAAAAwU8HP7wc71uiJLojolF0dMR8rIap0JmAR0F3eFAmQQNKmmrB0-CmkPgbKnzEEXQtlIzmyxIqNn0liW7MH9nr-EpUgOrZDlAVl23mS5N7WGq3wJhoHaxBr5x8-42rip6tEhAF4dbSQGyslrdYQQSQxcHoGhT3K37xz9EXxfQZwrRD3v7tDgee4g",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "41 W 42nd St, New York, NY 10036, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.754538,
//                             "lng": -73.98250279999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.75574133029149,
//                                 "lng": -73.98125016970847
//                             },
//                             "southwest": {
//                                 "lat": 40.7530433697085,
//                                 "lng": -73.9839481302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "bd46c7f5f2917d7af1352e17cdd3cbb7028eb25d",
//                     "name": "Gabriel Kreuther",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1365,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/107389134674463250002/photos\">Gabriel Kreuther</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA4RL8oz3Muy8gzt28LxFJPrN-kfA1urWiJ0B4utckPMNKjLIgS6vrPuMsBfm7NRTOr6SzknfY9hAHNMmU3tUBni1vYLKdDArCtjVDWrlSwlCsHy1qOOFtPcXF_0nvs38aEhBAhE5p4WLN8_60kbO9I1DfGhQusHKofUlerirr3AouHHeWckNZsQ",
//                             "width": 1369
//                         }
//                     ],
//                     "place_id": "ChIJw_TGEwBZwokR-zLts543O-4",
//                     "price_level": 3,
//                     "rating": 4.6,
//                     "reference": "CmRSAAAAr26bDqDhu0JhC7XJk2RVQApmfmlw_4QHL8zxf6iWbEOAKk6JJciczZqmy_VvB99ofjg_FvzXp7cxljWMZzsjVJK7gGAmrRlzeutBjwtyEG150xmLy5exq_kKCZrGDQ0kEhA9dR2ZMWVqTEKyWg0YlywLGhTuF9Z0guV0H8tMTWKU8BSlWeRRRA",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "9 W 53rd St, New York, NY 10019, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.761081,
//                             "lng": -73.976753
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.76242998029149,
//                                 "lng": -73.97540401970849
//                             },
//                             "southwest": {
//                                 "lat": 40.75973201970849,
//                                 "lng": -73.97810198029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "804d4d52a0fb7770d8acfe511699538ec5f0958d",
//                     "name": "The Modern",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1365,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/100489217038255503401/photos\">The Modern</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAv6VldtsX12YxPZFvXtCZd1pSrCcr500tEUaDOt5eKMR66eFr9la-o4jQQXUC8z_N8YIBWCEl_o02Xh2RbJqm8LkXJi7docIiCcLa4tnaLRAP0tLJzaXtUWXQIh_Na7PNEhBbCt2iaws0hChY7TVyjUg2GhSNkGoC4aU73e7oEyH_5kw-6S1zHg",
//                             "width": 1367
//                         }
//                     ],
//                     "place_id": "ChIJMW-gxPtYwokRzDlnsRgq9rA",
//                     "price_level": 4,
//                     "rating": 4.5,
//                     "reference": "CmRSAAAA4BEWUQFEqYzZsyPIdBLI7Q63g7AGel-MTUz4xAxO8ch0lB8YVYI8nn-jvR7FqWu3ECZYr4fAjfEamE_AvCrP65k04VH74meKbfTCkNAf_G-7TnivPam2C-NRKCyxwJ8CEhAt8uSZG31fXGYoMuzOTENHGhRnPCQZeJBTOpkcOxbeng7u5NClLA",
//                     "types": [
//                         "bar",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "47 E Houston St, New York, NY 10012, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.72464129999999,
//                             "lng": -73.994739
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.72606958029149,
//                                 "lng": -73.9933627697085
//                             },
//                             "southwest": {
//                                 "lat": 40.72337161970849,
//                                 "lng": -73.9960607302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "257b24156e15fbabfa39641fe56fa6462605e3cc",
//                     "name": "Estela",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 4032,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/107231714396617814703/photos\">Ling Li</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA9D7vf6iCiLL1hjVrfhko7VSBxKb2VbqPRN9Cfcg0xzIEM9YaX_opO_18y1jhu5H2XmbOYpy972o0FVw94V7DPRX_lJqaZdkV4kQ4ur9JzB3YjCk36WHQNnRnFFNWH0q6EhCNxygnPg45d3_YkC-hINMGGhQ8PZ0K7mmQ8q3katbfnAG3VxurxA",
//                             "width": 3024
//                         }
//                     ],
//                     "place_id": "ChIJf3f-f4VZwokRcBCEciTOGRQ",
//                     "price_level": 3,
//                     "rating": 4.5,
//                     "reference": "CmRRAAAAz5BgMlfCw0EeEeOXGD3FJ5wODigXJgSL3SjRvMFWbxW_LKs5dZf2a7dHrJJyADPGVbeeMFbx6Jnj6ROMGFuZI5eHBJthKeENMYs3Jum6P8T7qCBBs-wq-JlhQOZ6mgCoEhDAQIDWZOc6d4-xAN2SKRZcGhSur8CkPThKQw79GFRYrUmp3GsCTQ",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "178 Broadway, Brooklyn, NY 11211, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.709819,
//                             "lng": -73.962467
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7112116802915,
//                                 "lng": -73.9611154697085
//                             },
//                             "southwest": {
//                                 "lat": 40.7085137197085,
//                                 "lng": -73.96381343029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "cc507a5029419584b2061f374000114cd291d84b",
//                     "name": "Peter Luger Steak House",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1268,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/112110162861336990395/photos\">Ahmed Allam</a>"
//                             ],
//                             "photo_reference": "CmRaAAAACl56wcc906ffcaxkcMwkzOzFeKgC-mg0cOKsZgkbkFqo3jtUiNsulJGhWq99PIK74SDq20TP0eqA2mZYzj4Kh7V73LQHSrh6X-_QHCLizx5FPmOWDmPppuwp16LBukZWEhAWZEPwVsaebd4daOtMZ-izGhRuwNZ0tkhsBOgWWaORKMYpIqRK9A",
//                             "width": 1242
//                         }
//                     ],
//                     "place_id": "ChIJR_bK295bwokR8gM6QgEdmkY",
//                     "price_level": 4,
//                     "rating": 4.3,
//                     "reference": "CmRRAAAAswEG7wjzjdNpQZdtS2EK6qc7pM60I3reiVpRhR8MTp_Yef6UAI_8L5VuudwPrMvNl-Crpq7ikBCwG6_yImW_BBHUBGcyqvOWp1_Gij0Z_5CFa0u25Nu4Fl1VL9L8FMW5EhA5N4eXqKEZIMkz335kC_i6GhRjrqmKiPWsJ2XwrAi7OKrNcgNfPA",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "240 E 58th St, New York, NY 10022, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7600624,
//                             "lng": -73.96556629999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.76150593029149,
//                                 "lng": -73.9641475697085
//                             },
//                             "southwest": {
//                                 "lat": 40.7588079697085,
//                                 "lng": -73.96684553029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "ec27c4405756c88482516d57ce03739068355b4a",
//                     "name": "Club A Steakhouse",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3456,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/102400989400172138580/photos\">Emily Bakaj</a>"
//                             ],
//                             "photo_reference": "CmRaAAAArSUmhYZElR2cqNh6Ubcj6Km_ey0boOrSsGCKXJZBFsjA8WiCA9Ts0BYzSl1ojN1R1k6H-5Jwq06dFOTonKLcbBatBSiEMaGWsiz1Sxh3--mNqxGK7AieT7ChaJnexwIVEhDWCtN2RwTBjWOifsnv0T8tGhRbsbhLQXGKrdwlfdIULkRUu9tFtA",
//                             "width": 4608
//                         }
//                     ],
//                     "place_id": "ChIJhWkA1eVYwokRPKlaxy81SAY",
//                     "price_level": 3,
//                     "rating": 4.5,
//                     "reference": "CmRRAAAAhOMWjRg8R3K-SHwirrN6Ln4C6CNWl6ICkGWsPP40hxsoIbyCtN6VyU2CCcGV88pIPs77EixD8DstKYXCK43J7QztfgFJC1DIb3WXNy-0R5xlwINSoIUOghM6yWW8kVfDEhDbdHfYjegT4fwCjRoF8BcvGhQX9MW3pVK07cZEsk16Yailc1Omig",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "1241 Amsterdam Ave, New York, NY 10027, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.81004710000001,
//                             "lng": -73.9584781
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.81143228029151,
//                                 "lng": -73.95721536970849
//                             },
//                             "southwest": {
//                                 "lat": 40.80873431970851,
//                                 "lng": -73.9599133302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "b605d46f3011e337f2e75e269bb6b4f8d0853468",
//                     "name": "Flat Top",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 2988,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/108230965180565314385/photos\">Qahtan AL-Jammali</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAgxC_FNJmaZhkTWYxpYuO2Q3xVAyKPTOWj1aPYQLfK1aE-Raj5ORFaQ_2KwMFG8ahG-LZtuD8PzDXRwtC8A1F1B4d1isMqc8srGplMPoRov3stCTMesuDlGR1wAoHzDkxEhDnJYa_0zFrR6785hIeC8ywGhSdnc8AYS3Z8pwy1U8sjUNZPrkcKA",
//                             "width": 5312
//                         }
//                     ],
//                     "place_id": "ChIJBWhERBX2wokRAkCnvxPY9lw",
//                     "price_level": 2,
//                     "rating": 4.3,
//                     "reference": "CmRRAAAAo4Tz7EEVrnJgwPN7G27dEjWivz-cFvpDgBGDw8nOc2xCg8-8b9NPIvBhFyzLCaOwe7UEsEcJiPiUPXPcUbBfgSwlRRyPly-sdhqkyVba1e5XjBxs8SBXuhkxlHDAqfAeEhBIOIRIGJz460PUrdpNPlfkGhQTnSbbiB_cTetloYQo3r3oqrPmvA",
//                     "types": [
//                         "bar",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "127 Orchard St, New York, NY 10002, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7196729,
//                             "lng": -73.98968090000001
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7210212802915,
//                                 "lng": -73.98836696970848
//                             },
//                             "southwest": {
//                                 "lat": 40.7183233197085,
//                                 "lng": -73.9910649302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "688e7118802e5d647427780258d276023ccde055",
//                     "name": "Russ & Daughters Cafe",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 360,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/116657897098896826230/photos\">Russ &amp; Daughters Cafe</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAwIcOD3g2-OCcln3a4h3tLwx8nxiZdKGLO-9tCQwXNOcb6c-pkOlpZTkg70VOviFb1NVJycNydH4RgBMKWBZMupfyyr-vtlLHEjIAq8PjGxEQZXsRp4RqfxoVxcYCNVAhEhC4-mlObpInfB641taStbpOGhQB72UIpK_D9rknObWi2xqDdymoQQ",
//                             "width": 357
//                         }
//                     ],
//                     "place_id": "ChIJ53yq2oZZwokRqIHSP4qZT3o",
//                     "price_level": 2,
//                     "rating": 4.6,
//                     "reference": "CmRRAAAAGLA7i_zcGW0WamKdghwkD4J2MF4BoTnO-f2OLMRjEEF2yxq2Vxer-08x8_4j31Ac1qFGoTNpSwyYuc8IBhacVOEOPnxuX3hk3pTDYA2asScYR56cjdmpXHLJzpZQh1u7EhC8NT2ySetXvc_WRZXxG9w9GhTB0YRoL7ZBhYduWlByYKVdeKS3-Q",
//                     "types": [
//                         "bakery",
//                         "restaurant",
//                         "food",
//                         "store",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "142 Orchard St, New York, NY 10002, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7200208,
//                             "lng": -73.9891633
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7213831802915,
//                                 "lng": -73.9878601697085
//                             },
//                             "southwest": {
//                                 "lat": 40.7186852197085,
//                                 "lng": -73.9905581302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "c067408df4b60282a8b470813e7581b7cfdaceba",
//                     "name": "Wildair Food and Wine",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3824,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/110683553841105199970/photos\">Oskar von Hauske</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAwMHnGJxyLwlu63uEor-Lg2E-wGs4xmQlxlbFdqWGJB6Mwy2J99WMdf6fP74YPkjO4FogyfyGur5bzq5FhQEipP_4qSmCC1YzgdKstMFLc_PRGdHiF-51JdqkjfjF63GPEhD6k7HqV9_N14J4AZIVVJZhGhRTGKpG82AdCEh1QLOogjGmp8wt_w",
//                             "width": 2867
//                         }
//                     ],
//                     "place_id": "ChIJfZsx0ClawokRCNMYMdZ_smg",
//                     "price_level": 2,
//                     "rating": 4.4,
//                     "reference": "CmRRAAAAA9ZfUG4f6xofxjRyrZPsv4Bsp635ViWxJSzempWtHuDh5bTdS7lD1g2A9r-tt3YfHZXT-okgjraG4gNsFtgLdFQ1BS27YPs-p-irTrHYPMlzbndWTaVRG3XyY5MeRR_AEhACRVYhcju7lUd3aXYpAvo0GhRrEaTTyxGWmFaoVfQOltvbAFZYEQ",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "35 E 21st St, New York, NY 10010, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7396162,
//                             "lng": -73.9883565
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7408515802915,
//                                 "lng": -73.9870568197085
//                             },
//                             "southwest": {
//                                 "lat": 40.7381536197085,
//                                 "lng": -73.9897547802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "400cd12f069856ace98966a9b6cb1f300b7c66c0",
//                     "name": "Cosme",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1296,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/105641580144879585384/photos\">Cosme</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAOHXKcBFxMgMYDvWdCz2CgaK6AiEFQOy12UbNGfE4RTgBUZ0TTZzG3DKIxJRM_vaK-XslPhxyEkiM_FCcAAIZqqbQF5z3pRqMaOpRqw6RKntLwSNPavEn0v9YrGTVkMs-EhBuhOhZtwU-iEgPwXjMamBVGhQOKWgVC7pdWzDQtBW_c0w4RGaifQ",
//                             "width": 1296
//                         }
//                     ],
//                     "place_id": "ChIJT-gYZKFZwokR7O8LLYuYMjU",
//                     "price_level": 2,
//                     "rating": 4.4,
//                     "reference": "CmRRAAAATCNJAzaSG7tOXJJkMHcJSTf9MN6RN8WQoyDfmv8yXMgBqtNabIE1-H7GgGs3DBdpUkyoa-0CCMUZwFXIahus00lKfUPMz98xuGEH9-T0lsSDzan7S23LIIYCxtHSBDgGEhDtUMuY4Fa-WJfIbkTSCPblGhRmtT2Y4Yag_cgQiOeSu-GN01_oFw",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "10003, 119 1st Avenue, New York, NY 10003, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.727263,
//                             "lng": -73.985845
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7285625802915,
//                                 "lng": -73.9843767697085
//                             },
//                             "southwest": {
//                                 "lat": 40.7258646197085,
//                                 "lng": -73.98707473029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "084a0fcc749a6625e7b0a5aee103f3ab1d84136c",
//                     "name": "Oiji",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1318,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/111173771909374722776/photos\">Oiji</a>"
//                             ],
//                             "photo_reference": "CmRZAAAAR3G46FJ-QBzpJWKrMK0QrqqzuC_Tbola-Jcrt6HSXEYf4AZ6s8-2zinPCWwPndpjkkTaTArzbLfsjjncIzIyKjh9-WKJLMNVYVw5xTrdGWtk549rSwTy5qPqTx9UMqxMEhBtyyfkLAToTLKdr4Iuk3N2GhRS7o2CJFoX0SzvQJ4V2VKFLVeQog",
//                             "width": 1313
//                         }
//                     ],
//                     "place_id": "ChIJ9_VJHp1ZwokRRhe-9rLmBb8",
//                     "price_level": 3,
//                     "rating": 4.4,
//                     "reference": "CmRSAAAAeFK4CCUvR5GwLAFy7pg4b4EPX6zklUqMcgRde_rXxjkVRtiWoRCy3YOFWqP-kqT8xSYvhYFs1iAvlgTTcyR97dwHLlNeIskv0tGHfiaQdarT1_Nn5kSlZiqo9tct5mq6EhCRQBqRsyZCUF1k0uSpNY2rGhTSpd61AANBo-KLPP6avlY0PIVlFw",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "131 Sullivan St, New York, NY 10012, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7264898,
//                             "lng": -74.0021771
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7278729302915,
//                                 "lng": -74.0008660697085
//                             },
//                             "southwest": {
//                                 "lat": 40.7251749697085,
//                                 "lng": -74.0035640302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "f91d4f3c33f0cb773066614d78be838f6ed5eeb9",
//                     "name": "The Dutch",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1366,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/114365317263368146080/photos\">The Dutch</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAT_giYIXChwn67p8vXFPfOo4VNryT_2wpnfrzoIrwGm3TjPwcRX7zW5nrSFuP1l9IG3Fq5rrI6aPDr3UOQWonrqVthwGxSYjY6KXsOxRPhurFS6lo98XNbbRODWV4mKd2EhBo2-gyN08yCDIhIADvfPLbGhQB9hNk2pQZPwoZd6GDxq-JeqZ-fw",
//                             "width": 1384
//                         }
//                     ],
//                     "place_id": "ChIJ3RB9uI1ZwokRxCJXW-HpYZI",
//                     "price_level": 3,
//                     "rating": 4.1,
//                     "reference": "CmRSAAAArwYUKhvyTOTZuX2b77MSZJJ-89qiLpsZWXYK3hWxqVgdNfzJc9LX7_Nkemg9Dei3g0FvE8yRkL5SXtCzkZSZarI8YI8ld1TtjX1O5POOGo5XfhwAyiznY9944kg3xUtjEhAiuvMAG3wG3yPpY_wcUH-0GhREPCrZlOCko1St15Za2E9cUfWeIA",
//                     "types": [
//                         "bar",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "355 Metropolitan Ave, Brooklyn, NY 11211, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7142631,
//                             "lng": -73.9560616
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7155400302915,
//                                 "lng": -73.9547475697085
//                             },
//                             "southwest": {
//                                 "lat": 40.7128420697085,
//                                 "lng": -73.95744553029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "6d5cb18b6dd00dc9e4d9f6ae0f6c46da26baac0c",
//                     "name": "St. Anselm",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1365,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/104111246635874032234/photos\">ZAGAT</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA_RSEtv7u4V7Wqhwf5yYoNKALecD6NUOkllAuVqPFKkvZ_OIQyvjAtpY1VtkxcYhh9yMG48wW3_3mM6A0NrDN7JCaycb3HV2ceZAAcYhoF_mpQuWHyQ4VYk1pE1r-lFj4EhAbPWuGbWbG_UXJKDhgY5-cGhQavUDLJamB18qhXgJf6IkUA07LQQ",
//                             "width": 2048
//                         }
//                     ],
//                     "place_id": "ChIJc3Sn6BNewokR_RkenZvQhlM",
//                     "price_level": 2,
//                     "rating": 4.5,
//                     "reference": "CmRRAAAA3R3TWBPlQ95822E_B0_3Rgrfm_3yK6I_CFjBgedGMI-E0rS-ErQgTx7s5tLRcWXobd5qCA8bnmpFpcPuQBkhQ61YnDX9p5DF1wXxnDmtdYiI-9ojSTHi4xBTTea3RC7IEhDZo4fqutITBOttxgCwx-g5GhSAbk2gy8DzbhAdiWq9YHGpMCLlkQ",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "69 7th Ave S, New York, NY 10014, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.73218879999999,
//                             "lng": -74.0033937
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.73357833029149,
//                                 "lng": -74.0021448197085
//                             },
//                             "southwest": {
//                                 "lat": 40.73088036970849,
//                                 "lng": -74.00484278029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "7e3f519a691dea53fde5703d169ee2fa6abeda4a",
//                     "name": "Bleecker Street Pizza",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3024,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/107861206092985225681/photos\">Chris Gonz</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAURFvJAWdqnPHCB0lwIOi9cn4VOwrZ-HrUI5ANuI1QZp7j3Y6Nnv-LxgZpZKEvVGLNRI69sDfrj7B9XgUS1RVIPnW2xU39lrTPhgAWYfv5OqEhVu7kLt2uRIRtYT4oNRhEhCyoZAwO-UEdXhss-uV-yAkGhQL4UZjNSCiVTvAXJX8c1i4CNu13w",
//                             "width": 4032
//                         }
//                     ],
//                     "place_id": "ChIJrXXKn5NZwokR78g0ipCnY60",
//                     "price_level": 1,
//                     "rating": 4.2,
//                     "reference": "CmRSAAAAbaGWkI7oq_vRjACNgIOiadWbu4OnNpAAaSHZbxa3272RHjiMjYVq4Mq5XOGEwcB8V8NhIMgyF9Xwys49IpshBH21EMEGAFg2T-T9lZzx7Q2ffTsWrHvxINVD7jUEiYgnEhCjpQd1F9cO9ACtu_h4liyIGhR-rf0NTW504nXB3SBJ6zJ9dBb41Q",
//                     "types": [
//                         "meal_delivery",
//                         "meal_takeaway",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 }
//             ],
//             "status": "OK"
//         }
//     },
//     {
//         "city": {
//             "city": "Brooklyn, New York",
//             "city_id": 1,
//             "lat": 40.7128,
//             "long": -74.0059,
//             "visits": 17,
//             "key": "1"
//         },
//         "tourism": {
//             "html_attributions": [],
//             "results": [
//                 {
//                     "formatted_address": "1000 5th Ave, New York, NY 10028, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7794366,
//                             "lng": -73.963244
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7802527302915,
//                                 "lng": -73.9613772197085
//                             },
//                             "southwest": {
//                                 "lat": 40.7775547697085,
//                                 "lng": -73.9640751802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
//                     "id": "f732f202150af1f14ae8a057a1014ceea6b33fc4",
//                     "name": "The Metropolitan Museum of Art",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3000,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/114083495869686301956/photos\">Steve Raby</a>"
//                             ],
//                             "photo_reference": "CmRZAAAACcJsFqdfJDMy9o_S4O6scrx7bxHirB18F2ytv_ne_5CdbYcxDJ_-aF6-0-U9nBv2BBSDp7gDYEUvh3M_jz55B8l3_Zfg7BJ2Yjs3FYK3vUPmkux0Cs82sG3msLYfeTzJEhD3BZFPIKXtYR49gxiOG6v4GhRzxXXxO0eW4Oa31LeGdBTalQQa0w",
//                             "width": 4000
//                         }
//                     ],
//                     "place_id": "ChIJb8Jg9pZYwokR-qHGtvSkLzs",
//                     "rating": 4.7,
//                     "reference": "CmRRAAAApXn1jGJENjIY8xlg0eExJqp17z4G15ZPxvo0OBFpm0MFoB-2MMAd9UX2ehmrBiSp_wdAMhWWxPyARUAl8F29KB9rbiJbZjkQW5JfQldEGF-EbN17Fe1tuBjXhAQmbMaTEhAde9skYalEjI4A00XhVgdTGhSKc1HNOMpbnaecrx8Vyh1bUNGHNQ",
//                     "types": [
//                         "art_gallery",
//                         "museum",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "350 5th Ave, New York, NY 10118, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7484405,
//                             "lng": -73.98566439999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7497074302915,
//                                 "lng": -73.98392536970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7470094697085,
//                                 "lng": -73.98662333029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
//                     "id": "bc232d2422e7068b2a2ffb314f02e3733dd47796",
//                     "name": "Rob's House",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 2988,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/103456530252801066707/photos\">Bobby Davis</a>"
//                             ],
//                             "photo_reference": "CmRaAAAATO0FJwRg8oRL78unWhaAI33Xaj-OTVx-VE9DT-WgQC85O9n9eJmmKTzSfN_NXraDatE-W11uYJj_d_sZvYGf85iZHE82d8cqpOTeej6LWIEiVE3ioVO18UBXFmbqSmtjEhCzY824hpvJ9ykoGxc93A-tGhRzyd2n3UPMqUuh_itLNrjDdtvmyA",
//                             "width": 5312
//                         }
//                     ],
//                     "place_id": "ChIJaXQRs6lZwokRY6EFpJnhNNE",
//                     "rating": 4.6,
//                     "reference": "CmRSAAAAAEHQa4FrQIqxRHiftsuo6aztlJvKP7EmR4n2dJFG18ZCBKcUKSotFS32e3HoGZebFFK-Zmv7tvjSuDUDRyCPQu3xR1IxmGW29UC9yjxsnPkqsP3LZBurp4zFyESz49NYEhDO8kjbYDUZXc4Mf1f40TsfGhQiPqRGBRAJTaJcvkVDxy_OwiymbQ",
//                     "types": [
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "New York, NY, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.6892494,
//                             "lng": -74.04450039999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.71823,
//                                 "lng": -73.99872490000001
//                             },
//                             "southwest": {
//                                 "lat": 40.6795892,
//                                 "lng": -74.05975889999998
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
//                     "id": "5a0d7e67078e35af0c456a277df9ffba7c1e4da6",
//                     "name": "Statue of Liberty National Monument",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 2368,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/102768924365449147760/photos\">David Edwards</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAs-IvLtUTYoeR-5Qd4BN7h6SYxX2Bbork9T1Jlb1bC_ExgMaEnF2RC3QzM7v3oKipUwV12JZAYoi0LLWcluqztIMjMOhyvbfMs0qk8aGEBPGTYPGxVMtQHBJTcgilYruaEhBTQFDldHHH6zJt9Qkm33LeGhTXP157PRSBF18S8XhrSAwYmwhMIA",
//                             "width": 4224
//                         }
//                     ],
//                     "place_id": "ChIJPTacEpBQwokRKwIlDXelxkA",
//                     "rating": 4.5,
//                     "reference": "CmRRAAAA-w6hEnAH2c9hs_u7XJp02D0i0K8YhR6Nb9EiOmMwf1eXmJOAQk3adMPhpWAhGQf2iDDjUg9JW0BL9yajVVHHG7kWOj08sChlklyfZ54DHDo2uNGRQEnQenoSOCzGljHfEhBZmXk5FoSDDTIqA7AM0_k6GhQ2dIjZmlJ3phk9oXSYlJi7KOxv7w",
//                     "types": [
//                         "park",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "180 Greenwich St, New York, NY 10007, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7114836,
//                             "lng": -74.0127254
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7123200802915,
//                                 "lng": -74.0104553
//                             },
//                             "southwest": {
//                                 "lat": 40.7096221197085,
//                                 "lng": -74.01348209999999
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
//                     "id": "375f41aa9a1bff7c3766d2f5d80f21bd56487236",
//                     "name": "9/11 Memorial",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3648,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/103145373467458643970/photos\">YOURI ANTENOR-HABAZAC</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA3w1hz0ycBkL9K5ToItSw_vHm6QA4hFGhpiZlB06YuqCar8L2gyE-9Gdc9WrMMuTlSEWYqALo7nabR2G8yKy9fsFniAgLPyv9Pp3CqDoWl6vloFsJ9piRKaA0fLO_3ZVcEhAVq0sdXYGK-sqMJP_l7ZTkGhSx1wOy9TypT0BfKZ7xNqUCfqQdeQ",
//                             "width": 5472
//                         }
//                     ],
//                     "place_id": "ChIJRcvoOxpawokR7R4dQMXMMPQ",
//                     "rating": 4.7,
//                     "reference": "CmRSAAAAiSJ5m5XnnxfvcA3g9fIEmmcrCsG_zo2J1WQft46mJ4jVe8CW8Z8-OkRThT_TiNatpXddNRRnLKMo7UnvrsJ1uMw9hxEq1SrdzMqZh-U3fieLMVjaCSeCtsTVTxwdddelEhCtpjyKnZI9YXrt-m1sL9fiGhQTldh8I1cJ-5qxB0x43E8zIC7WrQ",
//                     "types": [
//                         "park",
//                         "museum",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "New York, NY, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7479925,
//                             "lng": -74.0047649
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7588822,
//                                 "lng": -73.9986873
//                             },
//                             "southwest": {
//                                 "lat": 40.73290899999999,
//                                 "lng": -74.01141530000002
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
//                     "id": "72dc79d023feec77725d7336e7c46fee27805319",
//                     "name": "The High Line",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 667,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/109002135839164232632/photos\">The High Line</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAZ-zOh9-bdBiYmY82TMHQK4E7sdKqwv8y2fPlo3tl2W034NGZMkla_2ubXPeZS3aS-Hqc12mGc5PyO77otENLPu8eJq5Wa4TWsMfVwDIAKVLrJ-L-ajPICkrbD-JY0EyUEhBvfyKAouNZS9Cih11teJpzGhRvsWo4aQfXb3yF5aOfcRZ5Ji9JbQ",
//                             "width": 1000
//                         }
//                     ],
//                     "place_id": "ChIJ5bQPhMdZwokRkTwKhVxhP1g",
//                     "rating": 4.7,
//                     "reference": "CmRRAAAADf1eAqNkPhFyFKRdf2turfk6nvKFBNh850g8817Q8RAF01_23XTMAU0qcOMnjpUwcAtXdWHrsObnA4Agbe_vQzRolO0b81sOEh-QXHK80VBoaER0uotpnm5-REXkUQoMEhDIUXNa4zaob-iBMoxFl2ThGhSvOor1xXpQf2SwqlMC_7u-0EOvMQ",
//                     "types": [
//                         "park",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "405 Lexington Ave, New York, NY 10174, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7516208,
//                             "lng": -73.97550199999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.75289618029149,
//                                 "lng": -73.9743004197085
//                             },
//                             "southwest": {
//                                 "lat": 40.75019821970849,
//                                 "lng": -73.9769983802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
//                     "id": "3457c605bb2ffc2b82b6b2fb097df9169c4e61b9",
//                     "name": "Chrysler Building",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3883,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/105837059446969736756/photos\">Dmitry Burstein</a>"
//                             ],
//                             "photo_reference": "CmRaAAAASoBqiC3Xee1clCRKkXjSSLB9gkmt7WKCF-ecqaWmkkaVIOfCqRhRO44txsBXbhcK1vvnZEazOOggX0L_5Qa7sZRzi35x4Dr0hdDnIM2HktIjPLI3lFyxg0uSFbDky6s4EhDkh_Vkt6BBS9W7zJ8wvMMfGhSdir0WmNXOMF6htOhZ7GBvxbFdDA",
//                             "width": 3879
//                         }
//                     ],
//                     "place_id": "ChIJeWPFRwJZwokRGD60OOo74RU",
//                     "rating": 4.6,
//                     "reference": "CmRRAAAAjaOOu3V3R3pryEFPCDP3A80K7yMub-ga3RYsb_hLKig7aHpGmTlBBbvu3lG1roDRSj2m7Xo1pCGx79hXl80pdXzuz0SDd_MCwGfW1ajk7NiboySGd4MPdKht1ZtV6epNEhDKZ6gkZ-IZNxj6Rc3Md5K_GhRJ40COGbZRfqtkh5XmirkV2Wp7SQ",
//                     "types": [
//                         "premise",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "Central Park West & 79th St, New York, NY 10024, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.78132409999999,
//                             "lng": -73.9739882
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.78391664999999,
//                                 "lng": -73.97120815
//                             },
//                             "southwest": {
//                                 "lat": 40.77880165,
//                                 "lng": -73.97695955
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
//                     "id": "d9dd2c58ebb5c5cb4d00b28db933b7e220a34b5a",
//                     "name": "American Museum of Natural History",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 2340,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/102790079208893657393/photos\">Jerame Cramer</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA5tzBiA9dvH9qd18nakeYxk1WgLtlhvODB_cMNbOdYs1Z-uutk6EL2spK2GBJvl3Hedb0X_K_c1jmblcX-eFAgZ69dQ0jfp1ffd7y3oZr1CEN9Cs7sw1pzwJK62Nu0Q6VEhD73T1Rt6vkDmz_JHlqfjGuGhStompxJLWjEpPU0NUPLQGc-elDew",
//                             "width": 4160
//                         }
//                     ],
//                     "place_id": "ChIJCXoPsPRYwokRsV1MYnKBfaI",
//                     "rating": 4.5,
//                     "reference": "CmRSAAAAgh7foxqwuvepamKs3MlhF9TMio6ZyosK_JUTg8pJaatvLENUwOlFQUs6ZXpvhzF6dbFG6Or2K11nB-YHWZ9T2nLHDDrN23aWtI6k95Vu2f8LtXIb8OUt-fAfWQtkc0bCEhAoIwZhTvZ9tLqBpTm4oomkGhSMT40gVomyfgGl1FX5xt2r0DB6Vg",
//                     "types": [
//                         "museum",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "30 Rockefeller Plaza, New York, NY 10020, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.758951,
//                             "lng": -73.9795189
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.76051758029149,
//                                 "lng": -73.97801536970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7578196197085,
//                                 "lng": -73.9807133302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
//                     "id": "e05462d15e6f301386934e30734e0c6d39636b95",
//                     "name": "Top of The Rock",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1280,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/111582420314532905532/photos\">Sergio Tumminello</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAH5jgCOHh3kq-fRhntSrspnSgmApuP83dhM06w88A6OYLUh8qz9I_NJRDVSVvcVC1YCW9EPx8PyeVvwqWZVsjmsL4b1TP82DoFFUcrwcB2JgislxqemS35hzY5FwrxarQEhC8YKeXdOTtv1nWaaJfuJ08GhSDTAMoM-Q03TfDxz1zLGn0zhHb3w",
//                             "width": 1920
//                         }
//                     ],
//                     "place_id": "ChIJe7vKMf9YwokRIMYfDz7iF9o",
//                     "rating": 4.7,
//                     "reference": "CmRSAAAAYDU8zrq_3OVGdOSHqF_Q2Lyg2pDrcKGwMGylnI3H7XznjRSjPdLohO9dRta95U9U2ukv_Q-WbBuUFi1OaHVRqX8F4OW13NR12jjYuS6RseOXSZNjJPfIEXJVV991y5U0EhDICCtx61tRBmT75Cd3gXf0GhQnBOU0WL05ZPmZL2KYNcxD1AtTOw",
//                     "types": [
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "New York, NY, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7828647,
//                             "lng": -73.9653551
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.81804399999999,
//                                 "lng": -73.9339825
//                             },
//                             "southwest": {
//                                 "lat": 40.74734159999999,
//                                 "lng": -73.9970305
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
//                     "id": "c9bcef33f0cc85eda31f1c7444e9b1a3b82c9a9f",
//                     "name": "Central Park",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 2848,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/114158126016582693529/photos\">Jean-Baptiste Jean-Baptiste</a>"
//                             ],
//                             "photo_reference": "CmRZAAAAGt7rCQWPh0sik2BWniTrGtikgOjzDfRgHYV2FF8bgx1MuFz4jFXWcFx7GSp-j25mU9Z64Xa0uSPJSq-j5f_ui18NURv6vES0yfArC0sd8Wk-OyDi5aCucFBlHpRjSnZpEhBQVWeFR8J7UA-SbNv8hPoYGhRvOFrUFlUxF51g8vLUGac0cjnSzw",
//                             "width": 4288
//                         }
//                     ],
//                     "place_id": "ChIJ4zGFAZpYwokRGUGph3Mf37k",
//                     "rating": 4.7,
//                     "reference": "CmRSAAAAhlGP4HDuIcB5scM4sehdnphe84MokIgXHPp7ElVrrDOiCIfCbMQ08iFTcQlxK1R35RtnjMOolTr99Sb4jvyjY_h4c85fTsmYmr2Sq2oOkRSTMTRqginc3VAujqP0-OtfEhAdvB1Jb0A0bGhlu2CHfBCxGhR6n5tIwUWc5ufTBy6xx30vixciVQ",
//                     "types": [
//                         "park",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "1260 6th Ave, New York, NY 10020, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.75997599999999,
//                             "lng": -73.9799772
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7612802802915,
//                                 "lng": -73.97879046970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7585823197085,
//                                 "lng": -73.9814884302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
//                     "id": "89dd7f0c82efc14f18954f8abf2925515037927a",
//                     "name": "Radio City Music Hall",
//                     "photos": [
//                         {
//                             "height": 1200,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/111235470750488528791/photos\">Mike Somerset</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA00fzt2Vru8VGGNP3QXaN6BCYBlge60FopHzhkPdKVoE2mRenLGkjmhZlMgWrvwHHvJZEq3QTU7Dl8SHz-wKWIisLgD6NzhGaev2ceSij3yB0SOStzuW0TU3coi13UKUjEhCjCPYTJcxitMYTqZh0N9CAGhRHVxgJDbpYqMXxqmDU-T4_PHHGgg",
//                             "width": 1600
//                         }
//                     ],
//                     "place_id": "ChIJPS8b1vhYwokRldqq2YHmxJI",
//                     "rating": 4.3,
//                     "reference": "CmRSAAAA88rBgGDduqg7QeXY2LNLgHAouoOwSsxKvH5VrxIVx7ZJcdl6xTfz9XfXKqgcUT6HA3B4Wa-KlVGe4Ckis0dXPVdsKuvoheyCk74blDqIuwW6702nNpQjmy9s7mHP-ro8EhDur455KAmV10fAOLJc-tAsGhREq2kEL0emIBkILMRRnceaP6nmOw",
//                     "types": [
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "5th Ave, New York, NY 10022, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7584653,
//                             "lng": -73.97599269999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.75987823029149,
//                                 "lng": -73.97453295
//                             },
//                             "southwest": {
//                                 "lat": 40.7571802697085,
//                                 "lng": -73.97777435
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
//                     "id": "acf24f96362bdabb64807f6c17cba8bb1d5b738a",
//                     "name": "St. Patrick's Cathedral",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1150,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/109259847616931570223/photos\">Iljoo Lee</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAQYvSyIX979z3g6tm9nCFEOkqGOb_BIi8yOKTZCbA5YhPKog4WeHKjPDLtEYzIcKzrnaZZr1Vu9suw5kSQ_nVtApGWtGqrrvjFfflxrBJ3LIs2Cb-AqeIV2ohcUgEPkxEEhDexQdJgqJiuSqEk_ccS50yGhTbYgW8rxqmK0MhzVgdj-Iqoj6PWw",
//                             "width": 863
//                         }
//                     ],
//                     "place_id": "ChIJUW4vEPxYwokRW6o24DU0YIg",
//                     "price_level": 0,
//                     "rating": 4.6,
//                     "reference": "CmRSAAAA_UbP_1L1soGhTZE8X3taoqYJCxzbj5cCBWBurNSN70MmDPk_OorVAXpxysWSCkhtNjUPOFOLqH3OVuUbnhindzeK7jFZhJoTs5lcOIr-FVHAV-oUzf7sTL66tnPEBywNEhDPwNazVl_M36OlTxviPvU-GhQWZkHifzrMt4QF9FqbpPS5gfsBLQ",
//                     "types": [
//                         "church",
//                         "place_of_worship",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "285 Fulton St, New York, NY 10006, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7133444,
//                             "lng": -74.0133677
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7143633302915,
//                                 "lng": -74.01215566970848
//                             },
//                             "southwest": {
//                                 "lat": 40.71166536970851,
//                                 "lng": -74.0148536302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
//                     "id": "48cd459142d91a750ab1ac00141e799d2a7c1bfb",
//                     "name": "One World Observatory",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 2448,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/116088260092237923598/photos\">Dani Rojo Gama</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA5j9qKXjpOZFYyiL-fM62YF7PvMTH2OcRBaz7741EkGRVx7BtvNb6E2SMA49Q6tPzpAgPvxqTtrBBdOIHMguRnqpCVC5-1qOyA8czRBQ-NxsKZsrDJ-qL_I98NWLzZ3pEEhAdNQFWIQmmSuKPXNIP33phGhRYVoF0GV88BspdervEQMVJvJsN_w",
//                             "width": 3264
//                         }
//                     ],
//                     "place_id": "ChIJTWE_0BtawokRVJNGH5RS448",
//                     "price_level": 3,
//                     "rating": 4.5,
//                     "reference": "CmRSAAAA7xWkVdJhlJe3eh3lfHWq_LlHVcaPEoA0qNQJQwnwW6LWlBmtbkQ0acQ8qBz5T3wSv8DvH8-7u1oLwdcR_LStFTO4n_SnTAVg5WQ9tA9loO_iKM_6dwvgq3TktHp53QSREhDMF6ax3J1k-aHttcZjwWOmGhRkfZ_BJSZecQajYfan1rYx4FpY_Q",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 }
//             ],
//             "status": "OK"
//         },
//         "hotels": {
//             "html_attributions": [],
//             "next_page_token": "CoQC9gAAAKgEX8vQ0If1v0ULCHG28FY63UoehPCDNXQNywXuVvLlWOxSaxALvXEigK95ilOhcmnqy2FyyjVaMkuj_Q_Y9vxEJRePeTffYFPZwvE_mdM9UGDIulY_BiOdINKpjD67MeNEtenTx9Qc9RSfAGha0dmSkqStFwtmHiFjAiDbrmfdAT46bB51Rm8IK9-zKhmALHKVUfKV7T_YBO3y06WGdHpFIA8DMLOr4Z_1PyFxTOXbs0A2KfoKPtOKfs--6vERJjIi93rV0cHCGCoZhgLoiCDvLiL8OuAFyJK75vbeL5Ag51jqrFvAjOryUUE9fvyd6eR-FNWL2nSjg5ixcZA9rgsSELmrZaMDQpqrgHS54H29sboaFB80D2p6uSzB6YxgBscH9I9_zVNr",
//             "results": [
//                 {
//                     "formatted_address": "28 East 63rd Street, at Madison Ave, New York, NY 10065, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7657089,
//                             "lng": -73.9692386
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7670578802915,
//                                 "lng": -73.96788961970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7643599197085,
//                                 "lng": -73.9705875802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "c688e55a6b1383b9bb4bceecfcfdc1afe384da93",
//                     "name": "The Lowell Hotel",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3456,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/109242289716376687889/photos\">The Lowell Hotel</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAXhRAHwnyQGwgkgRQeEThuncYYEtzi-cZUsZlmhMqa1Sah9IKtE8uuaU0Io6IDLp35svBDbcUUvlHTwEcdwgFs8NOSqTfu6mNQi0sqO7kSMWUD9_u_iyB8TwrV-SrPYbHEhD0rjzCRa3TE0d6SVruGuE1GhQfAtfuUmayAps8v_aj0XFa9KyMYA",
//                             "width": 5184
//                         }
//                     ],
//                     "place_id": "ChIJb9nOTe5YwokR5og3CprlOX4",
//                     "price_level": 3,
//                     "rating": 4.5,
//                     "reference": "CmRRAAAAzgY0_Zgso6rYe-lDDSJemfGs0yAxgyVFbAPowSCdxVcZZVykX1A1ZejQgnihQ1DvSQHtimMszkxNvIBsWAR8PQ8CQgqlH-f-50blxThnkGUEYuKShqVT6A-MhxHTfDSEEhChcOIvsi6SekaT-hJ6qSsqGhQYdT3ieRWNDrjV8fFbQdkVkneIFg",
//                     "types": [
//                         "lodging",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "130 W 44th St, New York, NY 10036, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.75645919999999,
//                             "lng": -73.9845479
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7579083302915,
//                                 "lng": -73.9831238197085
//                             },
//                             "southwest": {
//                                 "lat": 40.7552103697085,
//                                 "lng": -73.9858217802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "3512b942b934633e89bc74d023fe44112b07d669",
//                     "name": "The Henry, a Luxury Collection Hotel, New York City",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1144,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/102410255199938987362/photos\">The Chatwal, a Luxury Collection Hotel, New York City</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAD-saiR8PUaCG5mc6YfAU0aA6oopg-85v3wIV3vB-ZIPgEIQLJNQDWPlBlXcSxf1oWrRJZEo8qWKC3jeYE_W3C3Rz3WvZ402lrnjoYoRlU9zs5OexnQ8Bhkk8MOr3EPEfEhC5mSqucPDdq9SVfbx147k4GhTIMx_0Yg9-aVngdFediJHqhOu_YQ",
//                             "width": 1500
//                         }
//                     ],
//                     "place_id": "ChIJ613balVYwokR2Sd7fEqauZs",
//                     "rating": 4.7,
//                     "reference": "CmRSAAAAraAAdBy1wXhRU8wJpZT0cxOgC-810-LeeLFTsX9CpPP60bBL95BSbmY_tQn7w9qiPZtkwE-AniGNn-0wFI1fJD1UgJqLclM8Ah1wZQap6vifSAcJmcg_-alPUF_lXVwsEhAxfOMBnAWFFgxVcHMInE_MGhSTEbjHHtqQBGrMy-HUduvq66QaxQ",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "1414 6th Ave, New York, NY 10019, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.764816,
//                             "lng": -73.97654
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7662118302915,
//                                 "lng": -73.9752586197085
//                             },
//                             "southwest": {
//                                 "lat": 40.7635138697085,
//                                 "lng": -73.9779565802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "bb41cfd248100408e7b046ce91596de6390bf930",
//                     "name": "1 Hotel Central Park",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1547,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/101250783625777815020/photos\">1 Hotel Central Park</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA1TzCpFDphXdrLb4VLpfBlGLL8OlitYU_eDWI-h3jH25j0TLwR09b6BlLTA4nhqLWkMCcTXA_m1FtRcCax8mpxQMp5WTiafb92MUSTG-DzpU7_8rjO1dsRipf3REr1AKCEhC8BtmeFr-rBj3533-pY7wJGhTiOeIRkUbSz6vhjl7GueDljXpGDQ",
//                             "width": 2048
//                         }
//                     ],
//                     "place_id": "ChIJHb72rfBYwokRRhrgUWHTlLs",
//                     "rating": 4.6,
//                     "reference": "CmRSAAAAqK-Q9p43ZLBEGUzIuEVdZnPEm3DHTDggaAxLXLRDbQ06FWpv3E-3Crzc8hxnJUBCQgL4aswsxZno2l4MAv1GVo_DbP1TUZ2NBn7u0Mm2lECcPnrhqwIjRagVmMbQFrdEEhDP9DxZ12tBzFJjrX7RawJtGhRoVAYJV2Tu07pfZuQZo4h3XCGBVA",
//                     "types": [
//                         "lodging",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "540 Park Ave, New York, NY 10065, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7645047,
//                             "lng": -73.96916709999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.76581658029149,
//                                 "lng": -73.96764696970848
//                             },
//                             "southwest": {
//                                 "lat": 40.76311861970849,
//                                 "lng": -73.9703449302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "545296bbc9cafce15027b1bdb3bed73a969c7797",
//                     "name": "Loews Regency New York",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3397,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/114212735480305564741/photos\">Loews Regency New York</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAs3lCOJkox0FGswokNH15C5FDQaOtPw3PFrID8FPPmK4ENFOxNBp8bF-Yp13mbSn-ElAv1KbsSMEqj_W5AZrvFwYcHQQDp6cCNnCqjn2s_er5L2ucswY53pX18wfm4aYpEhCkrhq2tmznxGcyRJ5h_ylZGhTT1laupg4A739Hx4AxW_Ce4ulxhQ",
//                             "width": 3715
//                         }
//                     ],
//                     "place_id": "ChIJC0Xwu-9YwokRDQBat_jlgQ4",
//                     "rating": 4.4,
//                     "reference": "CmRRAAAACloln96dHGDJ3pyVCwR3KMlLSlMXIxCzxfWRREJTA9hzQrCRNXlopcG8JsfVUpddro_R80i6Ox0D78d30ww0GlSVD38P5Dz6QR9iJnjB0dyu7sFBYjUTWwXoP1xoTtM3EhAs2OOH8MluttDKJ3V_XuTCGhQPDoDwUf-UV3XAdN11oWIX_wTjvg",
//                     "types": [
//                         "bar",
//                         "night_club",
//                         "spa",
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "63 W 38th St, New York, NY 10018, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7522068,
//                             "lng": -73.9853708
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7535063802915,
//                                 "lng": -73.98406351970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7508084197085,
//                                 "lng": -73.9867614802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "c1b316163824a94cfd4c3f8d2f21e6c04cd130a6",
//                     "name": "Refinery Hotel",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 2592,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/108826836482178101148/photos\">Emilio Garcia</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAbeaBdd0I8_d1uE4j3_XfXijHUsF5Xyx4tBiYA9fMO9JNb49XPSZbnGrTn6_4GnKJpjBHmY7Oiz6znumJhXjDOW1ASF2_CZvY5p6xfBxO43KCez0NPmzaTPWzU36pLeePEhA7sBQ5sI9VQJDM9nXa1lCYGhTzfQ_m0InpwsMgnNuf00vpRib59g",
//                             "width": 4608
//                         }
//                     ],
//                     "place_id": "ChIJl6r9TqpZwokRqsh-zI3NRs0",
//                     "rating": 4.4,
//                     "reference": "CmRSAAAAPVMdL6pI0O5Fmm2q44yh35LCA1iCvQz_Qt6Eel28g6bmrrU1UrPBe0juwxea9bgAeRUC8cj1eJ2lByeJXvytAqSrvjzwn-BM4qQzRzK1HcY1c6ZMUfSAZ0aloNAN_ay0EhAqCdlYKGPHjV8Ps4C3KqFnGhTs1O11YFgkho3qWsUEHMHoCnrfCw",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "2 E 61st St, New York, NY 10065, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7652431,
//                             "lng": -73.972003
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.76658928029151,
//                                 "lng": -73.97058721970849
//                             },
//                             "southwest": {
//                                 "lat": 40.76389131970851,
//                                 "lng": -73.9732851802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "2c4ac10fc7d6efa48fce6e07580729b86241739f",
//                     "name": "The Pierre, A Taj Hotel, New York",
//                     "photos": [
//                         {
//                             "height": 1372,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/103795444667262596243/photos\">The Pierre, A Taj Hotel, New York</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAed4DdRbJ65nLdny1KzBt82CYHotJOQGsnUxbRI3g7Oc8nQLki_USX1hMX3_F1pDdxsA4Hpp-AohCeCvBR7Z_s6Qr50ynnH_P-PdvThoOsT8h8PG1_saPWWJb5zRMRzWCEhCqkNUXRutH1yvapi0TYOSOGhTytAndkpPdal_D8LLShOYIbSvwjw",
//                             "width": 1365
//                         }
//                     ],
//                     "place_id": "ChIJBxesOvBYwokR519Koj1ulDY",
//                     "rating": 4.6,
//                     "reference": "CmRRAAAADgt0__1MVkRjVVbUTCYlcSgLIeRh5NLc3csLx_dcmhn8mquYKUsNKVjRdxiRoKPCNwBT04gHHJEhevXwM4FzQE71JLuM1d2XbgEhnCpW6UE9ZbwbnLWppnR5SRBN7csREhC4FT1AHqiuslDqsl5_otiwGhRicUD7wi3MsgGs9k5AwrbW3jgaFA",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "79 Crosby St, New York, NY 10012, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7230126,
//                             "lng": -73.997417
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7244160802915,
//                                 "lng": -73.9961563197085
//                             },
//                             "southwest": {
//                                 "lat": 40.7217181197085,
//                                 "lng": -73.99885428029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "ea50675441b2417f2c6eb94893e19fe5d6083e77",
//                     "name": "Crosby Street Hotel",
//                     "photos": [
//                         {
//                             "height": 3024,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/107359684834766993542/photos\">Thomas Julin</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAj8SXySU6JJcFBVtYSuXIy4Jj-cDbPnPBh46bvrou4QIQHPvFMZy0GMXu8CZUVp2l_g-hioSXXFdVb5XfmwEBK1H1uojLBtZW1BFwhwrZ7apmizTZ9sHH2bglCX5YiWWmEhCspT8RR4WsJ3b_J8frk2yiGhTI5bcCVCZ-4Zq7ynMdlzVekGHlxg",
//                             "width": 4032
//                         }
//                     ],
//                     "place_id": "ChIJpYIgKY9ZwokRMt2wXGRZ1fg",
//                     "rating": 4.6,
//                     "reference": "CmRSAAAAD9ymq0b04d4BPoHeG4AZe1uUX2OAKYdlagyQJaLC50lzzAfhr6dOOUeK4-M0GQT4641nCYnvFEUyLVqYfwHdqNjptGwYOjdgLjVQdYZLrr0Rxpel-aR662uase8NSbF1EhCzTRvuX8E7Sd-6oNO9CR1uGhQYOh2eSVPlUXv9uUn_Jr7g9LvELQ",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "28 W 53rd St, New York, NY 10019, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7608918,
//                             "lng": -73.9774011
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7623123302915,
//                                 "lng": -73.97599961970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7596143697085,
//                                 "lng": -73.97869758029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "93ddd9711135ba466a4b1f3a9553a3d9103dcb5f",
//                     "name": "Baccarat Hotel & Residences New York",
//                     "photos": [
//                         {
//                             "height": 1327,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/102738290005557096512/photos\">Baccarat Hotel &amp; Residences New York</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA3YZ3GFq-XTQB_s5HP6NJAAQlzPrKv7TG1byJ4Wrl4hIm6BZ56ywNwXaEt6WHnmifYzp5RaRzhELz8ZrfOSmCW7hG1tNNOrJa7_CKkellN7orFrpCAOty2aqC9l2_sbWbEhB4uN5XB9yDOqXct1fqsYYmGhT-G1zbl-w92SYfgmBWaLTOOMMs0g",
//                             "width": 2048
//                         }
//                     ],
//                     "place_id": "ChIJi0E5YvlYwokRp4w4kH4Av-A",
//                     "rating": 4.6,
//                     "reference": "CmRSAAAA98bDYp2y4Z82Ri0jJ_erRQlFEV0JtBh1w1HpJZcstyQLZMzJzEsWZMcwLKspp-4aJUxJdYKdRcve9wntsw0C7fXOl8vd7YunDD6TLQgDVMoetAhTRM4WPBrdUhuCUYx-EhCnk52JmBBup9I0-VGMHHlCGhTrH8UkzN7vAd-YFIt9A526ZOgm9A",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "153 W 57th St, New York, NY 10019, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7653771,
//                             "lng": -73.97907219999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7666283302915,
//                                 "lng": -73.97777731970848
//                             },
//                             "southwest": {
//                                 "lat": 40.7639303697085,
//                                 "lng": -73.9804752802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "96226aa2bdc8961eec42c1ef5df5661446e9eea1",
//                     "name": "Park Hyatt New York",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3080,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/108334015335617733618/photos\">Jimmy Sylakowski</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAcB9vVBW08nppguDiswSpQHQysCJ95-fQhv4NIdyRK07hOWQTB-qe1O-DBjcUVeASdr6CCO1OUJ-2TWgx-nzhex2mqo3bKIaPAHI3QT0JjQeIlxbJvv0kPncTteXcMiM0EhAOWkbBXaQ-TQ6TPHKp6IK3GhSiTQNgMV1sWREIodQNCjpabmzJ4Q",
//                             "width": 5472
//                         }
//                     ],
//                     "place_id": "ChIJpQr2a_dYwokRoYDzhaXxroc",
//                     "rating": 4.7,
//                     "reference": "CmRSAAAAGBrT2QsYxAq0ODuVrHl2GgkUqzzND4iebupnckAIYvgdCECIvXbqjoH8GAW9Rd82VLr4FkJZWPBPchEoRNzrBR1XlMYC928d4Bedw8l2nTToRjx6F_hyb5WgJ4d3z_iJEhBZrWxz5NylVvdUh-5xPJPcGhQc4YgY5NXDZ1s2BajQlk5Djxm5Xg",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "455 Madison Ave, New York, NY 10022, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.75801999999999,
//                             "lng": -73.9749775
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7591687302915,
//                                 "lng": -73.97365336970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7564707697085,
//                                 "lng": -73.9763513302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "6f58d9b4a4f4148ec3ae34f5fcbf609c53de78d7",
//                     "name": "Lotte New York Palace",
//                     "photos": [
//                         {
//                             "height": 3024,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/117650888548196368054/photos\">Vijay Sondhi</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAvJ3G586ZDFs8_Mt81eMsvIras1WMRWVD_UuNLLNFEQRs_KidguSbtvC02kZbW29WN-MYq7FCdwmjXXtmxw384dbGdURur7AHho740fkt9SqFihsp9DfjSwGi2hdwfiqbEhB2MDWOEu4sH10dP4vxTND8GhQcSLUmNQY4SCBIN0bHcqxNFX5Gcw",
//                             "width": 4032
//                         }
//                     ],
//                     "place_id": "ChIJu6kY43RawokRnmczCmSH-_s",
//                     "price_level": 3,
//                     "rating": 4.5,
//                     "reference": "CmRSAAAALqPH818Ds03ARELzxr4JEfUy-HLoRYU0bGf-gF0VpZpwEYaTmRRK_h1Oe7_rp40xFxxEzszwbOaD2wP2kiYTDOR-KHfZZ_MFT_KUSZXOX36L75Q4AnD2qDxAUB5RkzydEhCrnheIRJIhsGADoDSa9aslGhQNaEefH60gK3-fGOH5f9p-pJ0KFg",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "2 E 55th St, New York, NY 10022, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7614222,
//                             "lng": -73.9747694
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7627912302915,
//                                 "lng": -73.97326366970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7600932697085,
//                                 "lng": -73.97596163029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "4043ee03ff77910e3ed2c1370ae6ef45452451d2",
//                     "name": "The St. Regis New York",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1500,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/100682632239373146271/photos\">The St. Regis New York</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA7xy1ru4yK5GN-CEl7bpuS-yCozLVEOUgRBrYSrKmMidqrcv6Yq3rpKA4QbCXYc4gl5WfQwRTYX7Os47J0h_grETetEuPS-T4y6iZmUZioZ80Gx4s0Wdcf6pLzj6ARpYgEhAidcZj96REOKH-bPO4DocdGhRkma_vqF004II678EFPk2E83U36Q",
//                             "width": 1027
//                         }
//                     ],
//                     "place_id": "ChIJT_kaUvpYwokRJ-Sl4G4kZ_Q",
//                     "rating": 4.6,
//                     "reference": "CmRSAAAAUvnUOq3FtBs_Ys6Zg0Ms8Hvesxr0ppvL0O5sh6W4NJ9yRhNggv9oc8TBGAPqX5ytbGHHw0Te_DVtktr63TsGinnOgznSFyb9RhPTwNSq4LUW46FlwZPTlvI-MQRzFzHjEhDhy5CFNxAzNRwDycZwBjrHGhQdFqOYN2zoeRIHNshZZGPBXqIM9Q",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "299 Madison Ave, New York, NY 10017, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7521911,
//                             "lng": -73.97949470000002
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7534640802915,
//                                 "lng": -73.97828001970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7507661197085,
//                                 "lng": -73.9809779802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "1f856665787bb91f06790cb5ecfca0bc94ad9ab5",
//                     "name": "Library Hotel",
//                     "photos": [
//                         {
//                             "height": 700,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/105494787689478068331/photos\">Library Hotel</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA4j4k4ec-q7A8DgrN6ZXX8MfiGWfT7UPPv1GPCzgleFKZMj96e8kYpaK8MOxTe_07fiYgmxIvqNAzgIjWLbuUD4dBn5F1Jm-7M8nXQv96YSbe4XG5Kn9P18VqIapHkUjAEhA1Q3QWdEk018OXQL7Apsa0GhTZpa_1PJmoUGQPQpBsxiQ7rpfC6A",
//                             "width": 542
//                         }
//                     ],
//                     "place_id": "ChIJebujAAFZwokRKeKF6sJ0lNQ",
//                     "rating": 4.5,
//                     "reference": "CmRSAAAAn18MDqGAyWa6kI-pvrUYsfrH01cqBVK_iB04-RF4rS-V88jrfwk8Kg9Jy4ACEu2IeMzxwMK4vshzHjcHqMkpriBzL5x55DtE9Xk8V5AEqOZXm9bCj6PBScxxEkjbh8STEhDs25dhHyRbNpJxTnwlCybIGhQwrSRcQuB-OoMCXT-yTsNF1M7ESA",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "80 Columbus Cir, New York, NY 10023, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7688844,
//                             "lng": -73.98304399999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.77044403029149,
//                                 "lng": -73.98159596970851
//                             },
//                             "southwest": {
//                                 "lat": 40.7677460697085,
//                                 "lng": -73.98429393029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "c561b4b600e0038648deeb1ebc1e2d2a343986bc",
//                     "name": "Mandarin Oriental, New York",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 467,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/107750642314223413387/photos\">Mandarin Oriental, New York</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAN3fKBRkLmZeauaMU48bvc-BC6omQt6sl4cVQ4CBi32Rw3vvN1Xum0nJn6FbEvHy3mr-1Lh86TKGW4xejx3KmsfA1jalbRZHXtT5kJpQ7u2CMsKAgpss5m7Xu09DKPlCnEhA421F2koN_OYLOg2hW-9OxGhT1qf3lKeco5MnGDVPRDBeox0e7nQ",
//                             "width": 700
//                         }
//                     ],
//                     "place_id": "ChIJL83lHfZYwokRnd7wA8PLD1E",
//                     "price_level": 4,
//                     "rating": 4.4,
//                     "reference": "CmRRAAAAlHhPvxT7s2nQJEWi5k-xrNVD3tjm0i5YxF9NhfVq64vaf3teE4eyfvW-Q5iOfeTf96Qo_bd607xiRZklM_I2Q4zyLZdwZLjlo7f4-JgOPmnh--Sh8Za5GkwzKOVq1brREhBpwJWXaA9eXLQ50gL4Y5iRGhSkiyH-kZadTmhog3mII_Ran_HeSA",
//                     "types": [
//                         "spa",
//                         "lodging",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "1170 Broadway, New York, NY 10001, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7449631,
//                             "lng": -73.98854930000002
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7463378802915,
//                                 "lng": -73.98733511970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7436399197085,
//                                 "lng": -73.99003308029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "c6c24f6061f4f2267fe7b70a5406bfaf7771248c",
//                     "name": "The Nomad Hotel",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 866,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/106766407137652164568/photos\">The Nomad Hotel</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAnre1OIUz_osNGquRt6zjnVQzUJvM_d2W_sxAzA8k4Fbw7aBeBI_aavwYfmjXkLW07CP9JjfvszQMSkmhZhEk0E_TxsfzKqB_fN4HNyeUNd-oFPUeu0-XMS_CP6mCdZAhEhDvMc9S16cpi7EBOdZnSN1FGhQlwECc08VXn0xdlV1_1wv4xe88mg",
//                             "width": 867
//                         }
//                     ],
//                     "place_id": "ChIJ-eorCqZZwokRU-91WeuBj6w",
//                     "rating": 4.6,
//                     "reference": "CmRSAAAAm7pY1ew0--GZ3vuFls1LGuej5JFa4Rs7FJNnv9nK-3VmMqpEXfVzNc54oHcMAjpwVh18LmsjUoDY1OOMmvpkqA4CIVwuF8vHXQVkpb1jAsav0Le-20XTIK9quWYESUsBEhBxRrxb1rjnDGZqFb-LJAVAGhRGjKnkwwSsB38YoYGc_QOacL8Amw",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "27 Barclay St, New York, NY 10007, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7124701,
//                             "lng": -74.00908559999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.71383068029149,
//                                 "lng": -74.0077273197085
//                             },
//                             "southwest": {
//                                 "lat": 40.7111327197085,
//                                 "lng": -74.0104252802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "56ac081281eb9d58541dbfb75b45173d35b0590f",
//                     "name": "Four Seasons Hotel New York Downtown",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 5312,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/105675882692320109205/photos\">Maria Cona</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAE2_zakfW7uthZTni0o53-LlVqYZgE-b2OLjxzSwlbkPY-aoafOpE-pGEzfTX39gt7CA40jxwCtK7Q8KLBZWh7d2nezDyxHOMHxwRq327AypbihdhCmBlUfbuuZ2nLRoiEhDZ-52sLduHbNPI7JFfrVK6GhR1wtaG6cFx51GNoFGmmDPt9idTFQ",
//                             "width": 2988
//                         }
//                     ],
//                     "place_id": "ChIJiz9V4xhawokRorqq7eXaNxM",
//                     "rating": 4.6,
//                     "reference": "CmRRAAAAnyPnarPVv0EgTM-UGd_2w46ncPe1w9CMj3Yd7a08-2PvX7shTp3LHYszSRf2G8b_Mud865HXkxHKe4xHV0nzCgjd9reEM3ntOL_LU5Tm29bCwAJXEyW3BNziWoDjFFmWEhBvfw9pIZyfW1abmMH1q_UcGhQOemD3IZc5r469jZri0t9bCytdYQ",
//                     "types": [
//                         "spa",
//                         "lodging",
//                         "health",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "123 Nassau St, New York, NY 10038, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.71123350000001,
//                             "lng": -74.006745
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.71253403029149,
//                                 "lng": -74.00533491970849
//                             },
//                             "southwest": {
//                                 "lat": 40.70983606970849,
//                                 "lng": -74.0080328802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "36f91933da11e021d389793d2a9f1abfdf2434ca",
//                     "name": "The Beekman, a Thompson Hotel",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3779,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/100637454022597038865/photos\">The Beekman, a Thompson Hotel</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAZT6HL4Hvuph08OADgi1Z5uc3tO7JOF0zj6_mGHm2CsvG87toDq3740LWE32EYNj4KxVMYllw5B-MUktP0juL9KWNQGTHM5O_jHcTWF_qQiK2A7S8Q1kmtbLcjqZoK50vEhC0SE_XrdKkpgZMgdQlUdapGhQ-ahbPF_4IyhQrDXzzpAC0km7sNw",
//                             "width": 3024
//                         }
//                     ],
//                     "place_id": "ChIJq6r-exhawokRKgBzzPkn57U",
//                     "rating": 4.6,
//                     "reference": "CmRSAAAANf43vKdRfxjTbE8xThWtp_imOY5PkNfhOFZE6yZHJR-WgGlVm3Ghjne3ejw_4FwWlLMT6hh_JeqZIdLYcpbOVWjQBRDSWoqrDHiiRL22Hr1eL8i99YAVzJkZJqG6-3i8EhBQ_dWcpDrR3p46t7fW4W9cGhTOeHVay_0973aOJd0ubOsDHupQ-g",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "414 W 46th St, New York, NY 10036, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.761291,
//                             "lng": -73.991736
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.76267783029149,
//                                 "lng": -73.99035576970849
//                             },
//                             "southwest": {
//                                 "lat": 40.75997986970849,
//                                 "lng": -73.9930537302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "453a14393e69abc039312d4ba71d86165f660ffe",
//                     "name": "414 Hotel",
//                     "photos": [
//                         {
//                             "height": 2048,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/114986206626718888907/photos\">414 Hotel</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAteavbJxBJQJhqZOwwCNM1m9XVkhWQkC2Q6Q__8Gq0zXNEGuaIbq9Ub6YUq478KPlmgGExTWwYavJg0spgDfv2kBrAQmZVc9TZLmG8UIf8bSsuuCPCNIawQq8YwIQqdRFEhBqPyCNDUtxmJxOyQxD1spdGhRarRMKhtyp_g_XoZo6ptko0GTBBQ",
//                             "width": 1441
//                         }
//                     ],
//                     "place_id": "ChIJhwBD1VNYwokR7eKcshuz914",
//                     "rating": 4.7,
//                     "reference": "CmRRAAAArX3Eyz4Kh08VjfIXTLk3Pa1oZv-qgonrEebQjF2vi0tkYkhX1rA5F-xg6hr7Sn_kmqLlQ3jI5xqMe4DYdKJJEoobtShH832_an0ieJKT23NqQZ76ParYswO4FUHtoOKbEhDNWz7NSjhd6fpSZi0xf7e_GhQyMM2X8RKXP7lCygJ_JCE5UZEXPw",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "218 W 50th St, New York, NY 10019, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7615112,
//                             "lng": -73.98495249999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7629785302915,
//                                 "lng": -73.9835366697085
//                             },
//                             "southwest": {
//                                 "lat": 40.7602805697085,
//                                 "lng": -73.9862346302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "6a56d64e141b69d2d6727d6bb41e92e52ca16eeb",
//                     "name": "citizenM New York Times Square hotel",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1365,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/114246030817058217396/photos\">citizenM New York Times Square hotel</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAome5JlSttxkO04TjC1oZsgflE6j-JWBKEf9zkRdVPy_q_Uo9lAFkkcxVh8_23nBUksYhc5l1aNr9MzL1JYf5jHkfM2EjtMhu31Ke_YK6VUQ30wIHeqMsiUWOBrILjs85EhCqWcw2JOG5Rk9Ub53BSjffGhSU-sy1r-8GRYROOu2yzUpkFaE0nQ",
//                             "width": 2048
//                         }
//                     ],
//                     "place_id": "ChIJD7NlQVZYwokRUIDluhjtu94",
//                     "rating": 4.7,
//                     "reference": "CmRSAAAAQGQ6biXrMJKnNTcZrBSAoOmjjo80zc3uPXSzCgHcoT6Es0qv0H54eHgma2dWGnctYhFPMlGs4Cm9iOttev-4dxa51jjwp9qm34qgr-FpvhBjbBA5x8Njjak8WhfRIvXwEhDDqdCI8JsV1G9D0AlNu_lfGhSkDo83zbfNVvWYZgZ7QMgX2nFl5Q",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "25 E 77th St, New York, NY 10075, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7752738,
//                             "lng": -73.96339429999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7765727302915,
//                                 "lng": -73.96208236970848
//                             },
//                             "southwest": {
//                                 "lat": 40.77387476970851,
//                                 "lng": -73.96478033029149
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "b763e7f0f6ebbb322baf797ca8bd88c4fd04c674",
//                     "name": "The Mark",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 864,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/104489417862747578827/photos\">The Mark</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAQiR-I9t037XulZq1wFhaCVBJOpdIcymmr8kVz6fe7BwjtHcXNzxTCwRkEH9xMOSXTjcCutDtw9k-xsN3SSyvSY81Vk1UB8ddG_Ubcyqql72lCBJXofterNT64Dra9RVSEhChAsP7-go3CMqp7XusO36cGhQRhIcLqOrC_N5i99FgAmXSmzYtKg",
//                             "width": 865
//                         }
//                     ],
//                     "place_id": "ChIJXYOiRJRYwokRm1i3c9R6WDA",
//                     "rating": 4.5,
//                     "reference": "CmRRAAAAjwnOmvV1wJTJdO0ByCyEFdfm9MmQVyhAKdJ_X9gH7FaDH-z6m4ZSuTxubAxIQhhw8xDPGXBVdhIePS62N_qT0uLwkBthxqSPi5bRmcmXR3Bu-XziJn_3quyYwPIXAbxxEhAtW-Wti7sMyEmC33gq823JGhSvkUKIVHC4qevDclK3lRg51aEfzg",
//                     "types": [
//                         "lodging",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "152 W 51st St, New York, NY 10019, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7614289,
//                             "lng": -73.982458
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7628723802915,
//                                 "lng": -73.98116736970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7601744197085,
//                                 "lng": -73.98386533029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
//                     "id": "ecde55dbed8632de25e6ccaa839f2818c1a4063f",
//                     "name": "The Michelangelo",
//                     "photos": [
//                         {
//                             "height": 508,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/116054554057797543543/photos\">The Michelangelo</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAi8XERHMy4waXszkXyGMXey0M9MhlMMHKdo2ZDKOFF2SYzqncInKoeUElEMDGoUAMnic6W4JkdPvCO7LFcZVo1v4zDwlvA7FJoZ_J6n9nuoO8vmoaQ0RDr2aGTFquykFGEhAsD6L21yvTB_nqjmqxQEO3GhR_0PPPdRboKi1Xe8GTwKmlifVQUw",
//                             "width": 507
//                         }
//                     ],
//                     "place_id": "ChIJb2q-m_hYwokRFLZdzzJP3mo",
//                     "price_level": 3,
//                     "rating": 4.5,
//                     "reference": "CmRRAAAAVJ7lOv469ZS95mX_UC2BtgfHOvUIEQ4TcKAbE_yQhzEgP3B31uR5mzyhEDaSDAMsWXty5QAqtNNqrRMg4VZe2JCla0Fv-5EdMiws4W9vcrL8r3u5fikasjeECM6i3f1REhBCcVd9qMQhUUyaO6albm-vGhTpPhMNnFVdKfYAScUUCYkksghMQw",
//                     "types": [
//                         "lodging",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 }
//             ],
//             "status": "OK"
//         },
//         "restaurants": {
//             "html_attributions": [],
//             "next_page_token": "CoQC-wAAAIY85MQlZIUpuXKuo_3omQMR8Nqf0ME7bqNc7G8FK84t_aMBQELOWylmLlbGXjRHOg37TAhZ5UmTbeSOWFfXG_xNRgu60vlkwAbWK1Osj3pWxTvd9kHvXYp8nezL0I0lpbhy7s7Cf9JRRyRDmfDcoE-qZK2kT1QFAYXhA3gBauCI6dd-I6mGXMVhKDOJTO2BjgiqeHtZ5lAall31-8DAkYQNnuvsPgsVNbyBMvjqNzkmoNnO8iaViwg3ULSTcc0bbpzK98y4Aw5mMhowyz3HXz4WyytYylqAG-9W95DCxeAsOBvmRppMbuZi44t-P7gWTcqJm1sPLlGyDs5Rhc4-uCwSEBKQhGgSgODwFhhvfLKgaZsaFJ4dwEgppUFA3JkComfAN2KI5b_B",
//             "results": [
//                 {
//                     "formatted_address": "1064 Madison Ave, New York, NY 10028, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.777365,
//                             "lng": -73.9616659
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7786649302915,
//                                 "lng": -73.9601981197085
//                             },
//                             "southwest": {
//                                 "lat": 40.7759669697085,
//                                 "lng": -73.9628960802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "0d64df0c84acb57aa64c715ca9db61c921f885a9",
//                     "name": "E.A.T.",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 2988,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/107476303447076480406/photos\">Renée Avallone</a>"
//                             ],
//                             "photo_reference": "CmRZAAAAFpy8g8vCbLL8dbTRyPBxigxYK_UC3I3OWqgQrrSwXvLPzdibSmMG84E8mYmWtm-CSG8Idc63uu9p4GPjf7yULhIcejgx5JvkPCaJ753es_oQ3B5EDJH0w78MWjPoOjAGEhBdmDCe5FCDq0GPdlvqg12FGhSusa7Rb_qLYjyvuU9JObKUASu5fQ",
//                             "width": 5312
//                         }
//                     ],
//                     "place_id": "ChIJ8aQDcJZYwokRyPVIfqjkazY",
//                     "price_level": 2,
//                     "rating": 3.2,
//                     "reference": "CmRRAAAAnevpPr28mhTbG4fCQa0QQUkHt6yWKpifbb1hjm6KUwoq98LR8dMz21I-6RjqlrdZiVQGtFu0Gyq6fzukXNIVtIxg2aLIa1SbFy314hLUxqI6UTWtJx3Rli2jklqybl8hEhBhKqKualZlpJ8TP0IvMfsiGhTdXxBgsUTn20pzdEFFpZ9S9yG5gg",
//                     "types": [
//                         "cafe",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "42 E 20th St, New York, NY 10003, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7384555,
//                             "lng": -73.98850639999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.73987218029151,
//                                 "lng": -73.98709791970848
//                             },
//                             "southwest": {
//                                 "lat": 40.73717421970851,
//                                 "lng": -73.9897958802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "1f003ef829cecac6974e677cd495b3aa9d54594e",
//                     "name": "Andrew Tavern",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 850,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/114166979717103053811/photos\">Gramercy Tavern</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAPIKYaFBLHtq_WSC9smllrPefuu5iOPvn6i7XcRrbvHZEq3fq37SUe7YACMbcL1YZ193LIKZATL7TIsyMFdIfLHR7tfqrlmSVqv-6fd9vzv8v8z3RXCBsEt1JuM_RIB-lEhD1Ch0d6p5oK6XilVBIwWHlGhSCn78LWIKGiiNb73PLw9UlmgOIfQ",
//                             "width": 851
//                         }
//                     ],
//                     "place_id": "ChIJvSQIgqFZwokRFYQbJdzceSs",
//                     "price_level": 4,
//                     "rating": 4.6,
//                     "reference": "CmRRAAAA4KgJXOg5FPU8nb_OqGp7gmWaTb2W4oABsA0VjmgNN4eCoFNs25XsPHRAf4WxQ6PXdYdoX2x7UoBoi4pkf7hEqXxIbgrCSCLINBctyHnmsTPCC6kkwJiwju7-GyFaHCGyEhAFyZtj43wcqdYboWofXOkgGhRDdIOHZQ3nMCWQ_W7O9OsB-uzzwA",
//                     "types": [
//                         "bar",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "155 W 51st St, New York, NY 10019, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7615691,
//                             "lng": -73.98180479999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7627827802915,
//                                 "lng": -73.98044491970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7600848197085,
//                                 "lng": -73.9831428802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "ad0a76f04ef4567ae3420ffa1881057b1f8180a7",
//                     "name": "Le Bernardin",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 640,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/103565644244028407440/photos\">World&#39;s Leading Restaurants</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAKGOCPzEu6Y5IvEFExMlWTNYKYat1-gUENAfc1hkNeoLwf0VtmZTRFIqoXaSlnWmWF0Tv3f6tGLbTS3nR-h7IXm2Mw5uaR--h3k_acHtclZzTGEuuwNncOQHtThZjHIvhEhAB5svKRccO37OoYVXhjcOxGhR7kNNMYBpxsCii1u2ECWEXAy28gg",
//                             "width": 960
//                         }
//                     ],
//                     "place_id": "ChIJVSKXkPhYwokRVgXdrRfFxh0",
//                     "price_level": 4,
//                     "rating": 4.6,
//                     "reference": "CmRRAAAANH3jIrtTWs5V-ioGCeXfmAtnCjjAqbnmhlNI3fIZD5JnTZehdUr_k-LnFlrz8gJCZ7NG-pbF228XcXrAo0jCeEoFf8kDZ3JsxF7V4voxR1HORP8qdfRsS5eiEYAJQEziEhCBXghNqLSY2XUXSZnSVkGdGhRGnlUk3H2fNPfC5o8WcdxlGvxcJA",
//                     "types": [
//                         "bar",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "60 E 65th St, New York, NY 10065, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.76677379999999,
//                             "lng": -73.96760220000002
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.76816568029149,
//                                 "lng": -73.96620736970851
//                             },
//                             "southwest": {
//                                 "lat": 40.7654677197085,
//                                 "lng": -73.96890533029152
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "0fcae36cae92d503d097a515746e4700e021995a",
//                     "name": "Daniel",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1520,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/111192969447456401878/photos\">Daniel</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAc25U2F-QHN2x5TD5dMAFDswcrEpOPawTDA0CVLvhHADBTei2PEZUSlvkJRI8zXcTjdOIAWWpJfTIlUx2cPcmZGd3Z4xAQtNLFeoptrrldB0dCbiCK6WrxcvRzGjBLRUUEhBhKbK4O22z1njMa2CqAWhuGhR9x7cIc0Qt9quE6ybbYFQM4ySsCw",
//                             "width": 1520
//                         }
//                     ],
//                     "place_id": "ChIJ09ZGju5YwokRXOcNC23JRwk",
//                     "price_level": 4,
//                     "rating": 4.6,
//                     "reference": "CmRRAAAAXFNkrU-YuuX-ZparJ7X78fDXsGo2iytVI5iCvJIge7ZPS0qOzo8AQ71NL-WUjW5KkxRBroJ28thR7_Stvl0J17YhAcLxl0OEoWDZkRR7Rbd9OKYcOrdroRhfb4Z4PYrhEhCEGhq7YJBH11b85GMp7_HDGhSmzcejwgJoUBGsHeZuta5ZEkAh_w",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "4th Floor, Time Warner Center, 10 Columbus Cir, New York, NY 10023, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.76822689999999,
//                             "lng": -73.9828591
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7695244302915,
//                                 "lng": -73.98126351970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7668264697085,
//                                 "lng": -73.98396148029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "37c516575be01a32ba25362a2ca116578eca3ef0",
//                     "name": "Per Se",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3726,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/113256681836649808083/photos\">Keira Chu</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAghv_odjFDfGdC61W50DObT6qrT4okSSYqX4bHdwGmtRupHf3oXynNGdNAhRvhOqoTnIyKgf4ALQN8Ol2PWdglflWpByWbbG_yLtfDI8HhYiOD3P9WbSfIKjoB-JI_x82EhBioAnfdfd9nFxdS7BhpVLKGhQ3lRRy6lxvyQUtg_w6-PQCvOK24g",
//                             "width": 8520
//                         }
//                     ],
//                     "place_id": "ChIJp3PsL_ZYwokRZYqs_40RJF4",
//                     "price_level": 4,
//                     "rating": 4.6,
//                     "reference": "CmRRAAAAvRHUmI39DILmr5BmMgqrgqMDdp9R-pjfPN3JMlep_PKFcz0dY60l9WlJLeRFhguHnOPuvUlVCVdHdWJyQbYERBM8qlfflge50rC-xpcfj02FXL_7w8pfxZ_4V-DL_CZ7EhBHKZoLkQXdPBkKirBgmXJhGhQI4ImiwPGimJ3yGmSyUhh21P3uGw",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "12 E 12th St, New York, NY 10003, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.734207,
//                             "lng": -73.99369899999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7355884802915,
//                                 "lng": -73.99232571970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7328905197085,
//                                 "lng": -73.99502368029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "343b062c1a8af2bd222c4aedad863f3f91391b0a",
//                     "name": "Gotham Bar and Grill",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3024,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/105563121448815745365/photos\">Kevin Guzewich</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAClJCkjdbb677ilV8-5GKTwv4ONvzL_PKAgTSXouMxni_RMROb4LCZwEQqaDRHEnb1pfWyzi7RFZkYnndpvAK7fPX9OXAyPWKPjT9A377FJpmvuciDK9fIoSoFwEd7SNtEhDmSJmmB3RrruSwE3rmD7QFGhRM0nyQU2sbKWnexqFU6wLuG5D6rQ",
//                             "width": 4032
//                         }
//                     ],
//                     "place_id": "ChIJZ72FzplZwokRmcA7CQzDMj0",
//                     "price_level": 4,
//                     "rating": 4.5,
//                     "reference": "CmRRAAAAx9pyQyoaKOy-hqZ9qfpDlfw2t5Y-UvX9WoEG17DXEekEN39S7iC7wiCMlWHFKwxe4FoYNpUyPdMn1eU3Yx1hhNeEbk1VO6fVk8UyOB8alyPDMViwU1dN4fWlLxLpM3xSEhDq8j8JN5tnEqzFdjY14FqFGhTFTut_GDUwg2LDRns35-FEKbGSHw",
//                     "types": [
//                         "bar",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "Metropolitan Life North Building, 11 Madison Ave, New York, NY 10010, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.741726,
//                             "lng": -73.987173
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7429459302915,
//                                 "lng": -73.98593171970849
//                             },
//                             "southwest": {
//                                 "lat": 40.7402479697085,
//                                 "lng": -73.9886296802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "f758e0d7f68c659682afdb4b1c0749e7d3623839",
//                     "name": "Eleven Madison Park",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1200,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/102127816559576392189/photos\">Tammy Liu</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAhIwh9JJiBdd1oEg6br7zubqVaKYmtzWyEOmaNrexTkAv49FaUwav9BSGE2CaBCE8sbMH_KMrEW1hFepmig89ryHe9ARwlwplPWMBlRpdCxdWjx6u6OvqwMVx7PbVOPzMEhAFFXkQPX_eNpIwxbdea7PcGhQSJR1GzuPyROZU85Msxl2ExnSTKg",
//                             "width": 1800
//                         }
//                     ],
//                     "place_id": "ChIJEWbXz6ZZwokRLKmKrtPfVFY",
//                     "price_level": 4,
//                     "rating": 4.6,
//                     "reference": "CmRRAAAAwU8HP7wc71uiJLojolF0dMR8rIap0JmAR0F3eFAmQQNKmmrB0-CmkPgbKnzEEXQtlIzmyxIqNn0liW7MH9nr-EpUgOrZDlAVl23mS5N7WGq3wJhoHaxBr5x8-42rip6tEhAF4dbSQGyslrdYQQSQxcHoGhT3K37xz9EXxfQZwrRD3v7tDgee4g",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "41 W 42nd St, New York, NY 10036, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.754538,
//                             "lng": -73.98250279999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.75574133029149,
//                                 "lng": -73.98125016970847
//                             },
//                             "southwest": {
//                                 "lat": 40.7530433697085,
//                                 "lng": -73.9839481302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "bd46c7f5f2917d7af1352e17cdd3cbb7028eb25d",
//                     "name": "Gabriel Kreuther",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1365,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/107389134674463250002/photos\">Gabriel Kreuther</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA4RL8oz3Muy8gzt28LxFJPrN-kfA1urWiJ0B4utckPMNKjLIgS6vrPuMsBfm7NRTOr6SzknfY9hAHNMmU3tUBni1vYLKdDArCtjVDWrlSwlCsHy1qOOFtPcXF_0nvs38aEhBAhE5p4WLN8_60kbO9I1DfGhQusHKofUlerirr3AouHHeWckNZsQ",
//                             "width": 1369
//                         }
//                     ],
//                     "place_id": "ChIJw_TGEwBZwokR-zLts543O-4",
//                     "price_level": 3,
//                     "rating": 4.6,
//                     "reference": "CmRSAAAAr26bDqDhu0JhC7XJk2RVQApmfmlw_4QHL8zxf6iWbEOAKk6JJciczZqmy_VvB99ofjg_FvzXp7cxljWMZzsjVJK7gGAmrRlzeutBjwtyEG150xmLy5exq_kKCZrGDQ0kEhA9dR2ZMWVqTEKyWg0YlywLGhTuF9Z0guV0H8tMTWKU8BSlWeRRRA",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "9 W 53rd St, New York, NY 10019, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.761081,
//                             "lng": -73.976753
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.76242998029149,
//                                 "lng": -73.97540401970849
//                             },
//                             "southwest": {
//                                 "lat": 40.75973201970849,
//                                 "lng": -73.97810198029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "804d4d52a0fb7770d8acfe511699538ec5f0958d",
//                     "name": "The Modern",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1365,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/100489217038255503401/photos\">The Modern</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAv6VldtsX12YxPZFvXtCZd1pSrCcr500tEUaDOt5eKMR66eFr9la-o4jQQXUC8z_N8YIBWCEl_o02Xh2RbJqm8LkXJi7docIiCcLa4tnaLRAP0tLJzaXtUWXQIh_Na7PNEhBbCt2iaws0hChY7TVyjUg2GhSNkGoC4aU73e7oEyH_5kw-6S1zHg",
//                             "width": 1367
//                         }
//                     ],
//                     "place_id": "ChIJMW-gxPtYwokRzDlnsRgq9rA",
//                     "price_level": 4,
//                     "rating": 4.5,
//                     "reference": "CmRSAAAA4BEWUQFEqYzZsyPIdBLI7Q63g7AGel-MTUz4xAxO8ch0lB8YVYI8nn-jvR7FqWu3ECZYr4fAjfEamE_AvCrP65k04VH74meKbfTCkNAf_G-7TnivPam2C-NRKCyxwJ8CEhAt8uSZG31fXGYoMuzOTENHGhRnPCQZeJBTOpkcOxbeng7u5NClLA",
//                     "types": [
//                         "bar",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "47 E Houston St, New York, NY 10012, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.72464129999999,
//                             "lng": -73.994739
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.72606958029149,
//                                 "lng": -73.9933627697085
//                             },
//                             "southwest": {
//                                 "lat": 40.72337161970849,
//                                 "lng": -73.9960607302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "257b24156e15fbabfa39641fe56fa6462605e3cc",
//                     "name": "Estela",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 4032,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/107231714396617814703/photos\">Ling Li</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA9D7vf6iCiLL1hjVrfhko7VSBxKb2VbqPRN9Cfcg0xzIEM9YaX_opO_18y1jhu5H2XmbOYpy972o0FVw94V7DPRX_lJqaZdkV4kQ4ur9JzB3YjCk36WHQNnRnFFNWH0q6EhCNxygnPg45d3_YkC-hINMGGhQ8PZ0K7mmQ8q3katbfnAG3VxurxA",
//                             "width": 3024
//                         }
//                     ],
//                     "place_id": "ChIJf3f-f4VZwokRcBCEciTOGRQ",
//                     "price_level": 3,
//                     "rating": 4.5,
//                     "reference": "CmRRAAAAz5BgMlfCw0EeEeOXGD3FJ5wODigXJgSL3SjRvMFWbxW_LKs5dZf2a7dHrJJyADPGVbeeMFbx6Jnj6ROMGFuZI5eHBJthKeENMYs3Jum6P8T7qCBBs-wq-JlhQOZ6mgCoEhDAQIDWZOc6d4-xAN2SKRZcGhSur8CkPThKQw79GFRYrUmp3GsCTQ",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "178 Broadway, Brooklyn, NY 11211, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.709819,
//                             "lng": -73.962467
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7112116802915,
//                                 "lng": -73.9611154697085
//                             },
//                             "southwest": {
//                                 "lat": 40.7085137197085,
//                                 "lng": -73.96381343029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "cc507a5029419584b2061f374000114cd291d84b",
//                     "name": "Peter Luger Steak House",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1268,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/112110162861336990395/photos\">Ahmed Allam</a>"
//                             ],
//                             "photo_reference": "CmRaAAAACl56wcc906ffcaxkcMwkzOzFeKgC-mg0cOKsZgkbkFqo3jtUiNsulJGhWq99PIK74SDq20TP0eqA2mZYzj4Kh7V73LQHSrh6X-_QHCLizx5FPmOWDmPppuwp16LBukZWEhAWZEPwVsaebd4daOtMZ-izGhRuwNZ0tkhsBOgWWaORKMYpIqRK9A",
//                             "width": 1242
//                         }
//                     ],
//                     "place_id": "ChIJR_bK295bwokR8gM6QgEdmkY",
//                     "price_level": 4,
//                     "rating": 4.3,
//                     "reference": "CmRRAAAAswEG7wjzjdNpQZdtS2EK6qc7pM60I3reiVpRhR8MTp_Yef6UAI_8L5VuudwPrMvNl-Crpq7ikBCwG6_yImW_BBHUBGcyqvOWp1_Gij0Z_5CFa0u25Nu4Fl1VL9L8FMW5EhA5N4eXqKEZIMkz335kC_i6GhRjrqmKiPWsJ2XwrAi7OKrNcgNfPA",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "240 E 58th St, New York, NY 10022, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7600624,
//                             "lng": -73.96556629999999
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.76150593029149,
//                                 "lng": -73.9641475697085
//                             },
//                             "southwest": {
//                                 "lat": 40.7588079697085,
//                                 "lng": -73.96684553029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "ec27c4405756c88482516d57ce03739068355b4a",
//                     "name": "Club A Steakhouse",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3456,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/102400989400172138580/photos\">Emily Bakaj</a>"
//                             ],
//                             "photo_reference": "CmRaAAAArSUmhYZElR2cqNh6Ubcj6Km_ey0boOrSsGCKXJZBFsjA8WiCA9Ts0BYzSl1ojN1R1k6H-5Jwq06dFOTonKLcbBatBSiEMaGWsiz1Sxh3--mNqxGK7AieT7ChaJnexwIVEhDWCtN2RwTBjWOifsnv0T8tGhRbsbhLQXGKrdwlfdIULkRUu9tFtA",
//                             "width": 4608
//                         }
//                     ],
//                     "place_id": "ChIJhWkA1eVYwokRPKlaxy81SAY",
//                     "price_level": 3,
//                     "rating": 4.5,
//                     "reference": "CmRRAAAAhOMWjRg8R3K-SHwirrN6Ln4C6CNWl6ICkGWsPP40hxsoIbyCtN6VyU2CCcGV88pIPs77EixD8DstKYXCK43J7QztfgFJC1DIb3WXNy-0R5xlwINSoIUOghM6yWW8kVfDEhDbdHfYjegT4fwCjRoF8BcvGhQX9MW3pVK07cZEsk16Yailc1Omig",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "1241 Amsterdam Ave, New York, NY 10027, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.81004710000001,
//                             "lng": -73.9584781
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.81143228029151,
//                                 "lng": -73.95721536970849
//                             },
//                             "southwest": {
//                                 "lat": 40.80873431970851,
//                                 "lng": -73.9599133302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "b605d46f3011e337f2e75e269bb6b4f8d0853468",
//                     "name": "Flat Top",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 2988,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/108230965180565314385/photos\">Qahtan AL-Jammali</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAgxC_FNJmaZhkTWYxpYuO2Q3xVAyKPTOWj1aPYQLfK1aE-Raj5ORFaQ_2KwMFG8ahG-LZtuD8PzDXRwtC8A1F1B4d1isMqc8srGplMPoRov3stCTMesuDlGR1wAoHzDkxEhDnJYa_0zFrR6785hIeC8ywGhSdnc8AYS3Z8pwy1U8sjUNZPrkcKA",
//                             "width": 5312
//                         }
//                     ],
//                     "place_id": "ChIJBWhERBX2wokRAkCnvxPY9lw",
//                     "price_level": 2,
//                     "rating": 4.3,
//                     "reference": "CmRRAAAAo4Tz7EEVrnJgwPN7G27dEjWivz-cFvpDgBGDw8nOc2xCg8-8b9NPIvBhFyzLCaOwe7UEsEcJiPiUPXPcUbBfgSwlRRyPly-sdhqkyVba1e5XjBxs8SBXuhkxlHDAqfAeEhBIOIRIGJz460PUrdpNPlfkGhQTnSbbiB_cTetloYQo3r3oqrPmvA",
//                     "types": [
//                         "bar",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "127 Orchard St, New York, NY 10002, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7196729,
//                             "lng": -73.98968090000001
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7210212802915,
//                                 "lng": -73.98836696970848
//                             },
//                             "southwest": {
//                                 "lat": 40.7183233197085,
//                                 "lng": -73.9910649302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "688e7118802e5d647427780258d276023ccde055",
//                     "name": "Russ & Daughters Cafe",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 360,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/116657897098896826230/photos\">Russ &amp; Daughters Cafe</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAwIcOD3g2-OCcln3a4h3tLwx8nxiZdKGLO-9tCQwXNOcb6c-pkOlpZTkg70VOviFb1NVJycNydH4RgBMKWBZMupfyyr-vtlLHEjIAq8PjGxEQZXsRp4RqfxoVxcYCNVAhEhC4-mlObpInfB641taStbpOGhQB72UIpK_D9rknObWi2xqDdymoQQ",
//                             "width": 357
//                         }
//                     ],
//                     "place_id": "ChIJ53yq2oZZwokRqIHSP4qZT3o",
//                     "price_level": 2,
//                     "rating": 4.6,
//                     "reference": "CmRRAAAAGLA7i_zcGW0WamKdghwkD4J2MF4BoTnO-f2OLMRjEEF2yxq2Vxer-08x8_4j31Ac1qFGoTNpSwyYuc8IBhacVOEOPnxuX3hk3pTDYA2asScYR56cjdmpXHLJzpZQh1u7EhC8NT2ySetXvc_WRZXxG9w9GhTB0YRoL7ZBhYduWlByYKVdeKS3-Q",
//                     "types": [
//                         "bakery",
//                         "restaurant",
//                         "food",
//                         "store",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "142 Orchard St, New York, NY 10002, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7200208,
//                             "lng": -73.9891633
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7213831802915,
//                                 "lng": -73.9878601697085
//                             },
//                             "southwest": {
//                                 "lat": 40.7186852197085,
//                                 "lng": -73.9905581302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "c067408df4b60282a8b470813e7581b7cfdaceba",
//                     "name": "Wildair Food and Wine",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3824,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/110683553841105199970/photos\">Oskar von Hauske</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAwMHnGJxyLwlu63uEor-Lg2E-wGs4xmQlxlbFdqWGJB6Mwy2J99WMdf6fP74YPkjO4FogyfyGur5bzq5FhQEipP_4qSmCC1YzgdKstMFLc_PRGdHiF-51JdqkjfjF63GPEhD6k7HqV9_N14J4AZIVVJZhGhRTGKpG82AdCEh1QLOogjGmp8wt_w",
//                             "width": 2867
//                         }
//                     ],
//                     "place_id": "ChIJfZsx0ClawokRCNMYMdZ_smg",
//                     "price_level": 2,
//                     "rating": 4.4,
//                     "reference": "CmRRAAAAA9ZfUG4f6xofxjRyrZPsv4Bsp635ViWxJSzempWtHuDh5bTdS7lD1g2A9r-tt3YfHZXT-okgjraG4gNsFtgLdFQ1BS27YPs-p-irTrHYPMlzbndWTaVRG3XyY5MeRR_AEhACRVYhcju7lUd3aXYpAvo0GhRrEaTTyxGWmFaoVfQOltvbAFZYEQ",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "35 E 21st St, New York, NY 10010, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7396162,
//                             "lng": -73.9883565
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7408515802915,
//                                 "lng": -73.9870568197085
//                             },
//                             "southwest": {
//                                 "lat": 40.7381536197085,
//                                 "lng": -73.9897547802915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "400cd12f069856ace98966a9b6cb1f300b7c66c0",
//                     "name": "Cosme",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1296,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/105641580144879585384/photos\">Cosme</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAOHXKcBFxMgMYDvWdCz2CgaK6AiEFQOy12UbNGfE4RTgBUZ0TTZzG3DKIxJRM_vaK-XslPhxyEkiM_FCcAAIZqqbQF5z3pRqMaOpRqw6RKntLwSNPavEn0v9YrGTVkMs-EhBuhOhZtwU-iEgPwXjMamBVGhQOKWgVC7pdWzDQtBW_c0w4RGaifQ",
//                             "width": 1296
//                         }
//                     ],
//                     "place_id": "ChIJT-gYZKFZwokR7O8LLYuYMjU",
//                     "price_level": 2,
//                     "rating": 4.4,
//                     "reference": "CmRRAAAATCNJAzaSG7tOXJJkMHcJSTf9MN6RN8WQoyDfmv8yXMgBqtNabIE1-H7GgGs3DBdpUkyoa-0CCMUZwFXIahus00lKfUPMz98xuGEH9-T0lsSDzan7S23LIIYCxtHSBDgGEhDtUMuY4Fa-WJfIbkTSCPblGhRmtT2Y4Yag_cgQiOeSu-GN01_oFw",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "10003, 119 1st Avenue, New York, NY 10003, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.727263,
//                             "lng": -73.985845
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7285625802915,
//                                 "lng": -73.9843767697085
//                             },
//                             "southwest": {
//                                 "lat": 40.7258646197085,
//                                 "lng": -73.98707473029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "084a0fcc749a6625e7b0a5aee103f3ab1d84136c",
//                     "name": "Oiji",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1318,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/111173771909374722776/photos\">Oiji</a>"
//                             ],
//                             "photo_reference": "CmRZAAAAR3G46FJ-QBzpJWKrMK0QrqqzuC_Tbola-Jcrt6HSXEYf4AZ6s8-2zinPCWwPndpjkkTaTArzbLfsjjncIzIyKjh9-WKJLMNVYVw5xTrdGWtk549rSwTy5qPqTx9UMqxMEhBtyyfkLAToTLKdr4Iuk3N2GhRS7o2CJFoX0SzvQJ4V2VKFLVeQog",
//                             "width": 1313
//                         }
//                     ],
//                     "place_id": "ChIJ9_VJHp1ZwokRRhe-9rLmBb8",
//                     "price_level": 3,
//                     "rating": 4.4,
//                     "reference": "CmRSAAAAeFK4CCUvR5GwLAFy7pg4b4EPX6zklUqMcgRde_rXxjkVRtiWoRCy3YOFWqP-kqT8xSYvhYFs1iAvlgTTcyR97dwHLlNeIskv0tGHfiaQdarT1_Nn5kSlZiqo9tct5mq6EhCRQBqRsyZCUF1k0uSpNY2rGhTSpd61AANBo-KLPP6avlY0PIVlFw",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "131 Sullivan St, New York, NY 10012, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7264898,
//                             "lng": -74.0021771
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7278729302915,
//                                 "lng": -74.0008660697085
//                             },
//                             "southwest": {
//                                 "lat": 40.7251749697085,
//                                 "lng": -74.0035640302915
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "f91d4f3c33f0cb773066614d78be838f6ed5eeb9",
//                     "name": "The Dutch",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1366,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/114365317263368146080/photos\">The Dutch</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAT_giYIXChwn67p8vXFPfOo4VNryT_2wpnfrzoIrwGm3TjPwcRX7zW5nrSFuP1l9IG3Fq5rrI6aPDr3UOQWonrqVthwGxSYjY6KXsOxRPhurFS6lo98XNbbRODWV4mKd2EhBo2-gyN08yCDIhIADvfPLbGhQB9hNk2pQZPwoZd6GDxq-JeqZ-fw",
//                             "width": 1384
//                         }
//                     ],
//                     "place_id": "ChIJ3RB9uI1ZwokRxCJXW-HpYZI",
//                     "price_level": 3,
//                     "rating": 4.1,
//                     "reference": "CmRSAAAArwYUKhvyTOTZuX2b77MSZJJ-89qiLpsZWXYK3hWxqVgdNfzJc9LX7_Nkemg9Dei3g0FvE8yRkL5SXtCzkZSZarI8YI8ld1TtjX1O5POOGo5XfhwAyiznY9944kg3xUtjEhAiuvMAG3wG3yPpY_wcUH-0GhREPCrZlOCko1St15Za2E9cUfWeIA",
//                     "types": [
//                         "bar",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "355 Metropolitan Ave, Brooklyn, NY 11211, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.7142631,
//                             "lng": -73.9560616
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.7155400302915,
//                                 "lng": -73.9547475697085
//                             },
//                             "southwest": {
//                                 "lat": 40.7128420697085,
//                                 "lng": -73.95744553029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "6d5cb18b6dd00dc9e4d9f6ae0f6c46da26baac0c",
//                     "name": "St. Anselm",
//                     "opening_hours": {
//                         "open_now": false,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 1365,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/104111246635874032234/photos\">ZAGAT</a>"
//                             ],
//                             "photo_reference": "CmRaAAAA_RSEtv7u4V7Wqhwf5yYoNKALecD6NUOkllAuVqPFKkvZ_OIQyvjAtpY1VtkxcYhh9yMG48wW3_3mM6A0NrDN7JCaycb3HV2ceZAAcYhoF_mpQuWHyQ4VYk1pE1r-lFj4EhAbPWuGbWbG_UXJKDhgY5-cGhQavUDLJamB18qhXgJf6IkUA07LQQ",
//                             "width": 2048
//                         }
//                     ],
//                     "place_id": "ChIJc3Sn6BNewokR_RkenZvQhlM",
//                     "price_level": 2,
//                     "rating": 4.5,
//                     "reference": "CmRRAAAA3R3TWBPlQ95822E_B0_3Rgrfm_3yK6I_CFjBgedGMI-E0rS-ErQgTx7s5tLRcWXobd5qCA8bnmpFpcPuQBkhQ61YnDX9p5DF1wXxnDmtdYiI-9ojSTHi4xBTTea3RC7IEhDZo4fqutITBOttxgCwx-g5GhSAbk2gy8DzbhAdiWq9YHGpMCLlkQ",
//                     "types": [
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 },
//                 {
//                     "formatted_address": "69 7th Ave S, New York, NY 10014, United States",
//                     "geometry": {
//                         "location": {
//                             "lat": 40.73218879999999,
//                             "lng": -74.0033937
//                         },
//                         "viewport": {
//                             "northeast": {
//                                 "lat": 40.73357833029149,
//                                 "lng": -74.0021448197085
//                             },
//                             "southwest": {
//                                 "lat": 40.73088036970849,
//                                 "lng": -74.00484278029151
//                             }
//                         }
//                     },
//                     "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//                     "id": "7e3f519a691dea53fde5703d169ee2fa6abeda4a",
//                     "name": "Bleecker Street Pizza",
//                     "opening_hours": {
//                         "open_now": true,
//                         "weekday_text": []
//                     },
//                     "photos": [
//                         {
//                             "height": 3024,
//                             "html_attributions": [
//                                 "<a href=\"https://maps.google.com/maps/contrib/107861206092985225681/photos\">Chris Gonz</a>"
//                             ],
//                             "photo_reference": "CmRaAAAAURFvJAWdqnPHCB0lwIOi9cn4VOwrZ-HrUI5ANuI1QZp7j3Y6Nnv-LxgZpZKEvVGLNRI69sDfrj7B9XgUS1RVIPnW2xU39lrTPhgAWYfv5OqEhVu7kLt2uRIRtYT4oNRhEhCyoZAwO-UEdXhss-uV-yAkGhQL4UZjNSCiVTvAXJX8c1i4CNu13w",
//                             "width": 4032
//                         }
//                     ],
//                     "place_id": "ChIJrXXKn5NZwokR78g0ipCnY60",
//                     "price_level": 1,
//                     "rating": 4.2,
//                     "reference": "CmRSAAAAbaGWkI7oq_vRjACNgIOiadWbu4OnNpAAaSHZbxa3272RHjiMjYVq4Mq5XOGEwcB8V8NhIMgyF9Xwys49IpshBH21EMEGAFg2T-T9lZzx7Q2ffTsWrHvxINVD7jUEiYgnEhCjpQd1F9cO9ACtu_h4liyIGhR-rf0NTW504nXB3SBJ6zJ9dBb41Q",
//                     "types": [
//                         "meal_delivery",
//                         "meal_takeaway",
//                         "restaurant",
//                         "food",
//                         "point_of_interest",
//                         "establishment"
//                     ]
//                 }
//             ],
//             "status": "OK"
//         }
//     }
// ];