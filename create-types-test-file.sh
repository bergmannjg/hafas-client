#!/bin/bash
# create a TypeScript file from test fixture js files 

if [ ! -f "./tsconfig.json" ]; then
    echo "please run from project directory"
    exit 1
fi

DATE=$(date)
OUTFILE="types-test-generated.ts"

echo "// created with script './create-types-test-file.sh' at ${DATE}" > ${OUTFILE}
echo "" >> ${OUTFILE}
echo "import { createClient } from './types'" >> ${OUTFILE}

sed -e '/use strict/d' -e 's/module.exports/const dbJourney: createClient.Journey/' test/fixtures/db-journey.js >> ${OUTFILE}

sed -e '/use strict/d' -e 's/module.exports/const dbJourneyPolyline: createClient.Journey/' test/fixtures/db-journey-polyline.js >> ${OUTFILE}

sed -e '/use strict/d' -e 's/module.exports/const dbArrivals: createClient.Alternative[]/' test/fixtures/db-arrivals.js >> ${OUTFILE}

sed -e '/use strict/d' -e 's/module.exports/const bvgRadar: createClient.Alternative[]/' test/fixtures/bvg-radar.js >> ${OUTFILE}
