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

import * as dotenv from 'dotenv';
import sequelize from './config/db';
import app from './middlewares/app';
import { Client, Port } from './types';

dotenv.config({ path: '.env.development' });

const PORT: Port = process.env.PORT ?? 3001;

sequelize
	.sync({ force: true })
	.then(
		(): Client =>
			app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
	)
	.catch((err): never => {
		throw new Error(err);
	});
