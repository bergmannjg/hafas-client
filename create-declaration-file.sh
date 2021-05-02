#!/bin/bash
# create a TypeScript declaration file for DefinitelyTyped ./build/index.d.ts are included

if [ ! -f "./tsconfig.json" ]; then
    echo "please run from project directory"
    exit 1
fi

npx tsc --emitDeclarationOnly true --noEmit false

if [ $? -ne 0 ]
then
  exit 1
fi

VERSION=$(grep "version" package.json | sed -E 's/.*([0-9]+\.[0-9]+)\..*/\1/')

cat > ./index.d.ts << EOF
// Type definitions for hafas-client ${VERSION}
// Project: https://github.com/public-transport/hafas-client
// Definitions by: Jürgen Bergmann <https://github.com/bergmannjg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = createClient;

declare function createClient(commonProfile: createClient.Profile, userAgent: string, opt?: any): createClient.HafasClient;

EOF

# remove export
cat ./build/types.d.ts | sed -e 's/^export //' >> ./index.d.ts
