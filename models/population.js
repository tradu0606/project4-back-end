
const mongoose = require('../connections');

const Population = new mongoose.Schema({
    1960: String,
    1961: String,
    1962: String,
    1963: String,
    1964: String,
    1965: String,
    1966: String,
    1967: String,
    1968: String,
    1969: String,
    1970: String,
    1971: String,
    1972: String,
    1973: String,
    1974: String,
    1975: String,
    1976: String,
    1977: String,
    1978: String,
    1979: String,
    1980: String,
    1981: String,
    1982: String,
    1983: String,
    1984: String,
    1985: String,
    1986: String,
    1987: String,
    1988: String,
    1989: String,
    1990: String,
    1991: String,
    1992: String,
    1993: String,
    1994: String,
    1995: String,
    1996: String,
    1997: String,
    1998: String,
    1999: String,
    2000: String,
    2001: String,
    2002: String,
    2003: String,
    2004: String,
    2005: String,
    2006: String,
    2007: String,
    2008: String,
    2009: String,
    2010: String,
    2011: String,
    2012: String,
    2013: String,
    2014: String,
    2015: String,
    2016: String,
    2017: String,
    CountryName: String,
    CountryCode: String,
    IndicatorName: String,
    IndicatorCode: String
});

module.exports = mongoose.model('Population', Population);
            