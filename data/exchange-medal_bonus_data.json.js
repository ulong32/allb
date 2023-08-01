const exchangeMedalBonusJson = [
    /*
    {
        "name": "",
        "index": "",
        "lineup": {
            "memoria": [
                { "caption": "", "ratio": 1500, "content": [] }
            ],
            "costume": [
                { "caption": "", "ratio": 1500, "content": [] }
            ],
            "item": [
                { "caption": "", "ratio": 1500, "content": [] }
            ]
        }
    },
    */
    {
        "name": "新章グラン・エプレ編ボーナスメダル",
        "index": "new-ch-gran-eple",
        "lineup": {
            "memoria": [
                { "caption": "メモリア", "ratio": 500, "content": [524, 525, 526, 527, 528, 572, 573, 574, 575, 576, 577] }
            ],
            "costume": [
                { "caption": "衣装", "ratio": 500, "content": [303, 304, 305, 306, 307, 334, 335, 336, 337, 338] }
            ],
            "item": []
        }
    },
    {
        "name": "エモーショナルメモリアボーナスメダルⅦ",
        "index": "emotional-7",
        "lineup": {
            "memoria": [ { "caption": "メモリア", "ratio": 1000, "content": [661, 312, 348, 363, 523, 571] } ],
            "costume": [],
            "item": [
                { "caption": "ガチャチケット", "ratio": 1000, "content": ["gacha-ticket_zokusei-fire", "gacha-ticket_zokusei-water", "gacha-ticket_zokusei-wind", "gacha-ticket_zokusei-light", "gacha-ticket_zokusei-dark"] },
                { "caption": "素材", "ratio": 300, "content": ["memoria_312_evolution", "memoria_312_awakening", "memoria_348_evolution", "memoria_348_awakening", "memoria_363_evolution", "memoria_363_awakening", "memoria_523_evolution", "memoria_523_awakening", "memoria_571_evolution", "memoria_571_awakening"] }
            ]
        }
    },
    {
        "name": "衣装交換メダル7月",
        "index": "202307-costume",
        "lineup": {
            "memoria": [],
            "costume": [ { "caption": "衣装", "ratio": 1500, "content": [331, 332, 330, 314, 315, 289, 290, 272, 273, 266, 262, 263, 261, 259, 252, 253, 246, 245, 247, 243, 244, 239, 240, 241, 242, 236, 237, 238, 234, 233, 225, 226, 227, 222, 223, 214, 211, 212, 213, 209, 210, 204, 200, 202, 201, 197, 198, 196, 194, 195, 188, 189, 185, 186, 187, 183, 178, 179, 162, 163, 164, 173, 174, 175, 156, 155, 134, 143, 144, 130, 131, 132, 127, 128, 124, 125, 126, 123, 121, 122, 112, 113, 108, 109, 110, 102, 103, 99, 100, 91, 92, 93, 78, 79, 76, 77, 69, 70, 71, 72, 67, 68, 66, 62, 63, 64, 57, 58, 59, 54, 55, 56, 50, 51, 52, 45, 46, 47, 48, 49, 40, 41, 42, 43, 44, 37, 38, 39, 34, 35, 36, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 21, 22, 23, 24, 25, 26, 27, 28, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] } ],
            "item": []
        }
    },
    {
        "name": "2.5周年リリサマ!!ボーナスメダル",
        "index": "ririsama",
        "lineup": {
            "memoria": [ { "caption": "メモリア", "ratio": 400, "content": [591, 592, 586, 587, 589, 588, 578, 579, 580, 581, 567, 566, 569, 568, 570, 564, 557, 558, 559, 560, 561, 548, 549, 550, 551, 552, 538, 539, 533, 534, 535, 536, 505, 504, 498, 499, 500, 501, 502, 480, 481, 482, 484, 483, 474, 475, 467, 468, 470, 469, 471, 461, 454, 455, 456, 457, 458, 452, 453, 451, 449, 444, 445, 446, 447, 448, 431, 432, 427, 428, 429, 430, 420, 421, 418, 419, 415, 414, 416, 410, 411, 406, 407, 408, 409, 403, 404, 405, 402, 398, 399, 400, 401, 394, 395, 396, 397, 392, 391, 386, 387, 388, 389, 379, 380, 381, 382, 371, 372, 373, 367, 368, 369, 370, 364, 365, 356, 352, 353, 354, 355, 349, 350, 351, 345, 346, 338, 334, 335, 336, 337, 332, 329, 331, 330, 326, 327, 324, 322, 323, 318, 320, 319, 321, 307, 308, 302, 303, 304, 305, 299, 300, 298, 288, 289, 286, 287, 277, 278, 279, 261, 262, 263, 264, 251, 250, 232, 233, 221, 220, 216, 218, 214, 215, 213, 209, 210, 211, 208, 206, 204, 202, 203, 198, 193, 191, 192, 190, 187, 188, 189, 186, 176, 174, 175, 173, 170, 171, 172, 169, 162, 158, 159, 161, 153, 155, 148, 149, 123] } ],
            "costume": [ { "caption": "衣装", "ratio": 400, "content": [345, 346, 331, 332, 330, 314, 315, 290, 289, 272, 273, 266, 262, 263, 261, 259, 252, 253, 246, 245, 247, 243, 244, 240, 241, 242, 239, 236, 237, 238, 234, 233, 225, 226, 227, 222, 223, 214, 211, 212, 213, 209, 210, 204, 200, 202, 201, 197, 198, 196, 194, 195, 188, 189, 185, 186, 187, 183, 178, 179, 173, 174, 175, 162, 163, 164, 156, 155, 143, 144, 134, 130, 132, 127, 128, 124, 125, 126, 123, 121, 122, 112, 113, 108, 109, 110, 102, 103, 99, 100, 91, 92, 76] } ],
            "item": []
        }
    },
    {
        "name": "リリィズシーズンガチャメダル7月",
        "index": "202307-season",
        "lineup": {
            "memoria": [ { "caption": "メモリア", "ratio": 1000, "content": [491, 490, 492, 493, 495, 494, 496, 497, 464, 465, 466, 424, 426, 425, 383, 384, 385, 377, 358, 359, 360, 361, 339, 341, 342, 340, 283, 284, 285, 270, 268, 269, 267, 245, 242, 243, 244, 230, 229, 231, 199, 200, 201, 197, 195, 196, 167, 168, 164, 165, 166, 144, 145, 146, 141, 142, 143, 138, 139, 140, 133, 135, 136, 134] } ],
            "costume": [ { "caption": "衣装", "ratio": 1000, "content": [284, 283, 285, 286, 287, 267, 268, 269, 249, 251, 250, 230, 231, 232, 228, 217, 218, 219, 220, 206, 207, 208, 176, 177, 168, 169, 167, 151, 152, 153, 141, 140, 142, 118, 119, 120, 116, 114, 115, 98, 95, 96, 97, 88, 89, 86, 87, 83, 84, 81, 82] } ],
            "item": []
        }
    },
    {
        "name": "プレミアボーナスメダル",
        "index": "premium",
        "lineup": {
            "memoria": [ { "caption": "メモリア(衣装付き)", "ratio": 1500, "content": [557, 558, 559, 560, 561, 548, 549, 550, 551, 552, 538, 539, 533, 534, 535, 536, 505, 504, 498, 499, 500, 501, 502, 480, 481, 482, 484, 483, 474, 475, 467, 468, 470, 469, 471, 461, 454, 455, 456, 457, 458, 452, 453, 451, 449, 444, 445, 446, 447, 448, 431, 432, 427, 428, 429, 430, 420, 421, 418, 419, 415, 414, 416, 410, 411, 406, 407, 408, 409, 403, 404, 405, 402, 398, 399, 400, 401, 394, 395, 396, 397, 392, 391, 386, 387, 388, 389, 379, 380, 381, 382, 371, 372, 373, 367, 368, 369, 370, 364, 365, 356, 352, 353, 354, 355, 349, 350, 351, 345, 346, 338, 334, 335, 336, 337, 332, 329, 331, 330, 326, 327, 324, 322, 323, 318, 320, 319, 321, 307, 308, 302, 303, 304, 305, 299, 300, 298, 288, 289, 286, 287, 277, 278, 279, 261, 262, 263, 264, 251, 250, 232, 233, 227, 226, 228, 221, 220, 216, 217, 218, 214, 215, 213, 209, 210, 211, 208] } ],
            "costume": [],
            "item": []
        }
    },
    {
        "name": "衣装交換メダル6月",
        "index": "202306-costume",
        "lineup": {
            "memoria": [],
            "costume": [ { "caption": "衣装", "ratio": 1500, "content": [314, 315, 289, 290, 272, 273, 266, 262, 263, 261, 259, 252, 253, 246, 245, 247, 243, 244, 239, 240, 241, 242, 236, 237, 238, 234, 233, 225, 226, 227, 222, 223, 214, 211, 212, 213, 209, 210, 204, 200, 202, 201, 197, 198, 196, 194, 195, 188, 189, 185, 186, 187, 183, 178, 179, 162, 163, 164, 173, 174, 175, 156, 155, 134, 143, 144, 130, 131, 132, 127, 128, 124, 125, 126, 123, 121, 122, 112, 113, 108, 109, 110, 102, 103, 99, 100, 91, 92, 93, 78, 79, 76, 77, 69, 70, 71, 72, 67, 68, 66, 62, 63, 64, 57, 58, 59, 54, 55, 56, 50, 51, 52, 45, 46, 47, 48, 49, 40, 41, 42, 43, 44, 37, 38, 39, 34, 35, 36, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 21, 22, 23, 24, 25, 26, 27, 28, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] } ],
            "item": []
        }
    },
    {
        "name": "リリィズシーズンガチャメダル6月",
        "index": "202306-season",
        "lineup": {
            "memoria": [ { "caption": "メモリア", "ratio": 1000, "content": [464, 465, 466, 424, 426, 425, 383, 384, 385, 377, 358, 359, 360, 361, 339, 341, 342, 340, 283, 284, 285, 270, 268, 269, 267, 245, 242, 243, 244, 230, 229, 231, 199, 200, 201, 197, 195, 196, 167, 168, 164, 165, 166, 144, 145, 146, 141, 142, 143, 138, 139, 140, 133, 135, 136, 134] } ],
            "costume": [ { "caption": "衣装", "ratio": 1000, "content": [267, 268, 269, 249, 251, 250, 230, 231, 232, 228, 217, 218, 219, 220, 206, 207, 208, 176, 177, 168, 169, 167, 151, 152, 153, 141, 140, 142, 118, 119, 120, 116, 114, 115, 98, 95, 96, 97, 88, 89, 86, 87, 83, 84, 81, 82] } ],
            "item": []
        }
    },
    {
        "name": "エモーショナルメモリアボーナスメダルⅥ",
        "index": "emotional-6",
        "lineup": {
            "memoria": [ { "caption": "メモリア", "ratio": 1000, "content": [628] } ],
            "costume": [],
            "item": [ { "caption": "ガチャチケット", "ratio": 1000, "content": ["gacha-ticket_zokusei-fire", "gacha-ticket_zokusei-water", "gacha-ticket_zokusei-wind", "gacha-ticket_zokusei-light", "gacha-ticket_zokusei-dark"] } ]
        }
    },
    {
        "name": "衣装交換メダル5月",
        "index": "202305-costume",
        "lineup": {
            "memoria": [],
            "costume": [ { "caption": "衣装", "ratio": 1500, "content": [314, 315, 309, 310, 311, 303, 304, 305, 306, 307, 289, 290, 272, 273, 266, 262, 263, 261, 259, 252, 253, 246, 245, 247, 243, 244, 240, 241, 242, 239, 236, 237, 238, 234, 233, 225, 226, 227, 222, 223, 214, 211, 212, 213, 209, 210, 204, 200, 202, 201, 197, 198, 196, 194, 195, 188, 189, 185, 186, 187, 183, 178, 179, 173, 174, 175, 162, 163, 164, 156, 155, 143, 144, 134, 130, 131, 132, 127, 128, 124, 125, 126, 123, 121, 122, 112, 113, 108, 109, 110, 102, 103, 99, 100, 91, 92, 93, 78, 79, 76, 77, 69, 70, 71, 72, 67, 68, 66, 62, 63, 64, 57, 58, 59, 54, 55, 56, 50, 51, 52, 45, 46, 47, 48, 49, 40, 41, 42, 43, 44, 37, 38, 39, 34, 35, 36, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 21, 22, 23, 24, 25, 26, 27, 28, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] } ],
            "item": []
        }
    },
    {
        "name": "リリィズシーズンガチャメダル5月",
        "index": "202305-season",
        "lineup": {
            "memoria": [ { "caption": "メモリア", "ratio": 1000, "content": [424, 426, 425, 383, 384, 385, 377, 358, 359, 360, 361, 339, 341, 342, 340, 283, 284, 285, 270, 268, 269, 267, 245, 242, 243, 244, 230, 229, 231, 199, 200, 201, 197, 195, 196, 167, 168, 164, 165, 166, 144, 145, 146, 141, 142, 143, 138, 139, 140, 133, 135, 136, 134] } ],
            "costume": [ { "caption": "衣装", "ratio": 1000, "content": [249, 251, 250, 230, 231, 232, 228, 217, 218, 219, 220, 206, 207, 208, 176, 177, 168, 169, 167, 151, 152, 153, 141, 140, 142, 118, 119, 120, 116, 114, 115, 98, 95, 96, 97, 88, 89, 86, 87, 83, 84, 81, 82] } ],
            "item": []
        }
    },
    {
        "name": "ラスバれ！GWボーナスメダル",
        "index": "gw",
        "lineup": {
            "memoria": [
                { "caption": "メモリア(衣装付き)", "ratio": 500, "content": [480, 481, 482, 484, 483, 474, 475, 467, 468, 470, 469, 471, 461, 454, 455, 456, 457, 458, 452, 453, 451, 449, 444, 445, 446, 447, 448, 431, 432, 427, 428, 429, 430, 420, 421, 418, 419, 415, 414, 416, 410, 411, 406, 407, 408, 409, 403, 404, 405, 402, 398, 399, 400, 401, 394, 395, 396, 397, 392, 391, 386, 387, 388, 389, 379, 380, 381, 382, 371, 372, 373, 367, 368, 369, 370, 364, 365, 356, 352, 353, 354, 355, 349, 350, 351, 345, 346, 338, 334, 335, 336, 337, 332, 329, 331, 330, 326, 327, 324, 322, 323, 318, 320, 319, 321, 307, 308, 302, 303, 304, 305, 299, 300, 298, 288, 289, 286, 287, 277, 278, 279, 261, 262, 263, 264, 251, 250, 232, 233, 221, 220, 216, 218, 214, 215, 213, 209, 210, 211, 208, 206, 204, 202, 203, 198, 193, 191, 192, 190, 187, 188, 189, 186, 176, 174, 175, 173, 170, 171, 172, 169, 162, 158, 159, 161, 153, 155, 148, 149, 123] }
            ],
            "costume": [],
            "item": []
        }
    },
    {
        "name": "リリィズシーズンガチャメダル4月",
        "index": "202304-season",
        "lineup": {
            "memoria": [ { "caption": "メモリア", "ratio": 1000, "content": [424, 426, 425, 383, 384, 385, 377, 358, 359, 360, 361, 339, 341, 342, 340, 283, 284, 285, 270, 268, 269, 267, 245, 242, 243, 244, 230, 229, 231, 199, 200, 201, 197, 195, 196, 167, 168, 164, 165, 166, 144, 145, 146, 141, 142, 143, 138, 139, 140, 133, 135, 136, 134] } ],
            "costume": [ { "caption": "衣装", "ratio": 1000, "content": [249, 251, 250, 230, 231, 232, 228, 217, 218, 219, 220, 206, 207, 208, 176, 177, 168, 169, 167, 151, 152, 153, 141, 140, 142, 118, 119, 120, 116, 114, 115, 98, 95, 96, 97, 88, 89, 86, 87, 83, 84, 81, 82] } ],
            "item": []
        }
    },
    {
        "name": "衣装交換メダル4月",
        "index": "202304-costume",
        "lineup": {
            "memoria": [],
            "costume": [ { "caption": "衣装", "ratio": 1500, "content": [289, 290, 272, 273, 266, 262, 263, 261, 259, 252, 253, 246, 245, 247, 243, 244, 240, 241, 242, 239, 236, 237, 238, 234, 233, 225, 226, 227, 222, 223, 214, 211, 212, 213, 209, 210, 204, 200, 202, 201, 197, 198, 196, 194, 195, 188, 189, 185, 186, 187, 183, 178, 179, 173, 174, 175, 162, 163, 164, 156, 155, 143, 144, 134, 130, 131, 132, 127, 128, 124, 125, 126, 123, 121, 122, 112, 113, 108, 109, 110, 102, 103, 99, 100, 91, 92, 93, 78, 79, 76, 77, 69, 70, 71, 72, 67, 68, 66, 62, 63, 64, 57, 58, 59, 54, 55, 56, 50, 51, 52, 45, 46, 47, 48, 49, 40, 41, 42, 43, 44, 37, 38, 39, 34, 35, 36, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 21, 22, 23, 24, 25, 26, 27, 28, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] } ],
            "item": []
        }
    },
    {
        "name": "エモーショナルメモリアボーナスメダルⅤ",
        "index": "emotional-5",
        "lineup": {
            "memoria": [ { "caption": "メモリア", "ratio": 1000, "content": [571] } ],
            "costume": [],
            "item": [ { "caption": "ガチャチケット", "ratio": 1000, "content": ["gacha-ticket_zokusei-fire", "gacha-ticket_zokusei-water", "gacha-ticket_zokusei-wind", "gacha-ticket_zokusei-light", "gacha-ticket_zokusei-dark"] } ]
        }
    },
    {
        "name": "役割ガチャメダル3月",
        "index": "202303-yakuwari",
        "lineup": {
            "memoria": [
                { "caption": "メモリア(通常前衛, 衣装付き)", "ratio": 1200, "content": [247, 261, 281, 319, 323, 327, 329, 338, 334, 350, 352, 364, 367, 371, 380, 387, 395, 398, 404, 406, 414, 416, 418, 427, 444, 449, 452, 454, 467, 480] },
                { "caption": "メモリア(特殊前衛, 衣装付き)", "ratio": 1200, "content": [248, 263, 322, 332, 335, 345, 351, 353, 365, 368, 373, 379, 386, 392, 397, 399, 407, 411, 415, 419, 428, 431, 445, 451, 455, 468, 481] },
                { "caption": "メモリア(支援, 衣装付き)", "ratio": 1200, "content": [162, 215, 278, 305, 321, 331, 336, 349, 370, 381, 391, 400, 405, 408, 420, 430, 432, 446, 453, 456, 469, 482] },
                { "caption": "メモリア(妨害, 衣装付き)", "ratio": 1200, "content": [161, 171, 175, 189, 211, 221, 251, 279, 320, 324, 337, 346, 355, 356, 369, 388, 396, 402, 410, 421, 447, 457, 470, 475, 483] },
                { "caption": "メモリア(回復, 衣装付き)", "ratio": 1200, "content": [155, 186, 203, 210, 249, 262, 282, 330, 354, 372, 382, 389, 394, 401, 403, 409, 429, 448, 458, 461, 471, 474, 484] }
            ],
            "costume": [],
            "item": []
        }
    },
    {
        "name": "衣装交換メダル3月",
        "index": "202303-costume",
        "lineup": {
            "memoria": [],
            "costume": [ { "caption": "衣装", "ratio": 1500, "content": [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 21, 22, 23, 24, 25, 26, 27, 28, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 59, 62, 63, 64, 67, 68, 66, 69, 70, 71, 72, 76, 77, 78, 79, 91, 92, 93, 99, 100, 102, 103, 108, 109, 110, 112, 113, 121, 122, 123, 124, 125, 126, 127, 128, 130, 131, 132, 134, 143, 144, 156, 155, 162, 163, 164, 173, 174, 175, 178, 179, 183, 185, 186, 187, 188, 189, 196, 194, 195, 197, 198, 200, 202, 201, 204, 209, 210, 211, 212, 213, 214, 222, 223, 225, 226, 227, 234, 233, 236, 237, 238, 239, 240, 241, 242, 243, 244, 246, 245, 247, 252, 253, 259, 262, 263, 261, 266, 272, 273] } ],
            "item": []
        }
    },
    {
        "name": "レギオンリーグ開催記念属性ガチャメダル2月",
        "index": "202302-zokusei",
        "lineup": {
            "memoria": [
                { "caption": "メモリア(火, 衣装付き)", "ratio": 1200, "content": [123, 148, 149, 170, 171, 172, 173, 174, 176, 202, 203, 204, 206, 220, 221, 247, 261, 262, 263, 264] },
                { "caption": "メモリア(風, 衣装付き)", "ratio": 1200, "content": [158, 159, 161, 162, 187, 188, 189, 191, 192, 193, 209, 210, 211, 208, 213, 214, 215, 251, 250, 249, 444, 447, 448, 449, 455, 456, 458, 461] },
                { "caption": "メモリア(光, 衣装付き)", "ratio": 1200, "content": [298, 299, 300, 302, 303, 304, 305, 307, 308, 318, 321, 332, 329, 331, 330, 338, 335, 336, 345, 346, 351, 352, 354, 356, 368, 370, 371, 373, 379, 381, 387, 388] },
                { "caption": "メモリア(闇, 衣装付き)", "ratio": 1200, "content": [277, 278, 279, 281, 282, 286, 287, 288, 289, 320, 319, 324, 322, 323, 326, 327, 334, 337, 349, 350, 353, 355, 364, 365, 367, 369, 372, 380, 382, 386, 389] }
            ],
            "costume": [],
            "item": []
        }
    },
    {
        "name": "レギオンリーグ開催記念役割ガチャメダル2月",
        "index": "202302-yakuwari",
        "lineup": {
            "memoria": [
                { "caption": "メモリア(通常前衛, 衣装付き)", "ratio": 1200, "content": [247, 261, 281, 289, 303, 308, 319, 323, 327, 329, 338, 334, 350, 352, 364, 367, 371, 380, 387, 395, 398, 404, 406, 414, 416, 418, 427, 444, 449, 452, 454] },
                { "caption": "メモリア(特殊前衛, 衣装付き)", "ratio": 1200, "content": [248, 263, 298, 302, 304, 307, 322, 326, 332, 335, 345, 351, 353, 365, 368, 373, 379, 386, 392, 397, 399, 407, 411, 415, 419, 428, 431, 445, 451, 455] },
                { "caption": "メモリア(支援, 衣装付き)", "ratio": 1200, "content": [162, 215, 264, 278, 305, 321, 331, 336, 349, 370, 381, 391, 400, 405, 408, 420, 430, 432, 446, 453, 456] },
                { "caption": "メモリア(妨害, 衣装付き)", "ratio": 1200, "content": [161, 171, 175, 189, 211, 221, 251, 279, 320, 324, 337, 346, 355, 356, 369, 388, 396, 402, 410, 421, 447, 457] },
                { "caption": "メモリア(回復, 衣装付き)", "ratio": 1200, "content": [155, 186, 203, 210, 249, 262, 282, 330, 354, 372, 382, 389, 394, 401, 403, 409, 429, 448, 458, 461] }
            ],
            "costume": [],
            "item": []
        }
    },
    {
        "name": "エモーショナルメモリアボーナスメダルⅣ",
        "index": "emotional-4",
        "lineup": {
            "memoria": [ { "caption": "メモリア", "ratio": 1000, "content": [523, 312, 348, 363] } ],
            "costume": [],
            "item": [
                { "caption": "ガチャチケ", "ratio": 1000, "content": ["gacha-ticket_zokusei-light", "gacha-ticket_zokusei-dark"] },
                { "caption": "素材", "ratio": 300, "content": ["memoria_312_evolution", "memoria_312_awakening", "memoria_348_evolution", "memoria_348_awakening", "memoria_363_evolution", "memoria_363_awakening"] }
            ]
        }
    },
    {
        "name": "ペタMAXボーナスメダル",
        "index": "peta-max",
        "lineup": {
            "memoria": [ { "caption": "メモリア", "ratio": 1200, "content": [209, 210, 211, 208, 212, 213, 214, 215, 216, 217, 218, 220, 221, 224, 223, 227, 226, 228, 230, 229, 231, 232, 233, 235, 236, 245, 242, 243, 244, 246, 251, 250, 247, 248, 249, 261, 262, 263, 264, 265, 270, 268, 269, 267, 271, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 291, 298, 301, 299, 300, 302, 303, 304, 305, 307, 308, 317, 318, 320, 319, 321, 324, 322, 323, 325, 326, 327, 332, 329, 331, 330, 333, 338, 334, 335, 336, 337, 339, 341, 342, 340, 343, 345, 346, 349, 350, 351, 352, 353, 354, 355, 356, 358, 359, 360, 361, 362, 364, 365, 367, 368, 369, 370, 371, 372, 373, 377, 379, 380, 381, 382, 378, 383, 384, 385, 386, 387, 388, 389, 392, 391, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 413, 415, 414, 416, 417, 420, 421, 418, 419, 424, 426, 425, 427, 428, 429, 430, 431, 432, 435, 444, 445, 446, 447, 448, 449, 450, 452, 453, 451, 454, 455, 456, 457, 458, 461] } ],
            "costume": [],
            "item": []
        }
    },
    {
        "name": "レギオンリーグ開催記念役割ガチャメダル1月",
        "index": "202301-yakuwari",
        "lineup": {
            "memoria": [
                { "caption": "メモリア(通常前衛, 衣装付き)", "ratio": 1200, "content": [123, 158, 172, 209, 247, 261, 277, 281, 289, 303, 308, 319, 323, 327, 329, 338, 334, 350, 352, 364, 367, 371, 380, 387, 395, 398, 404, 406, 414, 416, 418, 427] },
                { "caption": "メモリア(特殊前衛, 衣装付き)", "ratio": 1200, "content": [187, 206, 216, 220, 232, 250, 248, 263, 298, 302, 304, 307, 322, 326, 332, 335, 345, 351, 353, 365, 368, 373, 379, 386, 392, 397, 399, 407, 411, 415, 419, 428, 431] },
                { "caption": "メモリア(支援, 衣装付き)", "ratio": 1200, "content": [162, 215, 264, 278, 288, 300, 305, 321, 331, 336, 349, 370, 381, 391, 400, 405, 408, 420, 430, 432] },
                { "caption": "メモリア(妨害, 衣装付き)", "ratio": 1200, "content": [161, 171, 175, 189, 211, 221, 251, 279, 320, 324, 337, 346, 355, 356, 369, 388, 396, 402, 410, 421] },
                { "caption": "メモリア(回復, 衣装付き)", "ratio": 1200, "content": [155, 186, 203, 210, 249, 262, 282, 330, 354, 372, 382, 389, 394, 401, 403, 409, 429] }
            ],
            "costume": [],
            "item": []
        }
    },
    {
        "name": "レギオンリーグ開催記念属性ガチャメダル12月",
        "index": "202212-zokusei",
        "lineup": {
            "memoria": [
                { "caption": "メモリア(水, 衣装付き)", "ratio": 1200, "content": [153, 155, 169, 175, 186, 190, 198, 216, 218, 232, 233, 248, 392, 391, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411] },
                { "caption": "メモリア(風, 衣装付き)", "ratio": 1200, "content": [158, 159, 161, 162, 187, 188, 189, 191, 192, 193, 209, 210, 211, 208, 213, 214, 215, 251, 250, 249] },
                { "caption": "メモリア(光, 衣装付き)", "ratio": 1200, "content": [298, 299, 300, 302, 303, 304, 305, 307, 308, 318, 321, 332, 329, 331, 330, 338, 335, 336, 345, 346, 351, 352, 354, 356, 368, 370, 371, 373, 379, 381, 387, 388] },
                { "caption": "メモリア(闇, 衣装付き)", "ratio": 1200, "content": [277, 278, 279, 281, 282, 286, 287, 288, 289, 320, 319, 324, 322, 323, 326, 327, 334, 337, 349, 350, 353, 355, 364, 365, 367, 369, 372, 380, 382, 386, 389] }
            ],
            "costume": [],
            "item": []
        }
    },
    {
        "name": "レギオンリーグ開催記念役割ガチャメダル12月",
        "index": "202212-yakuwari",
        "lineup": {
            "memoria": [
                { "caption": "メモリア(通常前衛, 衣装付き)", "ratio": 1200, "content": [123, 153, 158, 169, 172, 188, 209, 214, 218, 247, 261, 277, 281, 286, 289, 299, 303, 308, 319, 323, 327, 329, 338, 334, 350, 352, 364, 367, 371, 380, 387, 395, 398, 404, 406] },
                { "caption": "メモリア(特殊前衛, 衣装付き)", "ratio": 1200, "content": [149, 159, 170, 187, 206, 216, 220, 232, 250, 248, 263, 298, 302, 304, 307, 322, 326, 332, 335, 345, 351, 353, 365, 368, 373, 379, 386, 392, 397, 399, 407, 411] },
                { "caption": "メモリア(支援, 衣装付き)", "ratio": 1200, "content": [148, 162, 192, 204, 215, 264, 278, 288, 300, 305, 321, 331, 336, 349, 370, 381, 391, 400, 405, 408] },
                { "caption": "メモリア(妨害, 衣装付き)", "ratio": 1200, "content": [161, 171, 175, 189, 198, 211, 221, 233, 251, 279, 287, 320, 324, 337, 346, 355, 356, 369, 388, 396, 402, 410] },
                { "caption": "メモリア(回復, 衣装付き)", "ratio": 1200, "content": [155, 186, 193, 203, 210, 249, 262, 282, 330, 354, 372, 382, 389, 394, 401, 403, 409] }
            ],
            "costume": [],
            "item": []
        }
    },
    {
        "name": "衣装交換メダル12月",
        "index": "202212-costume",
        "lineup": {
            "memoria": [],
            "costume": [ { "caption": "衣装", "ratio": 1500, "content": [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 21, 22, 23, 24, 25, 26, 27, 28, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 59, 62, 63, 64, 67, 68, 66, 69, 70, 71, 72, 76, 77, 78, 79, 91, 92, 93, 99, 100, 102, 103, 108, 109, 110, 112, 113, 121, 122, 123, 124, 125, 126, 127, 128, 130, 131, 132, 134, 143, 144, 156, 155, 162, 163, 164, 173, 174, 175, 178, 179, 183, 185, 186, 187, 188, 189, 196, 194, 195, 197, 198, 200, 202, 201, 204, 209, 210, 211, 212, 213, 214, 222, 223, 225, 226, 227, 234, 233, 236, 237, 238, 239, 240, 241, 242] } ],
            "item": []
        }
    }
]