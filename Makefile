SUBSET_ARGS = --flavor="woff2" --desubroutinize --recalc-bounds --recalc-average-width --name-IDs='*' --drop-tables+=OS_2
INSTANCER_ARGS = --downgrade-cff 
TITLE_SUBSET_ARGS = --text=velutioRn --layout-features='kern,liga' --ignore-missing-glyphs
TITLE_INSTANCER_ARGS = wght=700 opsz=40
TEXT_SUBSET_ARGS = --unicodes=20-7e
TEXT_INSTANCER_ARGS = wght=300:400:700 opsz=0:0:40
MOSTLANG_SUBSET_ARGS = --unicodes="U+0020-007F, U+2000-206F, U+2070-209F, U+20A0-20CF, U+2100-214F, U+2200-22FF, U+FB00-FB4F, U+2190-21BB"
MOSTLANG_INSTANCER_ARGS = $(TEXT_INSTANCER_ARGS)

help:
	@echo "make fonts"

.PHONY: fonts

src/lib/fonts/%.title.woff2: fonts/%.ttf
	mkdir -p .fonts
	pyftsubset $< $(SUBSET_ARGS) $(TITLE_SUBSET_ARGS) --output-file=.fonts/tmp-$(@F)
	fonttools varLib.instancer  $(INSTANCER_ARGS) -o $@ .fonts/tmp-$(@F) $(TITLE_INSTANCER_ARGS)

src/lib/fonts/%.text.woff2: fonts/%.ttf
	mkdir -p .fonts
	pyftsubset $< $(SUBSET_ARGS) $(TEXT_SUBSET_ARGS) --output-file=.fonts/tmp-$(@F)
	fonttools varLib.instancer $(INSTANCER_ARGS) -o $@ .fonts/tmp-$(@F) $(TEXT_INSTANCER_ARGS)
	
src/lib/fonts/%.mostlang.woff2: fonts/%.ttf
	mkdir -p .fonts
	pyftsubset $< $(SUBSET_ARGS) $(MOSTLANG_SUBSET_ARGS) --output-file=.fonts/tmp-$(@F)
	fonttools varLib.instancer $(INSTANCER_ARGS) -o $@ .fonts/tmp-$(@F) $(MOSTLANG_INSTANCER_ARGS)
	
	
fonts: src/lib/fonts/DMSans.title.woff2 src/lib/fonts/DMSans.text.woff2 src/lib/fonts/DMSans.mostlang.woff2