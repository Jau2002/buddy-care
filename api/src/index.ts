//       *                                                            *
//                               aaaaaaaaaaaaaaaa               *
//                           aaaaaaaaaaaaaaaaaaaaaaaa
//                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//                      aaaaaaaaaaaaaaaaa           aaaaaa
//                    aaaaaaaaaaaaaaaa                  aaaa
//                   aaaaaaaaaaaaa aa                      aa
//  *               aaaaaaaa      aa                         a
//                  aaaaaaa aa aaaa
//            *    aaaaaaaaa     aaa
//                 aaaaaaaaaaa aaaaaaa                               *
//                 aaaaaaa    aaaaaaaaaa
//                 aaaaaa a aaaaaa aaaaaa
//                  aaaaaaa  aaaaaaa
//                  aaaaaaaa                                 a
//                   aaaaaaaaaa                            aa
//                    aaaaaaaaaaaaaaaa                  aaaa
//                      aaaaaaaaaaaaaaaaa           aaaaaa        *
//        *               aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//                           aaaaaaaaaaaaaaaaaaaaaaaa
//                        *      aaaaaaaaaaaaaaaa

import server from './middlewares/app';

const PORT = 3001;

server.listen(PORT, (): any => console.log(`http://localhost:${PORT}`));