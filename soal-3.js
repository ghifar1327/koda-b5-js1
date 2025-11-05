const obj ={
    str : [
        0,
        [
            1,
            2,
            [
                3,
                4,
                5,
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