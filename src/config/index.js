import dev from './config.development';
import qa  from './config.qa';
import production  from './config.production';
import test from './test_config';

const config = Object.freeze({
    "development": dev,
    "qa": qa,
    "production": production,
    "test": test
});

export default config[process.env.NODE_ENV];