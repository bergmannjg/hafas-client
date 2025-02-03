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

cat ./build/types.d.ts > ./index.d.ts

cat >> ./index.d.ts << EOF

export function createClient(commonProfile: Profile, userAgent: string, opt?: any): HafasClient;
EOF

sed -i 's/export declare type/export type/' index.d.ts

dprint fmt index.d.ts
