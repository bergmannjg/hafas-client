import { RawLoc, RawProd, RawRem, RawIco, RawOutCon, RawCommon, RawJny, SearchOnTripRequest } from './types-raw-api';

// The test fixture json files are used to typecheck the raw hafas api types

const dbJourney: Promise<{
    default: {
        common: {
            locL: RawLoc[];
            prodL: RawProd[];
            remL: RawRem[];
            icoL: RawIco[];
        };
        outConL: RawOutCon[];
    }
}> = import('./test/fixtures/db-journey.json')

const dbJourneyPolyline: Promise<{
    default: {
        common: RawCommon;
        outConL: RawOutCon[];
    }
}> = import('./test/fixtures/db-journey-polyline.json')

const dbArrivals: Promise<{
    default: {
        common: RawCommon;
        jnyL: RawJny[];
    }
}> = import('./test/fixtures/db-arrivals.json')

const dbStop: Promise<{
    default: {
        common: RawCommon;
        locL: RawLoc[];
    }
}> = import('./test/fixtures/db-stop.json')

const oebTrip: Promise<{
    default: {
        common: RawCommon;
        journey: RawJny;
    }
}> = import('./test/fixtures/oebb-trip.json')

const bvgJourney: Promise<{
    default: {
        common: RawCommon;
        outConL: RawOutCon[];
    }
}> = import('./test/fixtures/bvg-journey.json')

const bvgRadar: Promise<{
    default: {
        common: RawCommon;
        jnyL: RawJny[];
    }
}> = import('./test/fixtures/bvg-radar.json')

const req: SearchOnTripRequest = {
    "sotMode": "JI",
    "jid": "1|192136|0|80|16082021",
    "locData": {
        "loc": {
            "type": "S",
            "lid": "A=1@L=8002549@"
        },
        "type": "DEP",
        "date": "20210816",
        "time": "092400"
    },
    "arrLocL": [
        {
            "type": "S",
            "lid": "A=1@L=8000207@"
        }
    ],
    "jnyFltrL": [
        {
            "type": "PROD",
            "mode": "INC",
            "value": "1023"
        },
        {
            "type": "META",
            "mode": "INC",
            "meta": "notBarrierfree"
        }
    ],
    "getPasslist": true,
    "getPolyline": false,
    "minChgTime": 0,
    "getTariff": false
}