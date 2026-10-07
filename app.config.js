const IS_DEV = process.env.APP_VARIANT === 'development';

export default ({ config }) => ({
  ...config,
  name: IS_DEV ? 'my-app (Dev)' : 'my-app',
  scheme: IS_DEV ? 'my-app-dev' : 'my-app',
  android: {
    ...config.android,
    package: IS_DEV ? 'com.honorinef.myapp.dev' : 'com.honorinef.myapp',
  },
  ios: {
    ...config.ios,
    bundleIdentifier: IS_DEV ? 'com.honorinef.myapp.dev' : 'com.honorinef.myapp',
  },
});