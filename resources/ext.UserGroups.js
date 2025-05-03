$( () => {
	$( '#groupname' ).on( 'change', () => {
		location = $( '#groupname option:selected' ).val();
	} );
} );
