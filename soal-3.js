const obj ={
    str : [
        0,
        [
            0,
            1,
            [
                0,
                1,
                2,
                {
                    koda : [
                        {
                            tech : {
                                academy : 
                                    'Koda Tech Academy'
                                
                                
                            }
                        }
                    ]
                }
            ]
        ]
    ]
};
console.log(obj.str[1][2][3].koda[0].tech['academy']);