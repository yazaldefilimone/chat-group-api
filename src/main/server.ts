import { env } from '@/shared/env';
import { app } from './settings';

app.listen(env.port, () => console.log(`server listening on ${env.port}`));
