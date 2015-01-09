/*
 * jQuery - Tromhat Text Replacer
 *
 * jQuery script to find all posts by 
 * Tromhat on the ESEA forums via UID
 * and replace their text.
 *
 * written by eos, licensed under the
 * GNU GPLv3 license.
 * https://www.gnu.org/licenses/gpl.txt
 *
 * contact:
 * https://twitter.com/eos420g
 * frank@draggi.es
 *
 * date: 01/09/2015
*/

// TODO: add an action to the "load more" element in the forums to reload this script on click

// load jquery via cdn
<script src="https://code.jquery.com/jquery-2.1.3.js" type="text/javascript"></script>

// if jquery wasn't loaded, use our local source
if(typeof jQuery === 'undefined'){
    document.write(unescape("%3Cscript src='http://etc.draggi.es/jquery/jquery-2.1.3.min.js' type='text/javascript'%3E%3C/script%3E"));
}


