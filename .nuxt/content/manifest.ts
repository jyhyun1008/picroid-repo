export const checksums = {
  "landing": "v3.5.0--b6Br_KLLt8t0c9upt8qfhK_BtkFANfUtmmI5Lf6xrzU",
  "docs": "v3.5.0--6bgZTGkfnBa2zclD8qhgwJW8IHUc1JbUKDU5XI3rq1A"
}
export const checksumsStructure = {
  "landing": "tZyOKbtBW1Y6jgOgyl3rm-ghuJUJsbLCHIgBPzIXDfk",
  "docs": "34VO9dvAPvtpqIagDKzbpgcpKTSRhud0mLOnSKb5i1E"
}

export const tables = {
  "landing": "_content_landing",
  "docs": "_content_docs",
  "info": "_content_info"
}

export default {
  "landing": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "docs": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "links": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
}