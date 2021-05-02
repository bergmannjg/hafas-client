import { raw } from './types-raw-api';

// The test fixture json files are used to typecheck the raw hafas api types

const dbJourney: Promise<{
    default: {
        common: {
            locL: raw.RawLoc[];
            prodL: raw.RawProd[];
            remL: raw.RawRem[];
            icoL: raw.RawIco[];
        };
        outConL: raw.RawOutCon[];
    }
}> = import('./test/fixtures/db-journey.json')

const dbJourneyPolyline: Promise<{
    default: {
        common: raw.RawCommon;
        outConL: raw.RawOutCon[];
    }
}> = import('./test/fixtures/db-journey-polyline.json')

const dbArrivals: Promise<{
    default: {
        common: raw.RawCommon;
        jnyL: raw.RawJny[];
    }
}> = import('./test/fixtures/db-arrivals.json')

const dbStop: Promise<{
    default: {
        common: raw.RawCommon;
        locL: raw.RawLoc[];
    }
}> = import('./test/fixtures/db-stop.json')

const oebTrip: Promise<{
    default: {
        common: raw.RawCommon;
        journey: raw.RawJny;
    }
}> = import('./test/fixtures/oebb-trip.json')

const bvgJourney: Promise<{
    default: {
        common: raw.RawCommon;
        outConL: raw.RawOutCon[];
    }
}> = import('./test/fixtures/bvg-journey.json')

const bvgRadar: Promise<{
    default: {
        common: raw.RawCommon;
        jnyL: raw.RawJny[];
    }
}> = import('./test/fixtures/bvg-radar.json')

const sbbJourneys: Promise<{
    default: {
        common: raw.RawCommon;
        outConL: raw.RawOutCon[];
    }
}> = import('./test/fixtures/sbb-journeys.json')
