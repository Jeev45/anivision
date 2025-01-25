var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.22879730864492842,
        "pitch": 0.23184298574722106,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.6965873641959881,
          "pitch": 0.10109668689262463,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": 1.5819877809149414,
          "pitch": 0.01124699216422087,
          "rotation": 0,
          "target": "2-master-bedroom"
        },
        {
          "yaw": 0.9710042731490116,
          "pitch": 0.017351657298130263,
          "rotation": 0,
          "target": "3-bedroom1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5071776051012762,
          "pitch": -0.012326493341003442,
          "title": "Main Door",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.259997021809827,
          "pitch": 0.17705835660237668,
          "rotation": 0,
          "target": "0-hall"
        },
        {
          "yaw": 2.464399052429693,
          "pitch": 0.031102396784193687,
          "rotation": 0,
          "target": "2-master-bedroom"
        },
        {
          "yaw": 1.140068830568584,
          "pitch": 0.02038910016689499,
          "rotation": 0,
          "target": "3-bedroom1"
        },
        {
          "yaw": 2.7794396639592804,
          "pitch": 0.03041413924077574,
          "rotation": 0,
          "target": "4-bedroom2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7969727627036871,
          "pitch": -0.0019803335246635356,
          "title": "Gallery",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-master-bedroom",
      "name": "Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8189742708591865,
          "pitch": 0.04506873929627275,
          "rotation": 0,
          "target": "0-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.2184138665444744,
          "pitch": -0.005299233372273449,
          "title": "Bathroom",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-bedroom1",
      "name": "Bedroom1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7690811695917255,
          "pitch": 0.07541929422633942,
          "rotation": 0,
          "target": "0-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom2",
      "name": "Bedroom2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3709662321693248,
          "pitch": 0.10576087499028475,
          "rotation": 0,
          "target": "0-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
