
#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Notification, NSObject)

RCT_EXTERN_METHOD(showNotification:(NSString *)title location:(NSString *)body)
@end
