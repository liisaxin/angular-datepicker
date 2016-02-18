
angular.module("datetimepicker", []).directive('datetimepicker', function() {
	return {
		restrict : 'A',
		link : function(scope, element, attr) {
			var _conf = {
							lang:'zh'
						};
						
			if (attr.plugintype == 'datetime') {
				_conf.format = attr.format || 'Y-m-d H:i:s';
				$(element).datetimepicker(_conf);
			} else if (attr.plugintype == 'date') {
				_conf.format = attr.format || 'Y-m-d';
				_conf.timepicker = false;
				$(element).datetimepicker(_conf);
			} else if (attr.plugintype == 'time') {
				_conf.format = attr.format || 'H:i:s';
				_conf.datepicker = false;
				$(element).datetimepicker(_conf);
			}
			
		}
	};
});
